import react from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <div className="hidden md:inline-block relative">
      <label htmlFor="search-form" className="invisible">
        search form
      </label>
      <input
        id="search-form"
        placeholder="Enter item..."
        className="outline-none border-solid border-2
      border-green-500 rounded-md h-10 w-30 pl-3"
      />
      <FaSearch size="20" className="absolute right-2 top-2 text-green-400" />
    </div>
  );
}

export default SearchInput;
