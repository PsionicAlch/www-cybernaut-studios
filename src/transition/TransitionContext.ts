import { createContext, useContext } from "react";

export type TransitionPhase = "idle" | "exiting" | "loading" | "entering";

export type TransitionContextValue = {
  phase: TransitionPhase;

  startExit: (onComplete: () => void) => void;
  finishExit: () => void;

  startEnter: () => void;
  finishEnter: () => void;

  setLoading: (loading: boolean) => void;
};

export const TransitionContext = createContext<TransitionContextValue | null>(
  null,
);

export function useTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error("useTransition must be used within TransitionProvider");
  }

  return ctx;
}
