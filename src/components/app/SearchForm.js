import React from "react";

function SearchForm() {
  return (
    <div className="md:hidden bg-green-400">
      <input
        type="search"
        className="w-full absolute z-18 focus:outline-none "
      />
    </div>
  );
}

export default SearchForm;
