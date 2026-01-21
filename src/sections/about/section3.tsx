import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { AboutSectionProps } from "./types";

export default function AboutSection3({ onPrevious, onNext }: AboutSectionProps) {
  const [containerRef, exit] = useAnimatedChars();

  const handlePrevious = async () => {
    await exit();
    if (onPrevious) onPrevious();
  };

  const handleNext = async () => {
    await exit();
    if (onNext) onNext();
  }

  return (
    <div ref={containerRef}>
      <h1 className="text-6xl mb-7">
        <TypedText text="Carefully Engineered" />
      </h1>

      <p className="mb-6">
        <TypedText text="Behind the scenes, we use modern 3D and web technologies to keep everything smooth and responsive. Lighting, materials, and models are optimized so they look good without slowing the site down. The goal is consistency across devices, not tech for its own sake. Most visitors won't notice the work — and that's the point." />
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
