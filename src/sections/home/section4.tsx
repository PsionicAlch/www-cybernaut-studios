import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { HomeSectionProps } from "./types";

export default function HomeSection4({ onPrevious, onNext }: HomeSectionProps) {
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
