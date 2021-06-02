import React from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

function SearchForm({ toggle }) {
  return (
    <div className="bg-green-300 w-full mx-auto p-4 relative">
      <input
        autoFocus
        type="text"
        className="left-11 bg-transparent outline-none h-5 w-5/6 absolute pl-3 py-4 text-white border-b-2 border-solid 
        border-gray-200"
      />
      <FaArrowLeft
        onClick={toggle}
        size="20"
        className="text-white inline-block cursor-pointer"
      />
      <div className="absolute top-5 w-4/5"></div>
    </div>
  );
}

export default SearchForm;
