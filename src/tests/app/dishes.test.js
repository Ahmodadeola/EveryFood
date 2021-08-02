import Dishes from "../../pages/app/dishes";
import renderAll from "../TestHOC/renderWithAll";
import { initDishState } from "../others/initState";

describe("Dishes page test", () => {
  test("Dish cards test based on items set in the store", () => {
    const { getAllByText, getAllByAltText } = renderAll(<Dishes />);
    initDishState.forEach((dish) => {
      getAllByText(dish.name);
      getAllByText(dish.scope);
      getAllByText(dish.price);
      getAllByAltText(dish.name);
    });
  });
});
