import { useState } from "react";

const useSearch = () => {
  const [keyword, setKey] = useState("");
  const items = [
    { dish: "Bread and Egg" },
    { dish: "Chicken and Chips" },
    { dish: "Beans and Dodo" },
    { dish: "Shawarma" },
    { dish: "Noodles and fried egg" },
    { dish: "Sandwich" },
    { dish: "Burger" },

    { dish: "Fried rice and chicken" },
    { dish: "Spaghetti and chicken" },
    { dish: "Yam and fried egg" },
    { dish: "Toast bread" },
  ];
  const results = !!keyword
    ? items.filter(
        (item) => item.dish.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      )
    : [];

  return {
    changeHandler: (e) => setKey(e.target.value),
    results,
    keyword,
  };
};

export default useSearch;
