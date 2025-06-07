// // VisionCard.jsx
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const VisionCard = () => {|

//   const imageRef = useRef(null);
//   const textContainerRef = useRef(null);
//   const greetingRef = useRef(null);
//   const titleRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     // Animation for the image
//     gsap.fromTo(
//       imageRef.current,
//       { scale: 0.8, opacity: 0.7 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 80%",
//           end: "top 50%",
//           scrub: 1,
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Animation for the greeting ("Hey, bestie!")
//     gsap.fromTo(
//       greetingRef.current,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.4,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: textContainerRef.current,
//           start: "top 80%",
//           end: "top 50%",
//           scrub: 1,
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Animation for the title
//     gsap.fromTo(
//       titleRef.current,
//       { opacity: 0, x: -50 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 0.6,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: textContainerRef.current,
//           start: "top 75%",
//           end: "top 45%",
//           scrub: 1,
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Animation for the description
//     gsap.fromTo(
//       descriptionRef.current,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.4,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: textContainerRef.current,
//           start: "top 65%",
//           end: "top 35%",
//           scrub: 1,
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Animation for the button
//     gsap.fromTo(
//       buttonRef.current,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.4,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: textContainerRef.current,
//           start: "top 60%",
//           end: "top 30%",
//           scrub: 1,
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Cleanup ScrollTrigger on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="flex w-full h-[400px] bg-[#F5E6CC] overflow-hidden">
//       {/* Left Section: Text with Background Pattern */}
//       <div className="relative flex-1 bg-[url('https://via.placeholder.com/300x300.png?text=Subtle+Pattern')] bg-repeat">
//         {/* Centered White Card */}
//         <div
//           ref={textContainerRef}
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-sm w-3/4 max-w-lg"
//         >
//           <h2
//             ref={greetingRef}
//             className="text-[#D4A373] text-xl font-medium mb-2 tracking-wide"
//           >
//             Hey, bestie!
//           </h2>
//           <h1
//             ref={titleRef}
//             className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
//           >
//             NEED MORE HOURS <br /> back in your day?
//           </h1>
//           <p
//             ref={descriptionRef}
//             className="text-sm text-gray-600 mb-6 leading-relaxed"
//           >
//             I help women ditch time-sucking tasks they hate and give them more
//             freedom and time to do what they love!
//           </p>
//           <a
//             ref={buttonRef}
//             href="#"
//             className="inline-block bg-[#D4A373] text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-opacity-90"
//           >
//             LEARN MORE
//           </a>
//         </div>
//       </div>

//       {/* Right Section: Image with Hover Effect */}
//       <div ref={imageRef} className="w-1/3">
//         <img
//           src="https://via.placeholder.com/300x400"
//           alt="Person with coffee cup"
//           className="w-full h-full object-cover transform hover:scale-95 transition-transform duration-300 ease-in-out"
//         />
//       </div>
//     </div>
//   );
// };

// export default 'isisedard;
   