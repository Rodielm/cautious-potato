import ProductCard from "@/components/ProductCard";
import { SkeletonCard } from "./SkeletonCard";
import { useCart } from "@/contexts/cartContext";

const ProductList = () => {
  const { products, search, loading, error } = useCart();
  
  const filteredProducts = products.filter((product) =>
    `${product.brand} ${product.model}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loading ? (
        <>
          {[...Array(8)].map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </>
      ) : filteredProducts?.length > 0 ? (
        filteredProducts?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))
      ) : (
        <p className="text-gray-500">No hay productos que coincidan.</p>
      )}
    </div>
  );
};

export default ProductList;
