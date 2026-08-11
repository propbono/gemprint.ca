import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

// Mock Next.js Image
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={props.alt as string} src={props.src as string} />;
  },
}));

// Mock PostHog button
vi.mock("@/components/posthog-button", () => ({
  PostHogButton: (props: Record<string, unknown>) => (
    <a href={props.url as string} className={props.className as string}>
      {props.text as string}
    </a>
  ),
}));

// Mock AspectRatio
vi.mock("@radix-ui/react-aspect-ratio", () => ({
  AspectRatio: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

import { HeroVariantA } from "@/components/hero/variant-a";

describe("HeroVariantA carousel navigation buttons", () => {
  it("positions previous button outside image area using default -left-12, not left-0", () => {
    render(<HeroVariantA />);
    const prevButtons = screen.getAllByRole("button", { name: /previous/i });
    expect(prevButtons.length).toBeGreaterThan(0);
    const prev = prevButtons[0];

    // Should NOT have left-0 (which would overlay on images)
    expect(prev.className).not.toContain("left-0");
    // Should have -left-12 from the base component (positioned outside carousel)
    expect(prev.className).toContain("-left-12");
  });

  it("positions next button outside image area using default -right-12, not right-0", () => {
    render(<HeroVariantA />);
    const nextButtons = screen.getAllByRole("button", { name: /next/i });
    expect(nextButtons.length).toBeGreaterThan(0);
    const next = nextButtons[0];

    // Should NOT have right-0 (which would overlay on images)
    expect(next.className).not.toContain("right-0");
    // Should have -right-12 from the base component (positioned outside carousel)
    expect(next.className).toContain("-right-12");
  });

  it("applies white background, proper sizing, hover, active, and shadow classes", () => {
    render(<HeroVariantA />);

    const prevButtons = screen.getAllByRole("button", { name: /previous/i });
    const prev = prevButtons[0];

    // White background for visibility against dark hero
    expect(prev.className).toContain("bg-white");
    // Larger size: h-10 w-10
    expect(prev.className).toContain("h-10");
    expect(prev.className).toContain("w-10");
    // Circular: rounded-full from base component
    expect(prev.className).toContain("rounded-full");
    // Hover state
    expect(prev.className).toContain("hover:bg-gray-100");
    // Active press state
    expect(prev.className).toContain("active:scale-95");
    expect(prev.className).toContain("transition-transform");
    // Shadow for elevation
    expect(prev.className).toContain("shadow-md");
  });

  it("applies same styling classes to next button", () => {
    render(<HeroVariantA />);

    const nextButtons = screen.getAllByRole("button", { name: /next/i });
    const next = nextButtons[0];

    expect(next.className).not.toContain("right-0");
    expect(next.className).toContain("-right-12");
    expect(next.className).toContain("bg-white");
    expect(next.className).toContain("h-10");
    expect(next.className).toContain("w-10");
    expect(next.className).toContain("rounded-full");
    expect(next.className).toContain("hover:bg-gray-100");
    expect(next.className).toContain("active:scale-95");
    expect(next.className).toContain("transition-transform");
    expect(next.className).toContain("shadow-md");
  });

  it("preserves the split layout structure", () => {
    const { container } = render(<HeroVariantA />);

    // The grid layout should be present (text + carousel columns)
    const grid = container.querySelector(".lg\\:grid-cols-2");
    expect(grid).toBeTruthy();

    // Carousel should be present
    const region = container.querySelector('[role="region"]');
    expect(region).toBeTruthy();
    expect(region?.getAttribute("aria-roledescription")).toBe("carousel");
  });
});
