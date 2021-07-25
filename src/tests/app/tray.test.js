import { screen } from "@testing-library/react";
import renderAll from "../TestHOC/renderWithAll";
import Tray from "../../pages/app/tray";

describe("Dishes page test", () => {
  test("Tray page content test", () => {
    const { getByText } = renderAll(<Tray />);
    getByText("This is the tray page");
    screen.debug();
  });
});
