import { render, screen } from "@testing-library/react";
import HelloWorld from "@/src/components/HelloWorld";

describe("HelloWorld", () => {
  beforeEach(async () => {
    render(<HelloWorld />);
  });

  it("should render", () => {
    expect(screen.getByText("Hello World"));
  });
});
