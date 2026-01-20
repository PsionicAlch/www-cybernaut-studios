import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { HomeSectionProps } from "./types";

export default function HomeSection3({ onPrevious, onNext }: HomeSectionProps) {
  const [containerRef, exit] = useAnimatedChars();

  const handlePrevious = async () => {
    await exit();
    if (onPrevious) onPrevious();
  };

  const handleNext = async () => {
    await exit();
    if (onNext) onNext();
  };

  return (
    <div ref={containerRef}>
      <h1 className="text-6xl mb-7">
        <TypedText text="Materials That Feel Real" />
      </h1>

      <p className="mb-6">
        <TypedText text="Material quality matters when selling physical goods. We focus on lighting, surface response, and texture accuracy so products feel grounded. Everything is optimized to stay smooth across modern devices without sacrificing detail. The goal is realism that performs." />
      </p>

      <div className="flex gap-2">
        <button onClick={handlePrevious} className="hover:cursor-pointer">
          <TypedText text="[ Previous ]" />
        </button>

        <button onClick={handleNext} className="hover:cursor-pointer">
          <TypedText text="[ Next ]" />
        </button>
      </div>
    </div>
  );
}
