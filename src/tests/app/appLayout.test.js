import React, { screen, fireEvent } from "@testing-library/react";
import AppLayout from "../../layouts/appLayout";
import renderAll from "../TestHOC/renderWithAll";

describe("app layout test", () => {
  const links = ["Dishes", "Tray", "Profile", "Vendor"];

  test("NavBar links check", () => {
    const { getByText } = renderAll(<AppLayout />);
    getByText("EveryFood");
    screen.debug();
    // links on desktop Navbar
    [...document.querySelectorAll("nav.hidden a")].forEach((el, idx) => {
      expect(el.textContent).toBe(links[idx]);
    });

    // links on mobile Navbar
    [...document.querySelectorAll("div>ul a")].forEach((el, idx) => {
      expect(el.textContent).toBe(links[idx]);
    });
  });

  test("Header data check", () => {
    const { getByTitle, getByLabelText, getAllByText } = renderAll(
      <AppLayout />
    );
    const page = getByTitle("currentPage");
    expect(page.textContent).toBe("");
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
