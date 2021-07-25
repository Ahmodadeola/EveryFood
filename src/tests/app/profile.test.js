import { screen } from "@testing-library/react";
import renderAll from "../TestHOC/renderWithAll";
import Profile from "../../pages/app/profile";

describe("Dishes page test", () => {
  test("Profile page content test", () => {
    const { getByText } = renderAll(<Profile />);
    getByText("This is the profile page");
    screen.debug();
  });
});
