import { useState } from "react";

const useSearch = (items) => {
  const [keyword, setKey] = useState("");
  const results =
    items && items.length > 0 && !!keyword
      ? items.filter(
          (item) =>
            item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        )
      : [];
  return {
    changeHandler: (e) => setKey(e.target.value),
    results,
    keyword,
    reset: () => setKey(""),
  };
};

export default useSearch;
