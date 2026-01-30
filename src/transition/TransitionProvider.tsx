import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";

import { TransitionContext, type TransitionPhase } from "./TransitionContext";

type TransitionProviderProps = {
  children: ReactNode;
};

export function TransitionProvider({ children }: TransitionProviderProps) {
  const [phase, setPhase] = useState<TransitionPhase>("idle");

  const exitCallback = useRef<(() => void) | null>(null);

  const startExit = useCallback(
    (onComplete: () => void) => {
      if (phase !== "idle") return;

      exitCallback.current = onComplete;
      setPhase("exiting");
    },
    [phase],
  );

  const startEnter = () => {
    setPhase("entering");
  };

  const setLoading = useCallback(
    (loading: boolean) => {
      if (!loading && phase === "loading") {
        setPhase("entering");
      } else if (loading) {
        setPhase("loading");
      }
    },
    [phase],
  );

  const value = useMemo(
    () => ({ phase, startExit, startEnter, setLoading }),
    [phase, setLoading, startExit],
  );

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
}
