import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { HomeSectionProps } from "./types";

export default function HomeSection7({ onPrevious, onNext }: HomeSectionProps) {
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
        <TypedText text="Designed Around Your Brand" />
      </h1>

      <p className="mb-6">
        <TypedText text="Every brand is different. We start by understanding the product, the audience, and the storefront it lives in. From there, we design a 3D experience that fits naturally into your site. No templates. No unnecessary features." />
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
