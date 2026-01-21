import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { AboutSectionProps } from "./types";

export default function AboutSection4({ onPrevious, onNext }: AboutSectionProps) {
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
        <TypedText text="Where Augmented Reality Fits" />
      </h1>

      <p className="mb-6">
        <TypedText text="Augmented Reality works best when it solves a specific problem. For certain products, seeing scale or fit in real space can remove hesitation. We use AR selectively, focusing on accuracy and usefulness rather than novelty. If it doesn't help the customer decide, it stays out." />
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
