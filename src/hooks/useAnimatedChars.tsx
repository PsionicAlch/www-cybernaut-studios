import { useRef, type RefObject } from "react";

import { useGSAP } from "@gsap/react";

export default function useAnimatedChars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const chars = gsap.utils.toArray<HTMLElement>(".char");

      gsap.set(chars, { opacity: 0 });

      gsap.to(chars, {
        opacity: 1,
        duration: 0.02,
        stagger: 0.05,
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  const exit = () => {
    const chars = gsap.utils.toArray<HTMLElement>(".char");

    return new Promise<void>((resolve) => {
      gsap.timeline({ onComplete: resolve }).to(chars.reverse(), {
        opacity: 0,
        duration: 0.015,
        stagger: 0.015,
        ease: "none",
      });
    });
  };

  return [containerRef, exit] as [RefObject<HTMLDivElement | null>, () => Promise<void>];
}
