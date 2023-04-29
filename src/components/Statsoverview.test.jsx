import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StatsOverview from "./StatsOverview";

describe("testing StatsOverview component", () => {
  it("should render component heading", () => {
    render(<StatsOverview />);
    const heading = screen.getByText(/overview/i);
    expect(heading).toBeInTheDocument();
  });

  it("should render 'likes' 4x and 'views' 3x", () => {
    render(<StatsOverview />);
    const likes = screen.getAllByText(/likes/i).length;
    const views = screen.getAllByText(/views/i).length;
    expect(likes).toBe(4);
    expect(views).toBe(3);
  });
});
