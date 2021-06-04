import React from "react";

function SearchResult({ results }) {
  return (
    <ul className="p-4 flex flex-col bg-white text-green-400 border-white border-solid space-y-3 border-2 w-3/4">
      {results.map((item, idx) => (
        <a href="/#">
          <li className="">{item.dish}</li>
        </a>
      ))}
    </ul>
  );
}

export default SearchResult;
