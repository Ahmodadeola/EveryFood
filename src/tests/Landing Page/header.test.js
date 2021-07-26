import Header from "../../components/home/Header";
import renderWithRouter from "../TestHOC/renderWithRouter";

describe("Landing page tests", () => {
  const { getAllByText } = renderWithRouter(<Header />);

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
