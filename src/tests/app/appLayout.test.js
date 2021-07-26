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

    // >= medium screens search input
    const searchInput = getByLabelText("md search form");
    fireEvent.focus(searchInput);

    // The values and results are based on the initially set dishes state in store
    fireEvent.change(searchInput, { target: { value: "egg" } });
    getAllByText(/item not found/i);

    fireEvent.change(searchInput, { target: { value: "beans" } });
    getAllByText(/beans/i);

    // < medium screens search input test
    const searchIcon = document.querySelectorAll("header>div>svg")[1];
    fireEvent.click(searchIcon);
    const searchForm = getByLabelText("mobile search form");
    expect(searchForm).toHaveFocus();

    // The values and results are based on the initially set dishes state in store
    fireEvent.change(searchForm, { target: { value: "egg" } });
    getAllByText(/item not found/i);

    fireEvent.change(searchForm, { target: { value: "beans" } });
    getAllByText(/beans/i);
  });
});
