import { render } from "@testing-library/react";
import Dishes from "../../pages/app/dishes";

describe("Dishes page test", () => {
  test("Check", () => {
    const { getByText } = render(<Dishes />);
    getByText("EveryFood");
    ["Dishes", "Tray", "Profile", "Vendor"].forEach((item) => {
      getByText(item);
    });
  });
});
