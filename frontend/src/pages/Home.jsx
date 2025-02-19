import SearchBar from "@/components/SearchBar";
import ProductList from "@/components/ProductList";


const Home = () => {
  
  return (
    <>
      <div className="flex flex-row-reverse mb-3">
        <SearchBar />
      </div>
      {/* Product ListView */}
      <ProductList />
    </>
  );
};

export default Home;
