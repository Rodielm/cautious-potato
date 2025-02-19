import { Input } from "./ui/input";
import { useCart } from "@/contexts/cartContext";

const SearchBar = () => {
  const { search, setSearch } = useCart();

  return (
    <div className="flex gap-2">
      <Input
        className="flex-1"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or brand..."
      />
    </div>
  );
};

export default SearchBar;
