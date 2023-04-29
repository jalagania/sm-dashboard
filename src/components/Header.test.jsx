import { render, screen } from "@testing-library/react";
import * as userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("testing Header component", () => {
  it("should render dashboard heading", () => {
    render(<Header />);
    const heading = screen.getByText(/social media dashboard/i);
    expect(heading).toBeInTheDocument;
  });

  it("should render dashboard subheading", () => {
    render(<Header />);
    const subheading = screen.getByText(/total followers/i);
    expect(subheading).toBeInTheDocument;
  });

  it("should switch theme on button click", async () => {
    const user = userEvent.default.setup();
    render(<Header />);
    const oldClass = document.body.classList.length;
    const switchButton = screen.getByTestId("btn-switcher");
    await user.click(switchButton);
    const newClass = document.body.classList.length;
    expect(oldClass).not.toEqual(newClass);
  });
});
