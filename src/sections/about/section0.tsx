import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { AboutSectionProps } from "./types";

export default function AboutSection0({ onNext }: AboutSectionProps) {
  const [containerRef, exit] = useAnimatedChars();

  const handleNext = async () => {
    await exit();

    if (onNext) onNext();
  };

  return (
    <div ref={containerRef}>
      <h1 className="text-6xl mb-7">
        <TypedText text="Why Cybernaut Studio Exists" />
      </h1>

      <p className="mb-6">
        <TypedText text="Cybernaut Studio was created to help e-commerce brands show their products more clearly. Most online stores still rely on flat images for physical goods that are meant to be seen in the real world. Interactive 3D closes that gap by giving customers a better understanding before they buy. Better understanding leads to stronger confidence, fewer returns, and better outcomes for both sides." />
      </p>

      <div className="flex gap-2">
        <button onClick={handleNext} className="hover:cursor-pointer">
          <TypedText text="[ Next ]" />
        </button>
      </div>
    </div>
  );
}
