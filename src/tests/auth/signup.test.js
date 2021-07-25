import { fireEvent, screen } from "@testing-library/react";
import Signup from "../../pages/auth/signup";
import renderAll from "../TestHOC/renderWithAll";

describe("Signup page", () => {
  test("inputs, labels and submit button check", () => {
    const { getByLabelText, getByText } = renderAll(<Signup />);
    ["Email", "First name", "Last name", "Password"].forEach((name) => {
      fireEvent.change(getByLabelText(name), {
        target: { value: "ahmo@xyz.com" },
      });
      expect(getByText(name)).toHaveClass("h-auto");
    });
    getByText("Submit");
  });

  test("forgot password and login links check", () => {
    const { getByText } = renderAll(<Signup />);
    expect(getByText("login")).toHaveAttribute("href", "/auth/login");
    expect(getByText("forgot password")).toHaveAttribute(
      "href",
      "/auth/forgot-password"
    );
  });

  test("form validation check", () => {
    const { getByLabelText, getByTestId } = renderAll(<Signup />);
    expect(getByTestId("submit")).toHaveAttribute("disabled");
    ["Email", "First name", "Last name", "Password"].forEach((name) => {
      const input = getByLabelText(name);
      fireEvent.focus(input);
      expect(input.nextElementSibling).toHaveClass("h-auto");
    });
  });
});
