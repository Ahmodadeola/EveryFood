import React, { screen, render, fireEvent } from "@testing-library/react";
import Dishes from "../../pages/app/dishes";
import AppLayout from "../../layouts/appLayout";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "../../store/reducers/dishesSlice";
import { MemoryRouter } from "react-router-dom";
import * as reactRedux from "react-redux";
import Spag from "../../assets/images/spag.jpg";
import SpagImg from "../../assets/images/spag2.jpg";
import store from "../../store/store";

// const store = configureStore({
//   reducer: {
//     dish: dishReducer,
//   },
// });

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// const useSelectorMock = reactRedux.useSelector;
// const useDispatchMock = reactRedux.useDispatch;

// // beforeEach(() => {
// useSelectorMock.mockImplementation((selector) => selector(store));
// useDispatchMock.mockImplementation(() => {});
// // });

const renderAll = () =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <AppLayout>
          <Dishes />
        </AppLayout>
      </MemoryRouter>
    </Provider>
  );

// test("Dish texts", () => {
//   const { getByText } = renderAll();

//   getByText("EveryFood");
//   screen.debug();
// });

describe("Dishes page test", () => {
  // beforeEach(() => {
  //   useSelectorMock.mockImplementation((selector) => selector(mockStore));
  //   useDispatchMock.mockImplementation(() => {});
  // });

  // afterEach(() => {
  //   useDispatchMock.mockClear();
  //   useSelectorMock.mockClear();
  // });

  // const store = configureStore({
  //   reducer: {
  //     dish: dishReducer,
  //   },
  // });

  // const useSelectorMock = reactRedux.useSelector;
  // const useDispatchMock = reactRedux.useDispatch;

  // const mockStore = {
  //   app: {
  //     currentPage: "Dishes",
  //     active: "Dishes",
  //   },
  //   dish: {
  //     dishes: [
  //       { imgLink: SpagImg, price: 600, name: "Spagetti", scope: "Ogun" },
  //       { imgLink: Spag, price: 600, name: "Spagetti", scope: "Ogun" },
  //       {
  //         imgLink: SpagImg,
  //         price: 1600,
  //         name: "Chicken and Chips",
  //         scope: "Lagos",
  //       },
  //       { imgLink: Spag, price: 600, name: "Spagetti", scope: "Ogun" },
  //       {
  //         imgLink: SpagImg,
  //         price: 600,
  //         name: "Fried Rice and Chicken",
  //         scope: "Ogun",
  //       },
  //       {
  //         imgLink: Spag,
  //         price: 600,
  //         name: "Beans and Dodo",
  //         scope: "Ebute Meta",
  //       },
  //       {
  //         imgLink: SpagImg,
  //         price: 1600,
  //         name: "Chicken and Chips",
  //         scope: "Lagos",
  //       },
  //       { imgLink: Spag, price: 600, name: "Spagetti", scope: "Ogun" },
  //       {
  //         imgLink: SpagImg,
  //         price: 600,
  //         name: "Fried Rice and Chicken",
  //         scope: "Ogun",
  //       },
  //       {
  //         imgLink: Spag,
  //         price: 600,
  //         name: "Beans and Dodo",
  //         scope: "Ebute Meta",
  //       },
  //     ],
  //     selctedDish: {
  //       imgLink: Spag,
  //       price: 600,
  //       dish: "Beans and Dodo",
  //       scope: "Ebute Meta",
  //     },
  //   },
  //   auth: {},
  // };

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

  test("Header data check", () => {
    const { getByTitle, getByLabelText, getAllByText } = renderAll();
    const page = getByTitle("currentPage");
    expect(page.textContent).toBe(links[0]);
    const searchIcon = document.querySelectorAll("header>div>svg")[1];
    fireEvent.click(searchIcon);
    screen.debug();
    // < medium screens search input test
    const searchInput = getByLabelText("mobile search form");
    expect(searchInput).toHaveFocus();
    fireEvent.change(searchInput, { target: { value: "egg" } });
    getAllByText(/egg/i);
  });
});
