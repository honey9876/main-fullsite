import { useEffect, useState } from "react";

const AnimatedText = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl font-semibold z-10 bg-black bg-opacity-50 px-4 py-2 rounded">
      {displayedText}
    </div>
  );
};
export default AnimatedText;
