import { render, screen } from "@testing-library/react";
import ImageSlider from "../ImageSlider";

test("Error occurs if <ImageSlider /> has no children.", () => {
  render(<ImageSlider />);
  expect(screen.getByText("ImageSlider must have at least 1 child.")).toBeInTheDocument();
});
