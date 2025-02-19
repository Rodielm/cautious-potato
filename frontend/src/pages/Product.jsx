import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import productDetailData from "../../product_detail.json";
import { excludeItems, filterItems } from "@/utils/arr";
import { formatCamelCase } from "@/utils/string";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const productKeys = Object.keys(productDetailData);
  const productProps = excludeItems(productKeys, ["id", "options", "imgUrl"]);

  const productActions = Object.keys(productDetailData["options"]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex justify-center">
          <img
            className="object-cover rounded-lg h-2/4"
            src="https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
          ></img>
        </div>
        <div className="flex flex-col gap-3">
          <Card className="p-3">
            <CardTitle className="mb-3">Description</CardTitle>
            <CardContent>
              <ul className="list-none text-sm">
                {productProps.map((item, idx) => (
                  <li key={idx}>
                    <b>{formatCamelCase(item)}:</b>{" "}
                    {Array.isArray(productDetailData[item]) ? (
                      <span className="capitalize">
                        {productDetailData[item].join(", ")}
                      </span>
                    ) : (
                      productDetailData[item]
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="p-3">
            <CardTitle className="mb-3">Actions</CardTitle>
            <CardContent>
              <ul className="list-none ">
                {productActions.map((option, idx) => (
                  <div key={idx} className="sm:col-span-3 ">
                    <label
                      htmlFor={option}
                      className="block font-medium text-gray-900"
                    >
                      <span className="capitalize">{option}</span>
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <Select
                        defaultValue={
                          productDetailData["options"][option][0]["code"]
                        }
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          {productDetailData["options"][option].map(
                            (opt, idx) => (
                              <SelectItem key={idx} value={opt.code}>
                                <div className="flex gap-2 items-center">
                                  {option == "colors" && (
                                    <div
                                      style={{ backgroundColor: opt.name }}
                                      className="w-5 h-5 p-2 rounded-full"
                                    />
                                  )}
                                  {opt.name}
                                </div>
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col gap-2">
                <div>
                  <Button>
                    <ShoppingCart />
                    Add Card
                  </Button>
                </div>
                <div className="w-full">
                  <Button onClick={() => navigate(-1)}>
                    <ArrowLeft />
                    Go Back
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Product;
