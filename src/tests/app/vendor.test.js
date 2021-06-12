import { render } from "@testing-library/react";
import Dishes from "../../pages/app/dishes";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "../../store/reducers/dishesSlice";
import { MemoryRouter } from "react-router-dom";
import * as reactRedux from "react-redux";
import Spag from "../../assets/images/spag.jpg";
import SpagImg from "../../assets/images/spag2.jpg";
import store from "../../store/store";

const renderAll = () =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Dishes />
      </MemoryRouter>
    </Provider>
  );

describe("Dishes page test", () => {
  const links = ["Dishes", "Tray", "Profile", "Vendor"];
  test("NavBar links check", () => {
    const { getByText } = renderAll();
    getByText("EveryFood");

    // links on desktop Navbar
    [...document.querySelectorAll("nav.hidden a")].forEach((el, idx) => {
      expect(el.textContent).toBe(links[idx]);
    });

    const dishLink = [...document.querySelectorAll("nav.hidden a>li")][0];
    expect(dishLink).toHaveClass(
      "text-md cursor-pointer font-medium text-gray-500 border-solid border-white border-r-4 hover:text-indigo-500 hover:bg-indigo-100 p-3 text-green-500 border-green-500 bg-indigo-100"
    );
    // links on mobile Navbar
    [...document.querySelectorAll("div>ul a")].forEach((el, idx) => {
      expect(el.textContent).toBe(links[idx]);
    });
  });
});
