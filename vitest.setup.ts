import "@testing-library/jest-dom";

// jsdom doesn't implement matchMedia; embla-carousel requires it
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// jsdom doesn't implement IntersectionObserver; embla-carousel requires it
class IntersectionObserverMock {
  observe = () => null;
  unobserve = () => null;
  disconnect = () => null;
}
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});

// jsdom doesn't implement ResizeObserver; embla-carousel may require it
class ResizeObserverMock {
  observe = () => null;
  unobserve = () => null;
  disconnect = () => null;
}
Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: ResizeObserverMock,
});
