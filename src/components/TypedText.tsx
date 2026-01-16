interface TypedTextProps {
  text: string;
}

export default function TypedText({ text }: TypedTextProps) {
  return (
    <>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="word inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className="char inline-block">
              {char}
            </span>
          ))}
          {/* space after each word */}
          <span className="char inline-block">&nbsp;</span>
        </span>
      ))}
    </>
  );
}
