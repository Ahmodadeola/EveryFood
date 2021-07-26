import Customer from "../../components/home/Customer";
import renderWithRouter from "../TestHOC/renderWithRouter";

describe("Landing page tests", () => {
  const { getAllByText } = renderWithRouter(<Customer />);
  test("Customer component test", () => {
    const texts = [
      "Want something tasty?",
      "EveryFood offers you a plethora of tasty dishes from different food vendors across different locations delivered to you in a jiff(We can't teleport though)",
    ];
    texts.forEach((text) => getAllByText(text));
  });
});
