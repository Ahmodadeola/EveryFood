import react from "react";
import { FaSearch } from "react-icons/fa";
import useSearch from "../../hooks/useSearch";
import SearchResult from "./SearchResult";

function SearchInput() {
  const { changeHandler, results, keyword } = useSearch();
  return (
    <div className="hidden md:inline-block relative">
      <label htmlFor="md-search-form" className="invisible">
        md search form
      </label>
      <input
        id="md-search-form"
        placeholder="Enter item..."
        onChange={changeHandler}
        className="outline-none border-solid border-2
      border-green-500 rounded-md h-10 w-30 pl-3 text-green-400"
      />
      <FaSearch size="20" className="absolute right-2 top-2 text-green-400" />
      {!!keyword && <SearchResult results={results} />}
    </div>
  );
}

export default SearchInput;
