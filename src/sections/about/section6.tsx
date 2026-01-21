import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { AboutSectionProps } from "./types";

export default function AboutSection6({ onPrevious }: AboutSectionProps) {
  const [containerRef, exit] = useAnimatedChars();

  const handlePrevious = async () => {
    await exit();
    if (onPrevious) onPrevious();
  };

  return (
    <div ref={containerRef}>
      <h1 className="text-6xl mb-7">
        <TypedText text="Cybernaut Studio" />
      </h1>

      <p className="mb-6">
        <TypedText text="A 3D-focused web studio helping e-commerce brands present their products with clarity. Built around performance, restraint, and real-world results." />
      </p>

      {/* TODO: Turn Contact Us Form into component */}

      <div className="flex gap-2">
        <button onClick={handlePrevious} className="hover:cursor-pointer">
          <TypedText text="[ Previous ]" />
        </button>
      </div>
    </div>
  );
}
