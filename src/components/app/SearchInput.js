import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import useSearch from "../../hooks/useSearch";
import { setSelectedDish } from "../../store/reducers/dishesSlice";
import SearchResult from "./SearchResult";

function SearchInput() {
  const { dishes } = useSelector((state) => state.dish);
  const { changeHandler, results, keyword, reset } = useSearch(dishes);
  const dispatch = useDispatch();

  const setDishInfo = (dish) => {
    dispatch(setSelectedDish(dish));
  };

  return (
    <div className="hidden md:inline-block">
      <label htmlFor="md-search-form" className="invisible">
        md search form
      </label>
      <input
        value={keyword}
        id="md-search-form"
        placeholder="Enter item..."
        onChange={changeHandler}
        className="outline-none border-solid border-2
      border-green-300 rounded-md h-10 w-30 pl-3 text-green-400"
      />
      <FaSearch size="20" className="absolute right-2 top-2 text-green-400" />
      {!!keyword && (
        <SearchResult results={results} setDish={setDishInfo} reset={reset} />
      )}
    </div>
  );
}

export default SearchInput;
