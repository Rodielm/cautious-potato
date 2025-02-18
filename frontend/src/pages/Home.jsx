import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import data from "../../data.json";

const Home = () => {
  return (
    <>
      <div className="flex flex-row-reverse mb-3">
        <SearchBar />
      </div>
      {/* Product ListView */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
