import { ArrowLeft, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { excludeItems } from "@/utils/arr";
import { formatCamelCase } from "@/utils/string";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router";
import { useCart } from "@/contexts/cartContext";
import { useEffect, useState } from "react";

const ProductDetail = ({ product }) => {
  const { addCart } = useCart();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(
    product?.options?.colors[0]?.code || ""
  );
  const [selectedStorage, setSelectedStorage] = useState(
    product?.options?.storages[0]?.code || ""
  );
  const productKeys = Object.keys(product);
  const productProps = excludeItems(productKeys, ["id", "options", "imgUrl"]);
  const productActions = Object.keys(product["options"]);

  useEffect(() => {
    setSelectedColor(product?.options?.colors[0]?.code || "");
    setSelectedStorage(product?.options?.storages[0]?.code || "");
  }, [product]);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedStorage) {
      alert("Selecciona un color y una capacidad antes de añadir al carrito.");
      return;
    }

    const productToAdd = {
      id: product.id,
      colorCode: selectedColor,
      storageCode: selectedStorage,
    };

    addCart(productToAdd);
  };

  const handleAction = (val, option) => {
    console.log("select option: ", val, " ", option);
    if (option === "colors") {
      setSelectedColor(val);
    }

    if (option === "storages") {
      setSelectedStorage(val);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex justify-center">
          <img
            className="object-cover rounded-lg h-2/4"
            src={product.imgUrl}
          ></img>
        </div>
        <div className="flex flex-col gap-3">
          {/* Features Phone */}
          <Card className="p-3">
            <CardTitle className="text-lg mb-3">
              {product.brand} {product.model}
            </CardTitle>
            <CardDescription className="mb-3">
              Technical specifications
            </CardDescription>
            <CardContent>
              <ul className="list-none text-sm">
                {productProps.map((item, idx) => (
                  <li key={idx}>
                    <b>{formatCamelCase(item)}:</b>{" "}
                    {Array.isArray(product[item]) ? (
                      <span className="capitalize">
                        {product[item].join(", ")}
                      </span>
                    ) : (
                      product[item]
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          {/* Actions  */}
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
                        onValueChange={(val) => handleAction(val, option)}
                        defaultValue={product["options"][option][0]["code"]}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          {product["options"][option].map((opt, idx) => (
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
                          ))}
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
                  <Button onClick={handleAddToCart}>
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

export default ProductDetail;
