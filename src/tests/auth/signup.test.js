import { render } from "@testing-library/react";
import Login from "../../pages/auth/login";

describe("Signup page", () => {
  const { getByLabelText, getByText } = render(<Login />);
  test("input labels check", () => {
    ["email", "first-name", "last-name", "password"].forEach((name) =>
      getByLabelText(name)
    );
    getByText("Sign up");
  });
});
