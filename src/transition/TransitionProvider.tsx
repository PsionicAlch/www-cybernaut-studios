import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";

import { TransitionContext, type TransitionPhase } from "./TransitionContext";

type TransitionProviderProps = {
  children: ReactNode;
};

export function TransitionProvider({ children }: TransitionProviderProps) {
  const [phase, setPhase] = useState<TransitionPhase>("loading");

  const exitCallback = useRef<(() => void) | null>(null);

  const startExit = useCallback(
    (onComplete: () => void) => {
      if (phase !== "idle") return;

      exitCallback.current = onComplete;
      setPhase("exiting");
    },
    [phase],
  );

  const finishExit = useCallback(() => {
    if (phase !== "exiting") return;

    exitCallback.current?.();
    exitCallback.current = null;

    setPhase("loading");
  }, [phase]);

  const startEnter = useCallback(() => {
    if (phase === "loading") {
      setPhase("entering");
    }
  }, [phase]);

  const finishEnter = useCallback(() => {
    if (phase === "entering") {
      setPhase("idle");
    }
  }, [phase]);

  const setLoading = useCallback(
    (loading: boolean) => {
      if (loading && phase !== "loading") {
        setPhase("loading");
      }

      if (!loading && phase === "loading") {
        setPhase("entering");
      }
    },
    [phase],
  );

  const value = useMemo(
    () => ({
      phase,
      startExit,
      finishExit,
      startEnter,
      finishEnter,
      setLoading,
    }),
    [finishEnter, finishExit, phase, setLoading, startEnter, startExit],
  );

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
}
