import { Link } from "react-router";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
  CardContent,
} from "./ui/card";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <figure className="relative p-10 w-full">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={product.imgUrl}
          />
        </figure>

        <CardContent>
          <CardTitle>{product.model}</CardTitle>
          <CardDescription>{product.brand}</CardDescription>
          <span className="text-lg font-medium">
            {product.price ? product.price + "$" : "???"}
          </span>
        </CardContent>
      </Link>
      {/* <CardFooter>
        <div className="flex gap-2">
          <Button onClick={() => console.log("Add Card")}>Add Card</Button>
          <Button onClick={() => console.log("Buy Product")}>Buy</Button>
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
