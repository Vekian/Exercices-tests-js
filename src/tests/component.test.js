import React from "react";
import Link from "../Link";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "jest-circus";
import "@testing-library/jest-dom";

// utiliser le composant Link comme celui-ci dans vos tests : <Link page="http://www.facebook.com">Facebook</Link>
describe("Link component", () => {
  it("renders with correct text content", () => {
    render(<Link page="http://www.facebook.com">Facebook</Link>);
    expect(screen.getByText("Facebook")).toHaveTextContent("Facebook");
  });

  it("has the correct default classname", () => {
    render(<Link page="http://www.facebook.com">Facebook</Link>);
    expect(screen.getByText("Facebook")).toHaveClass("normal");
  });

  it("renders correct href attribute", () => {
    render(<Link page="http://www.facebook.com">Facebook</Link>);
    expect(screen.getByText("Facebook")).toHaveAttribute(
      "href",
      "http://www.facebook.com"
    );
  });

  it("changes classname on hover", async () => {
    render(<Link page="http://www.facebook.com">Facebook</Link>);
    const element = screen.getByText("Facebook");
    await userEvent.hover(element);
    expect(element).toHaveClass("hovered");
  });
});
