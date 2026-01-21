import { createContext, useContext } from "react";

import type { RouterState } from "./types";

export const RouterContext = createContext<RouterState | null>(null);

export function useRouter(): RouterState {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error("useRouter must be inside <Router />");
  }

  return ctx;
}
