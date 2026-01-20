import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { HomeSectionProps } from "./types";

export default function HomeSection5({ onPrevious, onNext }: HomeSectionProps) {
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
        <TypedText text="See it in Real Life" />
      </h1>

      <p className="mb-6">
        <TypedText text="For the right products, we use Augmented Reality (AR) to let customers try before they buy. Rings, bracelets, and similar items can be previewed directly on the body using a camera. This gives shoppers confidence in scale, fit, and appearance. AR is used selectively, where it adds real value." />
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
