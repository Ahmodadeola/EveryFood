import React, { useState } from "react";
import { FaArrowLeft, FaSearch, FaTimes } from "react-icons/fa";
import SearchResult from "./SearchResult";

function SearchForm({ toggle }) {
  const [keyword, setKey] = useState("");
  const results = [
    { dish: "Bread and Egg" },
    { dish: "Chicken and Chips" },
    { dish: "Burger" },
    { dish: "Shawarma" },
  ];
  return (
    <div className="bg-green-300 w-full mx-auto p-4 relative text-white">
      <label htmlFor="search-form" className="invisible">
        mobile search form
      </label>
      <input
        autoFocus
        id="search-form"
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter item..."
        type="text"
        className="left-11 bg-transparent outline-none h-5 w-5/6 absolute pl-3 py-3 text-white border-b-2 border-solid 
        border-gray-200"
      />
      <FaArrowLeft
        onClick={toggle}
        size="20"
        className="text-white float-left inline-block cursor-pointer"
      />
      <FaTimes
        onClick={toggle}
        size="20"
        className="text-white float-right inline-block cursor-pointer"
      />
      <div className="absolute top-5 w-4/5"></div>
      {!!keyword && <SearchResult results={results} />}
    </div>
  );
}

export default SearchForm;
