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
      <figure className="p-3">
        <img className="w-full object-cover rounded-lg" src={product.imgUrl} />
      </figure>
      <CardContent>
        <CardTitle>{product.model}</CardTitle>
        <CardDescription>{product.brand}</CardDescription>
        <span className="text-lg font-medium">
          {product.price ? product.price + "$" : "???"}
        </span>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <Button>Add Card</Button>
          <Button>Buy</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
