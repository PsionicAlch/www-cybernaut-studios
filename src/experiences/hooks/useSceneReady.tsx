import { useEffect, useRef } from "react";
import { useTransition } from "../../transition/TransitionContext";

export default function useSceneReady() {
  const { setLoading } = useTransition();
  const didSignal = useRef<boolean>(false);

  useEffect(() => {
    if (didSignal.current) return;

    didSignal.current = true;
    setLoading(false);
  }, [setLoading]);
}