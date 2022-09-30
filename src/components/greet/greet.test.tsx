import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("greet");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a name", () => {
    render(<Greet name="mominul" />);
    const textElement = screen.getByText(/mominul/i);
    expect(textElement).toBeInTheDocument();
  });
});
