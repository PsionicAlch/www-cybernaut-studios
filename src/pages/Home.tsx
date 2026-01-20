// interface HomePageProps {
//   onExit?: () => void;
// }

import { useRef } from "react";

import gsap from "gsap";

import { useGSAP } from "@gsap/react";

import TypedText from "../components/TypedText";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const chars = gsap.utils.toArray(".char");

      gsap.set(chars, { opacity: 0 });

      const tl = gsap.timeline();

      tl.to(chars, {
        opacity: 1,
        duration: 0.02,
        stagger: {
          each: 0.05,
        },
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <h1 className="text-6xl mb-7">
        <TypedText text="Beyond Flat Imagery" />
      </h1>

      <p className="mb-6">
        <TypedText text="We transform standard e-commerce stores into immersive 3D experiences. Increase engagement, reduce returns, and captivate your audience." />
      </p>

      <div className="flex gap-2">
        <div>
          <TypedText text="[ Contact Us ]" />
        </div>
        <div>
          <TypedText text="[ Learn More ]" />
        </div>
      </div>
    </div>
  );
}
