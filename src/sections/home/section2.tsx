import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { HomeSectionProps } from "./types";

export default function HomeSection2({ onPrevious, onNext }: HomeSectionProps) {
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
        <TypedText text="Let Customers Explore Their Options" />
      </h1>

      <p className="mb-6">
        <TypedText text="Customization shouldn't be hidden behind dropdowns. Interactive 3D makes choices feel immediate and intuitive. Users see changes instantly, which keeps them engaged and reduces uncertainty. This works especially well for jewelry, footwear, and premium goods." />
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
