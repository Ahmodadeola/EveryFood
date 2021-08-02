import { screen } from "@testing-library/react";
import renderAll from "../TestHOC/renderWithAll";
import Tray from "../../pages/app/tray";
import { initTrayState } from "../others/initState";

describe("Dishes page test", () => {
  test("Tray page content test based on the content in the initial tray state", () => {
    const { getAllByAltText, getAllByText } = renderAll(<Tray />);
    initTrayState.forEach((item) => {
      getAllByText(item.dish.name);
      getAllByText(item.dish.scope);
      getAllByText(item.dish.price);
      getAllByAltText(item.dish.name);
      getAllByText(item.quantity + " unit(s)");
    });
    screen.debug();
  });
});
