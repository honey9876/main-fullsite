import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const IntroSequence = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  const Loader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-[#e0d8cf] z-50">
      <div className="w-12 h-12 border-4 border-[#a8744f] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const ComingSoon = () => {
    const comingSoonRef = useRef(null);
    const lettersRef = useRef([]);

    const splitTextToLetters = (text, refArray) =>
      text.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => (refArray.current[index] = el)}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));

    useEffect(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Add a 100ms buffer to ensure fade-out completes
          setTimeout(onComplete, 100);
        },
      });

      tl.fromTo(
        lettersRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      tl.to(comingSoonRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.5,
      });

      return () => {
        tl.kill();
      };
    }, []);

    return (
      <div
        ref={comingSoonRef}
        className="fixed inset-0 flex items-center justify-center bg-[#e0d8cf] z-40 text-[#4a3728] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-aquire-bold"
      >
        <h1>
          {splitTextToLetters("Something Big is On the Way...", lettersRef)}
        </h1>
      </div>
    );
  };

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Loader for 1 second

    return () => clearTimeout(loaderTimer);
  }, []);

  return <div>{isLoading ? <Loader /> : <ComingSoon />}</div>;
};

export default IntroSequence;