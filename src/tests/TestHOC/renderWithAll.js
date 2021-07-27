import { setDishes } from "../../store/reducers/dishesSlice";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "../../store/store";
import initDishState from "../others/initDishState";

export default function renderAll(component) {
  store.dispatch(setDishes(initDishState));
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter>{component}</MemoryRouter>
      </Provider>
    ),
  };
}
