import { render, screen } from "@testing-library/react";
import Slide from "../Slide";

test("render <Slide />", () => {
  render(<Slide><img alt="test_image" src="./testImg.jpg" /></Slide>);

  const slideImg = screen.getByRole("img");
  expect(slideImg).toHaveAttribute("src", "./testImg.jpg");
  expect(slideImg).toHaveAttribute("alt", "test_image");
  expect(slideImg).toHaveStyle("width: 100%");
  expect(slideImg).toHaveStyle("height: 100%");
});
