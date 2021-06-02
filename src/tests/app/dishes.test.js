import { screen, render, fireEvent } from "@testing-library/react";
import Dishes from "../../pages/app/dishes";

describe("Dishes page test", () => {
  const links = ["Dishes", "Tray", "Profile", "Vendor"];
  test("NavBar links check", () => {
    const { getByText } = render(<Dishes />);
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
    const { getByTitle, getByLabelText } = render(<Dishes />);
    const page = getByTitle("page");
    expect(page.textContent).toBe(links[0]);
    const searchIcon = document.querySelectorAll("header>div>svg")[1];
    fireEvent.click(searchIcon);
    expect(getByLabelText("mobile search form")).toHaveFocus();
  });
});
