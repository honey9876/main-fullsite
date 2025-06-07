// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import phoneIllustration from "../assets/phone1.png";

// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {
//   const networkLettersRef = useRef([]);
//   const smartLettersRef = useRef([]);
//   const erLettersRef = useRef([]);
//   const growLettersRef = useRef([]);
//   const fasterLettersRef = useRef([]);
//   const subTextRef = useRef(null);
//   const buttonRef = useRef(null);
//   const imageRef = useRef(null);
//   const containerRef = useRef(null);
//   const connectionLettersRef = useRef([]);

//   const audioContextRef = useRef(null);
//   const sourceRef = useRef(null);

//   useEffect(() => {
//     audioContextRef.current = new (window.AudioContext ||
//       window.webkitAudioContext)();
//     return () => {
//       if (audioContextRef.current) audioContextRef.current.close();
//     };
//   }, []);

//   const playSound = () => {
//     if (audioContextRef.current.state === "suspended") {
//       audioContextRef.current.resume();
//     }
//     const oscillator = audioContextRef.current.createOscillator();
//     oscillator.type = "sine";
//     oscillator.frequency.setValueAtTime(
//       440,
//       audioContextRef.current.currentTime
//     );
//     oscillator.connect(audioContextRef.current.destination);
//     oscillator.start();
//     oscillator.stop(audioContextRef.current.currentTime + 0.3);
//     sourceRef.current = oscillator;
//   };

//   const splitTextToLetters = (text, refArray) =>
//     text.split("").map((char, index) => (
//       <span
//         key={index}
//         ref={(el) => (refArray.current[index] = el)}
//         className="inline-block"
//       >
//         {char}
//       </span>
//     ));

//   useEffect(() => {
//     gsap.set([imageRef.current], { transformPerspective: 500 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         toggleActions: "play none none none",
//       },
//     });

//     tl.to(containerRef.current, {
//       background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
//       duration: 1,
//       ease: "sine.inOut",
//     });

//     tl.fromTo(
//       networkLettersRef.current,
//       {
//         x: () => gsap.utils.random(-80, -30),
//         y: () => gsap.utils.random(-30, 30),
//         opacity: 0,
//         scale: () => gsap.utils.random(0.8, 1.2),
//       },
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       0
//     );

