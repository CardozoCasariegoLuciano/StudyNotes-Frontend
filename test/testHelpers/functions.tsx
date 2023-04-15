import React, { ReactElement } from "react";
import { render as renderTLR } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

interface RenderOptions {
  route?: string;
}

export const render = (component: ReactElement, options?: RenderOptions) => {
  const { route = "/" } = options || {};
  window.history.pushState({}, "Test page", route);
  return renderTLR(<BrowserRouter>{component}</BrowserRouter>);
};
