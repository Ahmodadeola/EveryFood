import { render } from "@testing-library/react";
import Login from "../../pages/auth/login";

describe("Test Login page", () => {
  const { getByLabelText, getByText } = render(<Login />);
  test("input labels check", () => {
    ["Email", "Password"].forEach((name) => getByLabelText(name));
    getByText("Login");
  });
});
