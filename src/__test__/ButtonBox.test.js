import { fireEvent, render, screen } from "@testing-library/react";
import ButtonBox from "../components/ButtonBox";

test("render <ButtonBox />", () => {
  const handleBackButtonClick = jest.fn();
  const handleforwardButtonClick = jest.fn();
  render(<ButtonBox onBackButtonClick={handleBackButtonClick} onForwardButtonClick={handleforwardButtonClick} />);

  const buttons = screen.getAllByRole("button");
  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[1]);

  expect(handleBackButtonClick).toBeCalledTimes(1);
  expect(handleforwardButtonClick).toBeCalledTimes(1);
});
