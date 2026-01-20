import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { HomeSectionProps } from "./types";

export default function HomeSection6({ onPrevious, onNext }: HomeSectionProps) {
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
        <TypedText text="Built to Stay Fast" />
      </h1>

      <p className="mb-6">
        <TypedText text="Interactive doesn't have to mean heavy. We design every experience with performance in mind from the start. Models, lighting, and interactions are chosen to stay responsive across devices. If something doesn't improve the product page, it doesn't ship." />
      </p>

      <div className="flex gap-2">
        <button onClick={handlePrevious}>
          <TypedText text="[ Previous ]" />
        </button>

        <button onClick={handleNext}>
          <TypedText text="[ Next ]" />
        </button>
      </div>
    </div>
  );
}
