import useAnimatedChars from "../../hooks/useAnimatedChars";
import TypedText from "../../components/TypedText";
import type { HomeSectionProps } from "./types";

export default function HomeSection8({ onPrevious }: HomeSectionProps) {
  const [containerRef, exit] = useAnimatedChars();

  const handlePrevious = async () => {
    await exit();
    if (onPrevious) onPrevious();
  };

  const handleForm = (formData: FormData) => {
    console.log(formData);
  }

  return (
    <div ref={containerRef}>
      <h1 className="text-6xl mb-7">
        <TypedText text="Let's Talk" />
      </h1>

      <p className="mb-6">
        <TypedText text="If you're serious about making your product pages work harder, we should talk. We typically start with a single product or page. That's enough to prove value and set direction." />
      </p>

      <form action={handleForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" />

        <label htmlFor="website">Website</label>
        <input type="text" id="website" />

        <label htmlFor="details">Details</label>
        <textarea name="details" id="details"></textarea>

        <div className="flex gap-2">
          <button onClick={handlePrevious}>
            <TypedText text="[ Previous ]" />
          </button>

          <button type="submit">
            <TypedText text="[ Submit ]" />
          </button>
        </div>
      </form>
    </div>
  );
}
