import { screen } from "@testing-library/react";
import renderAll from "../TestHOC/renderWithAll";
import Vendor from "../../pages/app/vendor";

describe("Dishes page test", () => {
  test("Tray page content test", () => {
    const { getByText } = renderAll(<Vendor />);
    getByText("This is the Vendor page");
    screen.debug();
  });
});
