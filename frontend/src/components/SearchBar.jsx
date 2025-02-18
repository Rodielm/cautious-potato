import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  const handleSearch = (e) => {
    console.log("OnClick search");
  };
  return (
    <div className="flex gap-2">
      <Input
        className="flex-1"
        type="text"
        placeholder="Search by products..."
      />
      <Button onClick={handleSearch}>
        <Search className="w-4 h-4 mr-2" />
      </Button>
    </div>
  );
};

export default SearchBar;
