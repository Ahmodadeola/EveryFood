import { setPageDish } from "../../store/reducers/dishesSlice";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Spag from "../../assets/images/spag.jpg";
import SpagImg from "../../assets/images/spag2.jpg";
import { render } from "@testing-library/react";
import store from "../../store/store";

const initState = [
  { imgLink: SpagImg, price: 600, name: "Spagetti", scope: "Ogun" },
  { imgLink: Spag, price: 600, name: "Spagetti", scope: "Ogun" },
  {
    imgLink: SpagImg,
    price: 1600,
    name: "Chicken and Chips",
    scope: "Lagos",
  },
  { imgLink: Spag, price: 600, name: "Spagetti", scope: "Ogun" },
  {
    imgLink: SpagImg,
    price: 600,
    name: "Fried Rice and Chicken",
    scope: "Ogun",
  },
  {
    imgLink: Spag,
    price: 600,
    name: "Beans and Dodo",
    scope: "Ebute Meta",
  },
  {
    imgLink: SpagImg,
    price: 1600,
    name: "Chicken and Chips",
    scope: "Lagos",
  },
  { imgLink: Spag, price: 600, name: "Spagetti", scope: "Ogun" },
  {
    imgLink: SpagImg,
    price: 600,
    name: "Fried Rice and Chicken",
    scope: "Ogun",
  },
  {
    imgLink: Spag,
    price: 600,
    name: "Beans and Dodo",
    scope: "Ebute Meta",
  },
];

export default function renderAll(component) {
  store.dispatch(setPageDish(initState));
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter>{component}</MemoryRouter>
      </Provider>
    ),
  };
}
