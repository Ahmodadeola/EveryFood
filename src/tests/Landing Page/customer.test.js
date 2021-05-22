import { render } from "@testing-library/react";
import Home from "../../pages/index";

describe("Landing page tests", () => {
  const { queryAllByText } = render(<Home />);

  test("Header elements", () => {
    queryAllByText("EveryFood");
    queryAllByText("Where food lovers meet food makers");
  });
});
