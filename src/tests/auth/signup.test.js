import { render } from "@testing-library/react";
import Signup from "../../pages/auth/signup";

describe("Signup page", () => {
  const { getByLabelText, getByText } = render(<Signup />);
  test("input labels check", () => {
    ["Email", "First-name", "Last-name", "Password"].forEach((name) =>
      getByLabelText(name)
    );
    getByText("Submit");
  });
});
