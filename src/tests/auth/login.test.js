import Login from "../../pages/auth/login";
import renderAll from "../TestHOC/renderWithAll";

describe("Test Login page", () => {
  const { getByLabelText, getByText } = renderAll(<Login />);
  test("input labels check", () => {
    ["Email", "Password"].forEach((name) => getByLabelText(name));
    getByText("Login");
  });
});