//     tl.fromTo(
//       smartLettersRef.current,
//       {
//         x: () => gsap.utils.random(30, 80),
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       erLettersRef.current,
//       {
//         x: () => gsap.utils.random(30, 80),
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       growLettersRef.current,
//       {
//         y: () => gsap.utils.random(-80, -20),
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         stagger: { amount: 0.1 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       fasterLettersRef.current,
//       {
//         x: () => gsap.utils.random(-80, -20),
//         opacity: 0,
//         scale: () => gsap.utils.random(1, 1.3),
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       subTextRef.current,
//       { y: 15, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
//       "-=0.3"
//     );

//     tl.fromTo(
//       buttonRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out",
//         boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
//       },
//       "-=0.2"
//     );

//     tl.fromTo(
//       imageRef.current,
//       { x: 300, opacity: 0, scale: 0.95 },
//       { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
//       "-=0.3"
//     );

//     tl.fromTo(
//       connectionLettersRef.current,
//       {
//         x: () => gsap.utils.random(-20, 20),
//         y: () => gsap.utils.random(-20, 20),
//         opacity: 0,
//         scale: () => gsap.utils.random(0.8, 1.2),
//       },
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: window.innerWidth < 640 ? 0.4 : 0.6,
//         stagger: { amount: window.innerWidth < 640 ? 0.2 : 0.3 },
//         ease: "power2.out",
//       },
//       "-=0.5"
//     );

//     gsap.to(buttonRef.current, {
//       scale: 1.03,
//       duration: 0.3,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       scrollTrigger: {
//         trigger: buttonRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         toggleActions: "play pause resume pause",
//       },
//     });

//     gsap.to(imageRef.current, {
//       rotateY: -2,
//       duration: 0.6,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         scrub: 1,
//       },
//     });

//     const addButtonListeners = () => {
//       if (buttonRef.current) {
//         gsap.set(buttonRef.current, { transformPerspective: 500 });
//         buttonRef.current.addEventListener("mouseenter", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1.08,
//             boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
//             duration: 0.2,
//             ease: "power2.out",
//           });
//         });
//         buttonRef.current.addEventListener("mouseleave", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1,
//             boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
//             duration: 0.2,
//             ease: "power2.out",
//           });
//         });
//         buttonRef.current.addEventListener("mousedown", () => {
//           gsap.to(buttonRef.current, {
//             scale: 0.97,
//             duration: 0.1,
//             ease: "power2.in",
//           });
//         });
//         buttonRef.current.addEventListener("mouseup", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1.08,
//             duration: 0.15,
//             ease: "power2.out",
//           });
//         });
//       }
//     };

//     addButtonListeners();

//     return () => {
//       if (buttonRef.current) {
//         buttonRef.current.removeEventListener("mouseenter", () => {});
//         buttonRef.current.removeEventListener("mouseleave", () => {});
//         buttonRef.current.removeEventListener("mousedown", () => {});
//         buttonRef.current.removeEventListener("mouseup", () => {});
//       }
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="h-screen overflow-x-hidden flex flex-col-reverse items-center justify-center px-4 py-4 sm:px-6 sm:py-6 lg:px-16 lg:py-12 xl:px-20 xl:py-16"
//       style={{
//         background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
//       }}
//     >
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-4 sm:gap-6 lg:gap-12">
//         <div className="text-center lg:text-left w-full max-w-full sm:max-w-md lg:max-w-xl space-y-3 sm:space-y-4 z-10 px-2 sm:px-0">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#4a3728] leading-tight font-aquire-bold -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-16 xl:-ml-20">
//   <div>
//     <span>{splitTextToLetters("Network", networkLettersRef)}</span>{" "}
//     <span>{splitTextToLetters("Smarter", smartLettersRef)}</span>
//     {/* <span>{splitTextToLetters("er", erLettersRef)}</span> */}
//   </div>
//   <div>
//     <span>{splitTextToLetters("Grow", growLettersRef)}</span>{" "}
//     <span>{splitTextToLetters("Faster", fasterLettersRef)}</span>
//   </div>
// </h1>
//           <p
//             ref={subTextRef}
//             className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4a3728]"
//           >
//             Throne8 blends AI + community to take your professional journey to
//             the next level.
//           </p>
//           <button
//             ref={buttonRef}
//             className="bg-[#a8744f] hover:bg-[#905f3b] text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300"
//             onClick={playSound}
//           >
//             Get Started
//           </button>
//         </div>
//         <div
//           ref={imageRef}
//           className="w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center items-center"
//         >
//           <img
//             src={phoneIllustration}
//             alt="Phone Illustration"
//             className="w-full h-auto object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import phoneIllustration from "../assets/phone1.png";
// import myVideo from "../assets/myVideo.mp4"

// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {
//   const networkLettersRef = useRef([]);
//   const smartLettersRef = useRef([]);
//   const erLettersRef = useRef([]);
//   const growLettersRef = useRef([]);
//   const fasterLettersRef = useRef([]);
//   const subTextRef = useRef(null);
//   const buttonRef = useRef(null);
//   const imageRef = useRef(null);
//   const containerRef = useRef(null);
//   const connectionLettersRef = useRef([]);
//   const popupRef = useRef(null);
//   const videoRef = useRef(null);

//   const audioContextRef = useRef(null);
//   const sourceRef = useRef(null);

//   useEffect(() => {
//     audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
//     return () => {
//       if (audioContextRef.current) audioContextRef.current.close();
//     };
//   }, []);

//   const playSound = () => {
//     if (audioContextRef.current.state === "suspended") {
//       audioContextRef.current.resume();
//     }
//     const oscillator = audioContextRef.current.createOscillator();
//     oscillator.type = "sine";
//     oscillator.frequency.setValueAtTime(440, audioContextRef.current.currentTime);
//     oscillator.connect(audioContextRef.current.destination);
//     oscillator.start();
//     oscillator.stop(audioContextRef.current.currentTime + 0.3);
//     sourceRef.current = oscillator;
//   };

//   const splitTextToLetters = (text, refArray) =>
//     text.split("").map((char, index) => (
//       <span
//         key={index}
//         ref={(el) => (refArray.current[index] = el)}
//         className="inline-block"
//       >
//         {char}
//       </span>
//     ));

//   useEffect(() => {
//     gsap.set([imageRef.current], { transformPerspective: 500 });
//     gsap.set(videoRef.current, { transformPerspective: 500 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         toggleActions: "play none none none",
//       },
//     });

//     tl.to(containerRef.current, {
//       background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
//       duration: 1,
//       ease: "sine.inOut",
//     });

//     tl.fromTo(
//       networkLettersRef.current,
//       {
//         x: () => gsap.utils.random(-80, -30),
//         y: () => gsap.utils.random(-30, 30),
//         opacity: 0,
//         scale: () => gsap.utils.random(0.8, 1.2),
//       },
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       0
//     );

//     tl.fromTo(
//       smartLettersRef.current,
//       {
//         x: () => gsap.utils.random(30, 80),
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       erLettersRef.current,
//       {
//         x: () => gsap.utils.random(30, 80),
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       growLettersRef.current,
//       {
//         y: () => gsap.utils.random(-80, -20),
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         stagger: { amount: 0.1 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       fasterLettersRef.current,
//       {
//         x: () => gsap.utils.random(-80, -20),
//         opacity: 0,
//         scale: () => gsap.utils.random(1, 1.3),
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       subTextRef.current,
//       { y: 15, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
//       "-=0.3"
//     );

//     tl.fromTo(
//       buttonRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out",
//         boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
//       },
//       "-=0.2"
//     );

//     tl.fromTo(
//       imageRef.current,
//       { x: 300, opacity: 0, scale: 0.95 },
//       { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
//       "-=0.3"
//     );

//     tl.fromTo(
//       connectionLettersRef.current,
//       {
//         x: () => gsap.utils.random(-20, 20),
//         y: () => gsap.utils.random(-20, 20),
//         opacity: 0,
//         scale: () => gsap.utils.random(0.8, 1.2),
//       },
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: window.innerWidth < 640 ? 0.4 : 0.6,
//         stagger: { amount: window.innerWidth < 640 ? 0.2 : 0.3 },
//         ease: "power2.out",
//       },
//       "-=0.5"
//     );

//     tl.fromTo(
//       videoRef.current,
//       { y: 50, opacity: 0, scale: 0.95 },
//       { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
//       "-=0.3"
//     );

//     // Popup animation
//     gsap.fromTo(
//       popupRef.current,
//       { y: -50, opacity: 0, scale: 0.9 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         ease: "power2.out",
//         delay: 0.5,
//       }
//     );

//     gsap.to(buttonRef.current, {
//       scale: 1.03,
//       duration: 0.3,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       scrollTrigger: {
//         trigger: buttonRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         toggleActions: "play pause resume pause",
//       },
//     });

//     gsap.to(imageRef.current, {
//       rotateY: -2,
//       duration: 0.6,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         scrub: 1,
//       },
//     });

//     const addButtonListeners = () => {
//       if (buttonRef.current) {
//         gsap.set(buttonRef.current, { transformPerspective: 500 });
//         buttonRef.current.addEventListener("mouseenter", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1.08,
//             boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
//             duration: 0.2,
//             ease: "power2.out",
//           });
//         });
//         buttonRef.current.addEventListener("mouseleave", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1,
//             boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
//             duration: 0.2,
//             ease: "power2.out",
//           });
//         });
//         buttonRef.current.addEventListener("mousedown", () => {
//           gsap.to(buttonRef.current, {
//             scale: 0.97,
//             duration: 0.1,
//             ease: "power2.in",
//           });
//         });
//         buttonRef.current.addEventListener("mouseup", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1.08,
//             duration: 0.15,
//             ease: "power2.out",
//           });
//         });
//       }
//     };

//     addButtonListeners();

//     return () => {
//       if (buttonRef.current) {
//         buttonRef.current.removeEventListener("mouseenter", () => {});
//         buttonRef.current.removeEventListener("mouseleave", () => {});
//         buttonRef.current.removeEventListener("mousedown", () => {});
//         buttonRef.current.removeEventListener("mouseup", () => {});
//       }
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   const handleApplyClick = () => {
//     window.open(
//       "https://forms.gle/fRkJ2XBLGdTjKUp9A",
//       "_blank"
//     );
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen overflow-x-hidden flex flex-col items-center justify-start px-4 py-4 sm:px-6 sm:py-6 lg:px-16 lg:py-12 xl:px-20 xl:py-16 relative"
//       style={{
//         background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
//       }}
//     >
//       {/* Popup Card for Campus Ambassador */}
//       <div
//         ref={popupRef}
//         className="absolute top-24 right-2 sm:top-32 sm:right-4 bg-white rounded-lg shadow-xl p-2 sm:p-3 md:p-4 w-10/12 max-w-[240px] sm:max-w-[280px] md:max-w-[320px] z-20 border border-[#a8744f]"
//       >
//         <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#4a3728] mb-1 sm:mb-2">
//           Campus Ambassador
//         </h2>
//         <p className="text-[10px] sm:text-xs md:text-sm text-[#4a3728] mb-1 sm:mb-2 md:mb-3">
//           Join our team! Apply to be a Campus Ambassador for Throne8.
//         </p>
//         <button
//           className="bg-[#a8744f] hover:bg-[#905f3b] text-white text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full shadow-lg transition-all duration-300 w-full"
//           onClick={handleApplyClick}
//         >
//           Apply
//         </button>
//       </div>

//       <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-4 sm:gap-6 lg:gap-12">
//         <div className="text-center lg:text-left w-full max-w-full sm:max-w-md lg:max-w-xl space-y-3 sm:space-y-4 z-10 px-2 sm:px-0">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#4a3728] leading-tight font-aquire-bold -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-16 xl:-ml-20">
//             <div>
//               <span>{splitTextToLetters("Network", networkLettersRef)}</span>{" "}
//               <span>{splitTextToLetters("Smarter", smartLettersRef)}</span>
//             </div>
//             <div>
//               <span>{splitTextToLetters("Grow", growLettersRef)}</span>{" "}
//               <span>{splitTextToLetters("Faster", fasterLettersRef)}</span>
//             </div>
//           </h1>
//           <p
//             ref={subTextRef}
//             className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4a3728]"
//           >
//             Throne8 blends AI + community to take your professional journey to
//             the next level.
//           </p>
//           <button
//             ref={buttonRef}
//             className="bg-[#a8744f] hover:bg-[#905f3b] text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300"
//             onClick={playSound}
//           >
//             Get Started
//           </button>
//         </div>
//         <div
//           ref={imageRef}
//           className="w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center items-center"
//         >
//           <img
//             src={phoneIllustration}
//             alt="Phone Illustration"
//             className="w-full h-auto object-contain"
//           />
//         </div>
//       </div>

//       {/* Video Section */}
//       <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 z-10">
//         <video
//           ref={videoRef}
//           className="w-full h-auto rounded-lg shadow-lg"
//           controls
//           autoPlay
//           muted
//           loop
//         >
//           <source src= {myVideo}  type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import phoneIllustration from "../assets/phone1.png";
// import myVideo from "../assets/myVideo5.mp4"; // Import your local video file

// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {
//   const networkLettersRef = useRef([]);
//   const smartLettersRef = useRef([]);
//   const erLettersRef = useRef([]);
//   const growLettersRef = useRef([]);
//   const fasterLettersRef = useRef([]);
//   const subTextRef = useRef(null);
//   const buttonRef = useRef(null);
//   const imageRef = useRef(null);
//   const containerRef = useRef(null);
//   const connectionLettersRef = useRef([]);
//   const popupRef = useRef(null);
//   const videoRef = useRef(null);

//   const audioContextRef = useRef(null);
//   const sourceRef = useRef(null);

//   useEffect(() => {
//     audioContextRef.current = new (window.AudioContext ||
//       window.webkitAudioContext)();
//     return () => {
//       if (audioContextRef.current) audioContextRef.current.close();
//     };
//   }, []);

//   const playSound = () => {
//     if (audioContextRef.current.state === "suspended") {
//       audioContextRef.current.resume();
//     }
//     const oscillator = audioContextRef.current.createOscillator();
//     oscillator.type = "sine";
//     oscillator.frequency.setValueAtTime(
//       440,
//       audioContextRef.current.currentTime
//     );
//     oscillator.connect(audioContextRef.current.destination);
//     oscillator.start();
//     oscillator.stop(audioContextRef.current.currentTime + 0.3);
//     sourceRef.current = oscillator;
//   };

//   const splitTextToLetters = (text, refArray) =>
//     text.split("").map((char, index) => (
//       <span
//         key={index}
//         ref={(el) => (refArray.current[index] = el)}
//         className="inline-block"
//       >
//         {char}
//       </span>
//     ));

//   useEffect(() => {
//     gsap.set([imageRef.current], { transformPerspective: 500 });
//     gsap.set(videoRef.current, { transformPerspective: 500 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         toggleActions: "play none none none",
//       },
//     });

//     tl.to(containerRef.current, {
//       background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
//       duration: 1,
//       ease: "sine.inOut",
//     });

//     tl.fromTo(
//       networkLettersRef.current,
//       {
//         x: () => gsap.utils.random(-80, -30),
//         y: () => gsap.utils.random(-30, 30),
//         opacity: 0,
//         scale: () => gsap.utils.random(0.8, 1.2),
//       },
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       0
//     );

//     tl.fromTo(
//       smartLettersRef.current,
//       {
//         x: () => gsap.utils.random(30, 80),
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       erLettersRef.current,
//       {
//         x: () => gsap.utils.random(30, 80),
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       growLettersRef.current,
//       {
//         y: () => gsap.utils.random(-80, -20),
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         stagger: { amount: 0.1 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       fasterLettersRef.current,
//       {
//         x: () => gsap.utils.random(-80, -20),
//         opacity: 0,
//         scale: () => gsap.utils.random(1, 1.3),
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       subTextRef.current,
//       { y: 15, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
//       "-=0.3"
//     );

//     tl.fromTo(
//       buttonRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out",
//         boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
//       },
//       "-=0.2"
//     );

//     tl.fromTo(
//       imageRef.current,
//       { x: 300, opacity: 0, scale: 0.95 },
//       { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
//       "-=0.3"
//     );

//     tl.fromTo(
//       connectionLettersRef.current,
//       {
//         x: () => gsap.utils.random(-20, 20),
//         y: () => gsap.utils.random(-20, 20),
//         opacity: 0,
//         scale: () => gsap.utils.random(0.8, 1.2),
//       },
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: window.innerWidth < 640 ? 0.4 : 0.6,
//         stagger: { amount: window.innerWidth < 640 ? 0.2 : 0.3 },
//         ease: "power2.out",
//       },
//       "-=0.5"
//     );

//     // Video animation with scale from small to large, starts when centered
//     tl.fromTo(
//       videoRef.current,
//       { y: 50, opacity: 0, scale: 0.8 }, // Start smaller
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1, // Grow to full size
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: videoRef.current,
//           start: "top center", // Start when top of video hits center of viewport
//           toggleActions: "play none none none", // Play animation once when triggered
//         },
//         onStart: () => {
//           if (videoRef.current) {
//             videoRef.current.play().catch((error) => {
//               console.error("Video playback failed:", error);
//             });
//           }
//         },
//       },
//       "-=0.3"
//     );

//     // Additional scroll-based animation for video
//     gsap.to(videoRef.current, {
//       scale: 1.05, // Slightly larger for a dynamic effect
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: videoRef.current,
//         start: "top center", // Start when top of video hits center
//         end: "bottom 20%", // End when bottom of video is 20% from bottom
//         scrub: 1, // Smoothly animate with scroll
//       },
//     });

//     // Popup animation
//     gsap.fromTo(
//       popupRef.current,
//       { y: -50, opacity: 0, scale: 0.9 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         ease: "power2.out",
//         delay: 0.5,
//       }
//     );

//     gsap.to(buttonRef.current, {
//       scale: 1.03,
//       duration: 0.3,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       scrollTrigger: {
//         trigger: buttonRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         toggleActions: "play pause resume pause",
//       },
//     });

//     gsap.to(imageRef.current, {
//       rotateY: -2,
//       duration: 0.6,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         scrub: 1,
//       },
//     });

//     const addButtonListeners = () => {
//       if (buttonRef.current) {
//         gsap.set(buttonRef.current, { transformPerspective: 500 });
//         buttonRef.current.addEventListener("mouseenter", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1.08,
//             boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
//             duration: 0.2,
//             ease: "power2.out",
//           });
//         });
//         buttonRef.current.addEventListener("mouseleave", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1,
//             boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
//             duration: 0.2,
//             ease: "power2.out",
//           });
//         });
//         buttonRef.current.addEventListener("mousedown", () => {
//           gsap.to(buttonRef.current, {
//             scale: 0.97,
//             duration: 0.1,
//             ease: "power2.in",
//           });
//         });
//         buttonRef.current.addEventListener("mouseup", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1.08,
//             duration: 0.15,
//             ease: "power2.out",
//           });
//         });
//       }
//     };

//     addButtonListeners();

//     return () => {
//       if (buttonRef.current) {
//         buttonRef.current.removeEventListener("mouseenter", () => {});
//         buttonRef.current.removeEventListener("mouseleave", () => {});
//         buttonRef.current.removeEventListener("mousedown", () => {});
//         buttonRef.current.removeEventListener("mouseup", () => {});
//       }
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   const handleApplyClick = () => {
//     window.open("https://forms.gle/fRkJ2XBLGdTjKUp9A", "_blank");
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen overflow-x-hidden flex flex-col items-center justify-start px-4 py-4 sm:px-6 sm:py-6 lg:px-16 lg:py-12 xl:px-20 xl:py-16 relative"
//       style={{
//         background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
//       }}
//     >
//       {/* Popup Card for Campus Ambassador */}
//       {/* <div
//         ref={popupRef}
//         className="absolute top-24 right-2 sm:top-32 sm:right-4 bg-white rounded-lg shadow-xl p-2 sm:p-3 md:p-4 w-10/12 max-w-[240px] sm:max-w-[280px] md:max-w-[320px] z-20 border border-[#a8744f]"
//       >
//         <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#4a3728] mb-1 sm:mb-2">
//           Campus Ambassador
//         </h2>
//         <p className="text-[10px] sm:text-xs md:text-sm text-[#4a3728] mb-1 sm:mb-2 md:mb-3">
//           Join our team! Apply to be a Campus Ambassador for Throne8.
//         </p>
//         <button
//           className="bg-[#a8744f] hover:bg-[#905f3b] text-white text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full shadow-lg transition-all duration-300 w-full"
//           onClick={handleApplyClick}
//         >
//           Apply
//         </button>
//       </div> */}

//       <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-4 sm:gap-6 lg:gap-12">
//         <div className="text-center lg:text-left w-full max-w-full sm:max-w-md lg:max-w-xl space-y-3 sm:space-y-4 z-10 px-2 sm:px-0">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#4a3728] leading-tight font-aquire-bold -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-16 xl:-ml-20">
//             <div>
//               <span>{splitTextToLetters("Network", networkLettersRef)}</span>{" "}
//               <span>{splitTextToLetters("Smarter", smartLettersRef)}</span>
//             </div>
//             <div>
//               <span>{splitTextToLetters("Grow", growLettersRef)}</span>{" "}
//               <span>{splitTextToLetters("Faster", fasterLettersRef)}</span>
//             </div>
//           </h1>
//           <p
//             ref={subTextRef}
//             className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4a3728]"
//           >
//             Throne8 blends AI + community to take your professional journey to
//             the next level.
//           </p>
//           <button
//             ref={buttonRef}
//             className="bg-[#a8744f] hover:bg-[#905f3b] text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300"
//             onClick={playSound}
//           >
//             Get Started
//           </button>
//         </div>
//         <div
//           ref={imageRef}
//           className="w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center items-center"
//         >
//           <img
//             src={phoneIllustration}
//             alt="Phone Illustration"
//             className="w-full h-auto object-contain"
//           />
//         </div>
//       </div>

//       {/* Video Section */}
//       <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 z-10">
//         <video
//           ref={videoRef}
//           className="w-full h-auto rounded-lg shadow-lg"
//           controls
//           muted
//           loop
//         >
//           <source src={myVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import phoneIllustration from "../assets/phone1.png";
// import myVideo from "../assets/myVideo5.mp4"; // Import your local video file

// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {
//   const networkLettersRef = useRef([]);
//   const smartLettersRef = useRef([]);
//   const erLettersRef = useRef([]);
//   const growLettersRef = useRef([]);
//   const fasterLettersRef = useRef([]);
//   const subTextRef = useRef(null);
//   const buttonRef = useRef(null);
//   const imageRef = useRef(null);
//   const containerRef = useRef(null);
//   const connectionLettersRef = useRef([]);
//   const popupRef = useRef(null);
//   const videoRef = useRef(null);

//   const audioContextRef = useRef(null);
//   const sourceRef = useRef(null);

//   useEffect(() => {
//     audioContextRef.current = new (window.AudioContext ||
//       window.webkitAudioContext)();
//     return () => {
//       if (audioContextRef.current) audioContextRef.current.close();
//     };
//   }, []);

//   const playSound = () => {
//     if (audioContextRef.current.state === "suspended") {
//       audioContextRef.current.resume();
//     }
//     const oscillator = audioContextRef.current.createOscillator();
//     oscillator.type = "sine";
//     oscillator.frequency.setValueAtTime(
//       440,
//       audioContextRef.current.currentTime
//     );
//     oscillator.connect(audioContextRef.current.destination);
//     oscillator.start();
//     oscillator.stop(audioContextRef.current.currentTime + 0.3);
//     sourceRef.current = oscillator;
//   };

//   const splitTextToLetters = (text, refArray) =>
//     text.split("").map((char, index) => (
//       <span
//         key={index}
//         ref={(el) => (refArray.current[index] = el)}
//         className="inline-block"
//       >
//         {char}
//       </span>
//     ));

//   useEffect(() => {
//     gsap.set([imageRef.current], { transformPerspective: 500 });
//     gsap.set(videoRef.current, { transformPerspective: 500 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         toggleActions: "play none none none",
//       },
//     });

//     tl.to(containerRef.current, {
//       background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
//       duration: 1,
//       ease: "sine.inOut",
//     });

//     tl.fromTo(
//       networkLettersRef.current,
//       {
//         x: () => gsap.utils.random(-80, -30),
//         y: () => gsap.utils.random(-30, 30),
//         opacity: 0,
//         scale: () => gsap.utils.random(0.8, 1.2),
//       },
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       0
//     );

//     tl.fromTo(
//       smartLettersRef.current,
//       {
//         x: () => gsap.utils.random(30, 80),
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       erLettersRef.current,
//       {
//         x: () => gsap.utils.random(30, 80),
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       growLettersRef.current,
//       {
//         y: () => gsap.utils.random(-80, -20),
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         stagger: { amount: 0.1 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       fasterLettersRef.current,
//       {
//         x: () => gsap.utils.random(-80, -20),
//         opacity: 0,
//         scale: () => gsap.utils.random(1, 1.3),
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       subTextRef.current,
//       { y: 15, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
//       "-=0.3"
//     );

//     tl.fromTo(
//       buttonRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out",
//         boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
//       },
//       "-=0.2"
//     );

//     tl.fromTo(
//       imageRef.current,
//       { x: 300, opacity: 0, scale: 0.95 },
//       { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
//       "-=0.3"
//     );

//     tl.fromTo(
//       connectionLettersRef.current,
//       {
//         x: () => gsap.utils.random(-20, 20),
//         y: () => gsap.utils.random(-20, 20),
//         opacity: 0,
//         scale: () => gsap.utils.random(0.8, 1.2),
//       },
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: window.innerWidth < 640 ? 0.4 : 0.6,
//         stagger: { amount: window.innerWidth < 640 ? 0.2 : 0.3 },
//         ease: "power2.out",
//       },
//       "-=0.5"
//     );

//     // Video animation with scale from small to large
//     tl.fromTo(
//       videoRef.current,
//       { y: 50, opacity: 0, scale: 0.8 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: videoRef.current,
//           start: "top center",
//           toggleActions: "play none none none",
//           onEnter: () => {
//             if (videoRef.current) {
//               videoRef.current.currentTime = 0; // Reset to start
//               videoRef.current.play().catch((error) => {
//                 console.error("Video playback failed:", error);
//               });
//             }
//           },
//           onLeave: () => {
//             if (videoRef.current) {
//               videoRef.current.pause(); // Pause when leaving viewport upward
//             }
//           },
//           onEnterBack: () => {
//             if (videoRef.current) {
//               videoRef.current.currentTime = 0; // Reset to start
//               videoRef.current.play().catch((error) => {
//                 console.error("Video playback failed:", error);
//               });
//             }
//           },
//           onLeaveBack: () => {
//             if (videoRef.current) {
//               videoRef.current.pause(); // Pause when leaving viewport downward
//             }
//           },
//         },
//       },
//       "-=0.3"
//     );

//     // Additional scroll-based animation for video
//     gsap.to(videoRef.current, {
//       scale: 1.05,
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: videoRef.current,
//         start: "top center",
//         end: "bottom 20%",
//         scrub: 1,
//       },
//     });

//     // Popup animation
//     gsap.fromTo(
//       popupRef.current,
//       { y: -50, opacity: 0, scale: 0.9 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         ease: "power2.out",
//         delay: 0.5,
//       }
//     );

//     gsap.to(buttonRef.current, {
//       scale: 1.03,
//       duration: 0.3,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       scrollTrigger: {
//         trigger: buttonRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         toggleActions: "play pause resume pause",
//       },
//     });

//     gsap.to(imageRef.current, {
//       rotateY: -2,
//       duration: 0.6,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         scrub: 1,
//       },
//     });

//     const addButtonListeners = () => {
//       if (buttonRef.current) {
//         gsap.set(buttonRef.current, { transformPerspective: 500 });
//         buttonRef.current.addEventListener("mouseenter", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1.08,
//             boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
//             duration: 0.2,
//             ease: "power2.out",
//           });
//         });
//         buttonRef.current.addEventListener("mouseleave", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1,
//             boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
//             duration: 0.2,
//             ease: "power2.out",
//           });
//         });
//         buttonRef.current.addEventListener("mousedown", () => {
//           gsap.to(buttonRef.current, {
//             scale: 0.97,
//             duration: 0.1,
//             ease: "power2.in",
//           });
//         });
//         buttonRef.current.addEventListener("mouseup", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1.08,
//             duration: 0.15,
//             ease: "power2.out",
//           });
//         });
//       }
//     };

//     addButtonListeners();

//     return () => {
//       if (buttonRef.current) {
//         buttonRef.current.removeEventListener("mouseenter", () => {});
//         buttonRef.current.removeEventListener("mouseleave", () => {});
//         buttonRef.current.removeEventListener("mousedown", () => {});
//         buttonRef.current.removeEventListener("mouseup", () => {});
//       }
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   const handleApplyClick = () => {
//     window.open("https://forms.gle/fRkJ2XBLGdTjKUp9A", "_blank");
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen overflow-x-hidden flex flex-col items-center justify-start px-4 py-4 sm:px-6 sm:py-6 lg:px-16 lg:py-12 xl:px-20 xl:py-16 relative"
//       style={{
//         background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
//       }}
//     >
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-4 sm:gap-6 lg:gap-12">
//         <div className="text-center lg:text-left w-full max-w-full sm:max-w-md lg:max-w-xl space-y-3 sm:space-y-4 z-10 px-2 sm:px-0">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#4a3728] leading-tight font-aquire-bold -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-16 xl:-ml-20">
//             <div>
//               <span>{splitTextToLetters("Network", networkLettersRef)}</span>{" "}
//               <span>{splitTextToLetters("Smarter", smartLettersRef)}</span>
//             </div>
//             <div>
//               <span>{splitTextToLetters("Grow", growLettersRef)}</span>{" "}
//               <span>{splitTextToLetters("Faster", fasterLettersRef)}</span>
//             </div>
//           </h1>
//           <p
//             ref={subTextRef}
//             className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4a3728]"
//           >
//             Throne8 blends AI + community to take your professional journey to
//             the next level.
//           </p>
//           <button
//             ref={buttonRef}
//             className="bg-[#a8744f] hover:bg-[#905f3b] text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300"
//             onClick={playSound}
//           >
//             Get Started
//           </button>
//         </div>
//         <div
//           ref={imageRef}
//           className="w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center items-center"
//         >
//           <img
//             src={phoneIllustration}
//             alt="Phone Illustration"
//             className="w-full h-auto object-contain"
//           />
//         </div>
//       </div>

//       {/* Video Section */}
//       <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 z-10">
//         <video
//           ref={videoRef}
//           className="w-full h-auto rounded-lg shadow-lg"
//           controls
//           muted
//           loop
//         >
//           <source src={myVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import phoneIllustration from "../assets/phone1.png";
// import myVideo from "../assets/myVideo5.mp4"; // Import your local video file

// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {
//   const networkLettersRef = useRef([]);
//   const smartLettersRef = useRef([]);
//   const erLettersRef = useRef([]);
//   const growLettersRef = useRef([]);
//   const fasterLettersRef = useRef([]);
//   const subTextRef = useRef(null);
//   const buttonRef = useRef(null);
//   const imageRef = useRef(null);
//   const containerRef = useRef(null);
//   const connectionLettersRef = useRef([]);
//   const popupRef = useRef(null);
//   const videoRef = useRef(null);

//   const audioContextRef = useRef(null);
//   const sourceRef = useRef(null);

//   useEffect(() => {
//     audioContextRef.current = new (window.AudioContext ||
//       window.webkitAudioContext)();
//     return () => {
//       if (audioContextRef.current) audioContextRef.current.close();
//     };
//   }, []);

//   const playSound = () => {
//     if (audioContextRef.current.state === "suspended") {
//       audioContextRef.current.resume();
//     }
//     const oscillator = audioContextRef.current.createOscillator();
//     oscillator.type = "sine";
//     oscillator.frequency.setValueAtTime(
//       440,
//       audioContextRef.current.currentTime
//     );
//     oscillator.connect(audioContextRef.current.destination);
//     oscillator.start();
//     oscillator.stop(audioContextRef.current.currentTime + 0.3);
//     sourceRef.current = oscillator;
//   };

//   const splitTextToLetters = (text, refArray) =>
//     text.split("").map((char, index) => (
//       <span
//         key={index}
//         ref={(el) => (refArray.current[index] = el)}
//         className="inline-block"
//       >
//         {char}
//       </span>
//     ));

//   useEffect(() => {
//     gsap.set([imageRef.current], { transformPerspective: 500 });
//     gsap.set(videoRef.current, { transformPerspective: 500 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         toggleActions: "play none none none",
//       },
//     });

//     tl.to(containerRef.current, {
//       background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
//       duration: 1,
//       ease: "sine.inOut",
//     });

//     tl.fromTo(
//       networkLettersRef.current,
//       {
//         x: () => gsap.utils.random(-80, -30),
//         y: () => gsap.utils.random(-30, 30),
//         opacity: 0,
//         scale: () => gsap.utils.random(0.8, 1.2),
//       },
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       0
//     );

//     tl.fromTo(
//       smartLettersRef.current,
//       {
//         x: () => gsap.utils.random(30, 80),
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       erLettersRef.current,
//       {
//         x: () => gsap.utils.random(30, 80),
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       growLettersRef.current,
//       {
//         y: () => gsap.utils.random(-80, -20),
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         stagger: { amount: 0.1 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       fasterLettersRef.current,
//       {
//         x: () => gsap.utils.random(-80, -20),
//         opacity: 0,
//         scale: () => gsap.utils.random(1, 1.3),
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: { amount: 0.15 },
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     tl.fromTo(
//       subTextRef.current,
//       { y: 15, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
//       "-=0.3"
//     );

//     tl.fromTo(
//       buttonRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out",
//         boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
//       },
//       "-=0.2"
//     );

//     tl.fromTo(
//       imageRef.current,
//       { x: 300, opacity: 0, scale: 0.95 },
//       { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
//       "-=0.3"
//     );

//     tl.fromTo(
//       connectionLettersRef.current,
//       {
//         x: () => gsap.utils.random(-20, 20),
//         y: () => gsap.utils.random(-20, 20),
//         opacity: 0,
//         scale: () => gsap.utils.random(0.8, 1.2),
//       },
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: window.innerWidth < 640 ? 0.4 : 0.6,
//         stagger: { amount: window.innerWidth < 640 ? 0.2 : 0.3 },
//         ease: "power2.out",
//       },
//       "-=0.5"
//     );

//     // Video animation: initial zoom-in
//     tl.fromTo(
//       videoRef.current,
//       { y: 50, opacity: 0, scale: 0.8 }, // Start small
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1.2, // Zoom in to larger than normal
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: videoRef.current,
//           start: "top 80%", // Start when video is slightly above center
//           toggleActions: "play none none none",
//           onEnter: () => {
//             if (videoRef.current) {
//               videoRef.current.currentTime = 0; // Reset to start
//               videoRef.current.play().catch((error) => {
//                 console.error("Video playback failed:", error);
//               });
//             }
//           },
//           onLeave: () => {
//             if (videoRef.current) {
//               videoRef.current.pause(); // Pause when leaving viewport upward
//             }
//           },
//           onEnterBack: () => {
//             if (videoRef.current) {
//               videoRef.current.currentTime = 0; // Reset to start
//               videoRef.current.play().catch((error) => {
//                 console.error("Video playback failed:", error);
//               });
//             }
//           },
//           onLeaveBack: () => {
//             if (videoRef.current) {
//               videoRef.current.pause(); // Pause when leaving viewport downward
//             }
//           },
//         },
//       },
//       "-=0.3"
//     );

//     // Video zoom-out animation on scroll
//     gsap.to(videoRef.current, {
//       scale: 0.7, // Zoom out to smaller size
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: videoRef.current,
//         start: "top center", // Start zoom-out when top of video hits center
//         end: "bottom top", // End when bottom of video hits top of viewport
//         scrub: 1, // Smoothly tie animation to scroll
//       },
//     });

//     // Popup animation
//     gsap.fromTo(
//       popupRef.current,
//       { y: -50, opacity: 0, scale: 0.9 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         ease: "power2.out",
//         delay: 0.5,
//       }
//     );

//     gsap.to(buttonRef.current, {
//       scale: 1.03,
//       duration: 0.3,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       scrollTrigger: {
//         trigger: buttonRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         toggleActions: "play pause resume pause",
//       },
//     });

//     gsap.to(imageRef.current, {
//       rotateY: -2,
//       duration: 0.6,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top 90%",
//         end: "bottom 30%",
//         scrub: 1,
//       },
//     });

//     const addButtonListeners = () => {
//       if (buttonRef.current) {
//         gsap.set(buttonRef.current, { transformPerspective: 500 });
//         buttonRef.current.addEventListener("mouseenter", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1.08,
//             boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
//             duration: 0.2,
//             ease: "power2.out",
//           });
//         });
//         buttonRef.current.addEventListener("mouseleave", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1,
//             boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
//             duration: 0.2,
//             ease: "power2.out",
//           });
//         });
//         buttonRef.current.addEventListener("mousedown", () => {
//           gsap.to(buttonRef.current, {
//             scale: 0.97,
//             duration: 0.1,
//             ease: "power2.in",
//           });
//         });
//         buttonRef.current.addEventListener("mouseup", () => {
//           gsap.to(buttonRef.current, {
//             scale: 1.08,
//             duration: 0.15,
//             ease: "power2.out",
//           });
//         });
//       }
//     };

//     addButtonListeners();

//     return () => {
//       if (buttonRef.current) {
//         buttonRef.current.removeEventListener("mouseenter", () => {});
//         buttonRef.current.removeEventListener("mouseleave", () => {});
//         buttonRef.current.removeEventListener("mousedown", () => {});
//         buttonRef.current.removeEventListener("mouseup", () => {});
//       }
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   const handleApplyClick = () => {
//     window.open("https://forms.gle/fRkJ2XBLGdTjKUp9A", "_blank");
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen overflow-x-hidden flex flex-col items-center justify-start px-4 py-4 sm:px-6 sm:py-6 lg:px-16 lg:py-12 xl:px-20 xl:py-16 relative"
//       style={{
//         background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
//       }}
//     >
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-4 sm:gap-6 lg:gap-12">
//         <div className="text-center lg:text-left w-full max-w-full sm:max-w-md lg:max-w-xl space-y-3 sm:space-y-4 z-10 px-2 sm:px-0">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#4a3728] leading-tight font-aquire-bold -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-16 xl:-ml-20">
//             <div>
//               <span>{splitTextToLetters("Network", networkLettersRef)}</span>{" "}
//               <span>{splitTextToLetters("Smarter", smartLettersRef)}</span>
//             </div>
//             <div>
//               <span>{splitTextToLetters("Grow", growLettersRef)}</span>{" "}
//               <span>{splitTextToLetters("Faster", fasterLettersRef)}</span>
//             </div>
//           </h1>
//           <p
//             ref={subTextRef}
//             className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4a3728]"
//           >
//             Throne8 blends AI + community to take your professional journey to
//             the next level.
//           </p>
//           <button
//             ref={buttonRef}
//             className="bg-[#a8744f] hover:bg-[#905f3b] text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300"
//             onClick={playSound}
//           >
//             Get Started
//           </button>
//         </div>
//         <div
//           ref={imageRef}
//           className="w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center items-center"
//         >
//           <img
//             src={phoneIllustration}
//             alt="Phone Illustration"
//             className="w-full h-auto object-contain"
//           />
//         </div>
//       </div>

//       {/* Video Section */}
//       <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 z-10">
//         <video
//           ref={videoRef}
//           className="w-full h-auto rounded-lg shadow-lg"
//           controls
//           muted
//           loop
//         >
//           <source src={myVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import phoneIllustration from "../assets/phone1.png";
import myVideo from "../assets/myVideo6.mp4"; // Import your local video file

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const networkLettersRef = useRef([]);
  const smartLettersRef = useRef([]);
  const erLettersRef = useRef([]);
  const growLettersRef = useRef([]);
  const fasterLettersRef = useRef([]);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const connectionLettersRef = useRef([]);
  const popupRef = useRef(null);
  const videoRef = useRef(null);

  const audioContextRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext ||
      window.webkitAudioContext)();
    return () => {
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, []);

  const playSound = () => {
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }
    const oscillator = audioContextRef.current.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      440,
      audioContextRef.current.currentTime
    );
    oscillator.connect(audioContextRef.current.destination);
    oscillator.start();
    oscillator.stop(audioContextRef.current.currentTime + 0.3);
    sourceRef.current = oscillator;
  };

  const splitTextToLetters = (text, refArray) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        ref={(el) => (refArray.current[index] = el)}
        className="inline-block"
      >
        {char}
      </span>
    ));

  useEffect(() => {
    gsap.set([imageRef.current], { transformPerspective: 500 });
    gsap.set(videoRef.current, { transformPerspective: 500, scale: 0.8, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 30%",
        toggleActions: "play none none none",
      },
    });

    tl.to(containerRef.current, {
      background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
      duration: 1,
      ease: "sine.inOut",
    });

    tl.fromTo(
      networkLettersRef.current,
      {
        x: () => gsap.utils.random(-80, -30),
        y: () => gsap.utils.random(-30, 30),
        opacity: 0,
        scale: () => gsap.utils.random(0.8, 1.2),
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: { amount: 0.15 },
        ease: "power2.out",
      },
      0
    );

    tl.fromTo(
      smartLettersRef.current,
      {
        x: () => gsap.utils.random(30, 80),
        opacity: 0,
        scale: 0.9,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: { amount: 0.15 },
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      erLettersRef.current,
      {
        x: () => gsap.utils.random(30, 80),
        opacity: 0,
        scale: 0.9,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: { amount: 0.15 },
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      growLettersRef.current,
      {
        y: () => gsap.utils.random(-80, -20),
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: { amount: 0.1 },
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      fasterLettersRef.current,
      {
        x: () => gsap.utils.random(-80, -20),
        opacity: 0,
        scale: () => gsap.utils.random(1, 1.3),
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: { amount: 0.15 },
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      subTextRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.3"
    );

    tl.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
      },
      "-=0.2"
    );

    tl.fromTo(
      imageRef.current,
      { x: 300, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );

    tl.fromTo(
      connectionLettersRef.current,
      {
        x: () => gsap.utils.random(-20, 20),
        y: () => gsap.utils.random(-20, 20),
        opacity: 0,
        scale: () => gsap.utils.random(0.8, 1.2),
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: window.innerWidth < 640 ? 0.4 : 0.6,
        stagger: { amount: window.innerWidth < 640 ? 0.2 : 0.3 },
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Video animation: smooth reveal and controlled shrink
    tl.fromTo(
      videoRef.current,
      { y: 50, opacity: 0, scale: 0.8 }, // Start small and hidden
      {
        y: 0,
        opacity: 1,
        scale: 1, // Reveal at normal size
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0; // Reset to start
            videoRef.current.play().catch((error) => {
              console.error("Video playback failed:", error);
            });
          }
        },
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%", // Start when video is slightly above center
          toggleActions: "play none none none",
        },
      },
      "-=0.3"
    ).to(
      videoRef.current,
      {
        scale: 0.5, // Shrink to smaller size
        duration: 1.2, // Longer duration for smooth transition
        ease: "power2.inOut", // Smooth easing
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 70%", // Start shrink earlier
          end: "center 30%", // End when center is 30% from top
          scrub: 0.5, // Smoothly tie to scroll
          onEnter: () => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0; // Reset to start
              videoRef.current.play().catch((error) => {
                console.error("Video playback failed:", error);
              });
            }
          },
          onLeave: () => {
            if (videoRef.current) {
              videoRef.current.pause(); // Pause when leaving upward
            }
          },
          onEnterBack: () => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0; // Reset to start
              videoRef.current.play().catch((error) => {
                console.error("Video playback failed:", error);
              });
            }
          },
          onLeaveBack: () => {
            if (videoRef.current) {
              videoRef.current.pause(); // Pause when leaving downward
            }
          },
        },
      },
      "-=0.5"
    );

    // Popup animation: slide in from right
    gsap.fromTo(
      popupRef.current,
      { x: "100%", opacity: 0 }, // Start off-screen to the right
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    const addButtonListeners = () => {
      if (buttonRef.current) {
        gsap.set(buttonRef.current, { transformPerspective: 500 });
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.08,
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
            duration: 0.2,
            ease: "power2.out",
          });
        });
        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
            duration: 0.2,
            ease: "power2.out",
          });
        });
        buttonRef.current.addEventListener("mousedown", () => {
          gsap.to(buttonRef.current, {
            scale: 0.97,
            duration: 0.1,
            ease: "power2.in",
          });
        });
        buttonRef.current.addEventListener("mouseup", () => {
          gsap.to(buttonRef.current, {
            scale: 1.08,
            duration: 0.15,
            ease: "power2.out",
          });
        });
      }
    };

    addButtonListeners();

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mouseenter", () => {});
        buttonRef.current.removeEventListener("mouseleave", () => {});
        buttonRef.current.removeEventListener("mousedown", () => {});
        buttonRef.current.removeEventListener("mouseup", () => {});
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleApplyClick = () => {
    window.open("https://forms.gle/iVyaH98uYpEUVCuT6", "_blank");
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-x-hidden flex flex-col items-center justify-start px-4 py-4 sm:px-6 sm:py-6 lg:px-16 lg:py-12 xl:px-20 xl:py-16 relative"
      style={{
        background: "linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)",
      }}
    >
      {/* Campus Ambassador Popup - Smaller Size at Top */}
      <div
        ref={popupRef}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-lg shadow-xl p-2 sm:p-2.5 md:p-3 w-11/12 max-w-[140px] sm:max-w-[200px] md:max-w-[240px] z-30 border border-[#a8744f] mt-20"
      >
        <h2 className="text-xs sm:text-sm md:text-base font-bold text-[#4a3728] mb-0.5 sm:mb-1">
          Campus Ambassador
        </h2>
        <p className="text-[9px] sm:text-[10px] md:text-xs text-[#4a3728] mb-0.5 sm:mb-1 md:mb-2">
          Join us! Be a Campus Ambassador for Throne8.
        </p>
        <button
          className="bg-[#a8744f] hover:bg-[#905f3b] text-white text-[9px] sm:text-[10px] md:text-xs px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full shadow-md transition-all duration-300 w-full"
          onClick={handleApplyClick}
        >
          Apply
        </button>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-4 sm:gap-6 lg:gap-12 mt-16 sm:mt-20 md:mt-24">
        <div className="text-center lg:text-left w-full max-w-full sm:max-w-md lg:max-w-xl space-y-3 sm:space-y-4 z-10 px-2 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#4a3728] leading-tight font-aquire-bold -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-16 xl:-ml-20">
            <div>
              <span>{splitTextToLetters("Network", networkLettersRef)}</span>{" "}
              <span>{splitTextToLetters("Smarter", smartLettersRef)}</span>
            </div>
            <div>
              <span>{splitTextToLetters("Grow", growLettersRef)}</span>{" "}
              <span>{splitTextToLetters("Faster", fasterLettersRef)}</span>
            </div>
          </h1>
          <p
            ref={subTextRef}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4a3728]"
          >
            Throne8 blends AI + community to take your professional journey to
            the next level.
          </p>
          <button
            ref={buttonRef}
            className="bg-[#a8744f] hover:bg-[#905f3b] text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300"
            // onClick={playSound}
          >
            Get Started
          </button>
        </div>
        <div
          ref={imageRef}
          className="w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center items-center"
        >
          <img
            src={phoneIllustration}
            alt="Phone Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 z-10">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-lg"
          controls
          muted
          loop
        >
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default LandingPage;