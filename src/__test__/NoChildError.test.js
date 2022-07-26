import { render, screen } from "@testing-library/react";
import NoChildError from "../components/NoChildError";

test("render <NoChildError />", () => {
  render(<NoChildError />);
  expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
  expect(screen.getByText("ImageSlider must have at least 1 child.")).toBeInTheDocument();
});
