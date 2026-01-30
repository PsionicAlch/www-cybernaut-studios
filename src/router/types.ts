import type { ComponentType } from "react";

export type RouteConfig = {
  path: string;
  component: ComponentType;
};

export type RouterState = {
  path: string;
  hash: string;
  navigate: (to: string) => void;
  setHash: (hash: string) => void;
};