import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { HomeSectionProps } from "./types";

export default function HomeSection0({ onNext }: HomeSectionProps) {
  const [containerRef, exit] = useAnimatedChars();

  const handleNext = async () => {
    await exit();

    if (onNext) onNext();
  };

  return (
    <div ref={containerRef}>
      <h1 className="text-6xl mb-7">
        <TypedText text="Beyond Flat Imagery" />
      </h1>

      <p className="mb-6">
        <TypedText text="We turn standard product pages into interactive 3D experiences. Shoppers can explore products from every angle, understand scale and detail, and make decisions with confidence. Brands using 3D see higher conversions, fewer returns, and stronger engagement. This site is built the same way we build client work: interactive, performant, and focused on results." />
      </p>

      <div className="flex gap-2">
        <button onClick={handleNext}>
          <TypedText text="[ Learn More ]" />
        </button>
      </div>
    </div>
  );
}
