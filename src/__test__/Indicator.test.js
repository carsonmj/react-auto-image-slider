import { render, screen } from "@testing-library/react";
import Indicator from "../components/Indicator";

test("<Indicator /> should render text If the total number of slides is more than 10", () => {
  render(<Indicator total={11} currentIndex={0} />);
  expect(screen.getByText("1 of 11")).toBeInTheDocument();
});

test("<Indicator /> should render shaped indicator If the total number of slides is less than 10", () => {
  const totalSlide = 5;
  render(<Indicator total={totalSlide} currentIndex={0} />);

  const container = screen.getByTestId("indicatorContainer");
  expect(container.childElementCount).toBe(totalSlide);
});
