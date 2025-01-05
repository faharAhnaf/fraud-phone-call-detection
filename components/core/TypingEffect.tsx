import { useTypingEffect } from "@/hooks/useTypingEffect";
import React, { useEffect, useState } from "react";

const texts = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident explicabo eos aspernatur non possimus voluptate id quo esse assumenda cupiditate perferendis, eveniet, minus incidunt ex veniam, facere eaque omnis ab.",
];
const TIME_TO_FADE = 300;
const TIME_INTERVAL = 5000;
const TIME_PER_LETTER = 100;

export const TypingEffect = () => {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [fadeCircle, setFadeCircle] = useState<boolean>(true);
  const [showCircle, setShowCircle] = useState<boolean>(true);
  const textToShow: string = useTypingEffect(
    texts[textIndex],
    TIME_PER_LETTER,
    false
  );

  const timeToTypeText: number =
    texts[textIndex].split(" ").length * TIME_PER_LETTER;

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setTextIndex((prevIndex) =>
        prevIndex >= texts.length - 1 ? 0 : prevIndex + 1
      );
      setFadeCircle(true);
    }, TIME_INTERVAL);

    const hideCircleTimeout = setTimeout(() => {
      setFadeCircle(false);
    }, timeToTypeText + 1000);

    const removeCircleTimeout = setTimeout(() => {
      setShowCircle(false);
    }, timeToTypeText + TIME_TO_FADE + 1000);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(hideCircleTimeout);
      clearTimeout(removeCircleTimeout);
    };
  }, [textIndex, timeToTypeText]);

  return (
    <>
      <p
        className={`items-center inline-block text-black duration-300 dark:text-white opacity-1 translate-y-0`}
        key={textIndex}
      >
        {textToShow}{" "}
        {showCircle && (
          <span
            className={`ml-2 h-3 w-3 inline-block rounded-full bg-black duration-300 dark:bg-white ${
              fadeCircle ? "" : "h-0 w-0 opacity-0"
            }`}
          />
        )}
      </p>
    </>
  );
};
