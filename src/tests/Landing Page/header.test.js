import { render } from "@testing-library/react";
import Header from "../../components/home/Header";

describe("Landing page tests", () => {
  const { getAllByText } = render(<Header />);

  test("Header elements", () => {
    const texts = [
      "EveryFood",
      "Where food lovers meet food makers",
      "Home",
      "About",
      "Sign Up",
    ];
    texts.forEach((text) => getAllByText(text));
  });
});
