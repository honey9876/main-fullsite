import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WelcomeCard = () => {
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);
  const greetingRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const visionTitleRef = useRef(null);

  useEffect(() => {
    // OUR VISION animation
    gsap.fromTo(
      visionTitleRef.current,
      {
        opacity: 0,
        scale: 0.6,
        x: -100,
        y: 100,
        rotate: -45,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: visionTitleRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
          markers: false,
        },
      }
    );

    // Image and Background Circle animation (sync)
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0.6 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 0.5,
          markers: false,
        },
      }
    );

    // Greeting animation
    gsap.fromTo(
      greetingRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Title 1
    gsap.fromTo(
      title1Ref.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Title 2
    gsap.fromTo(
      title2Ref.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Description
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-[#f6ede8] p-4 sm:p-6">
      {/* OUR VISION Section */}
      <div className="our-vision w-full text-center py-6">
        <h1
          ref={visionTitleRef}
          className="text-2xl sm:text-3xl md:text-4xl font-aquire-bold text-[#4a3728]"
        >
          OUR VISION
        </h1>
      </div>
      {/* Main Content: Image and Text */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[#f6ede8] min-h-[400px] md:min-h-[600px] lg:h-[700px] gap-6 md:gap-8 lg:gap-12">
        {/* Image Section */}
        <div
          ref={imageRef}
          className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[400px] mx-auto md:mx-0 mb-6 md:mb-0"
        >
          {/* Background Circle */}
          <div className="absolute inset-0 bg-[#e0d8cf] rounded-full scale-[1.05] z-0"></div>
          {/* Image Wrapper */}
          <div className="relative z-10 w-full aspect-square">
            <img
              src="https://jasfoundation.org.in/wp-content/uploads/2023/10/vision-jas-scaled.jpg"
              alt="Woman standing in field representing bold vision"
              className="rounded-full object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Section */}
        <div
          ref={textContainerRef}
          className="w-full md:w-1/2 px-4 sm:px-6 md:px-8 lg:px-12 text-center flex flex-col items-center justify-center space-y-3 py-6 md:py-0"
        >
          <p
            ref={greetingRef}
            className="text-[#bfa58b] italic text-base sm:text-lg"
          >
            hey + welcome!
          </p>
          <div>
            <h1
              ref={title1Ref}
              className="text-2xl sm:text-3xl md:text-4xl font-aquire-bold text-[#4a3728]"
            >
              Think Big.
            </h1>
            <h1
              ref={title2Ref}
              className="text-2xl sm:text-3xl md:text-4xl font-aquire-bold text-[#4a3728]"
            >
              Act Bold.
            </h1>
          </div>
          <p
            ref={descriptionRef}
            className="text-gray-600 text-sm sm:text-base max-w-[280px] sm:max-w-[400px]"
          >
            Every idea has the power to change the world. We encourage fearless
            thinking and bold execution to unlock real progress and innovation.
          </p>
          <button
            ref={buttonRef}
            type="button"
            className="bg-[#a8744f] hover:bg-[#905f3b] text-white py-2 px-6 rounded-full text-sm sm:text-base font-aquire-bold"
            aria-label="Get started with bold ideas"
          >
            LET'S GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
