import { render, screen } from "@testing-library/react";
import * as userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Accounts from "./Accounts";

describe("testing Accounts component", () => {
  it("should flip account cards on button click", async () => {
    const user = userEvent.default.setup();
    render(<Accounts />);
    const accountButton = screen.getAllByTestId("btn-account")[0];
    await user.click(accountButton);
    const isFlipped = accountButton.classList.contains("flip");
    expect(isFlipped).toBe(true);
  });

  it("should render username 8x", () => {
    render(<Accounts />);
    const username = screen.getAllByText(/nathan/i).length;
    expect(username).toBe(8);
  });

  it("should render 'followers' 3x and 'subscribers' 1x", () => {
    render(<Accounts />);
    const followers = screen.getAllByText(/followers/i).length;
    const subscribers = screen.getAllByText(/subscribers/i).length;
    expect(followers).toBe(3);
    expect(subscribers).toBe(1);
  });

  it("should render 'today' 4x", () => {
    render(<Accounts />);
    const today = screen.getAllByText(/today/i).length;
    expect(today).toBe(4);
  });

  it("should render images with correct alt and src", () => {
    render(<Accounts />);
    const images = screen.getAllByAltText(/user avatar/i);
    expect(images.length).toBe(4);
    expect(images[0].src).toContain("/images/avatar");
  });
});
