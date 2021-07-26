import React from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import SearchResult from "./SearchResult";
import useSearch from "../../hooks/useSearch";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDish } from "../../store/reducers/dishesSlice";
import { animated, useSpring, config } from "@react-spring/web";

function SearchForm({ toggle }) {
  const { dishes } = useSelector((state) => state.dish);
  const { changeHandler, results, keyword, reset } = useSearch(dishes);
  const dispatch = useDispatch();

  return (
    <div className="bg-green-300 w-full mx-auto p-4 relative text-white">
      <label htmlFor="search-form" className="invisible">
        mobile search form
      </label>
      <input
        autoFocus
        value={keyword}
        id="search-form"
        onChange={changeHandler}
        placeholder="Enter item..."
        type="text"
        className="left-11 bg-transparent outline-none h-5 w-3/4 absolute pl-3 py-3 text-white border-b-2 border-solid 
        border-gray-200"
      />
      <FaArrowLeft
        onClick={toggle}
        size="20"
        className="text-white float-left inline-block cursor-pointer"
      />
      <FaTimes
        onClick={reset}
        size="20"
        className="text-white float-right inline-block cursor-pointer"
      />
      <div className="absolute top-5 w-4/5"></div>
      {!!keyword && (
        <SearchResult
          results={results}
          setDish={(dish) => dispatch(setSelectedDish(dish))}
          reset={reset}
        />
      )}
    </div>
  );
}

export default SearchForm;
