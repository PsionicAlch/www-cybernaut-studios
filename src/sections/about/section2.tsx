import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { AboutSectionProps } from "./types";

export default function AboutSection2({ onPrevious, onNext }: AboutSectionProps) {
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
        <TypedText text="Built for Real Stores" />
      </h1>

      <p className="mb-6">
        <TypedText text="We design experiences that integrate directly into existing e-commerce sites. That means respecting performance budgets, device limitations, and real customer behavior. Each project starts small, usually with a single product or page. From there, we expand only if it makes sense." />
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
