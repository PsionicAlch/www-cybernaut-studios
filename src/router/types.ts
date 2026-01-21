import React from "react";

export type RouteConfig = {
  path: string;
  component: React.ComponentType;
};

export type RouterState = {
  path: string;
  hash: string;
  navigate: (to: string) => void;
  setHash: (hash: string) => void;
};