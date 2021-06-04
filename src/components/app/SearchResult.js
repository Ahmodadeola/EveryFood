import React from "react";

function SearchResult({ results }) {
  return (
    <ul className="absolute rounded mt-4 p-y flex flex-col bg-white text-green-400 border-white border-solid space-y-3 border-2 w-3/4">
      {results.length > 0 ? (
        results.map((item, idx) => (
          <a href="/#" key={idx}>
            <li className="hover:bg-indigo-100 p-3 py-1">{item.dish}</li>
          </a>
        ))
      ) : (
        <li className="p-3">Item not found</li>
      )}
    </ul>
  );
}

export default SearchResult;
