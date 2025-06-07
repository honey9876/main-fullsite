// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import logo from "../assets/logo.png";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const logoRef = useRef(null);
//   const menuItemsRef = useRef([]);
//   const textRef = useRef(null);

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     // Logo animation
//     gsap.fromTo(
//       logoRef.current,
//       { opacity: 0, scale: 0.5 },
//       { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
//     );

//     // Menu items animation
//     gsap.fromTo(
//       menuItemsRef.current,
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//         delay: 0.5,
//       }
//     );

//     // Advanced "Coming Soon" animation with word-by-word effect
//   }, []);

//   return (
//     <header className="bg-[#e0d8cf] shadow-md fixed top-0 w-full z-50">
//       <nav className="w-full py-5 px-4 md:px-10 flex justify-between items-center relative">
//         {/* Logo */}
//         <div ref={logoRef}>
//           <img src={logo} alt="Logo" className="w-13 h-13" />
//         </div>

//         {/* Animated "Coming Soon" */}
//         <div
//           ref={textRef}
//           className="absolute left-1/2 md:left-[55%] transform -translate-x-1/2 ml-16 sm:px-6 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-aquire-bold text-[#4a3728] tracking-wide whitespace-nowrap uppercase"
//         >
//           Coming Soon...
//         </div>

//         {/* Hamburger Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-800 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {menuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul
//           className={`${
//             menuOpen
//               ? "absolute top-16 left-0 w-full bg-[#f6ede8] p-4 space-y-4 shadow-md z-40 flex flex-col items-center"
//               : "hidden"
//           } md:flex md:space-x-8 md:items-center font-aquire-bold text-xl`}
//         >
//           {["home", "about", "contact"].map((section, i) => (
//             <li key={section}>
//               <button
//                 onClick={() => handleScroll(section)}
//                 ref={(el) => (menuItemsRef.current[i] = el)}
//                 className="menu-item text-gray-600 hover:text-blue-600 px-4 py-2 transition duration-300"
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import logo from "../assets/logo.png";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const logoRef = useRef(null);
//   const menuItemsRef = useRef([]);
//   const textRef = useRef(null);
//   const underlineRef = useRef(null);

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     // Logo animation
//     gsap.fromTo(
//       logoRef.current,
//       { opacity: 0, scale: 0.5 },
//       { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
//     );

//     // Menu items animation
//     gsap.fromTo(
//       menuItemsRef.current,
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//         delay: 0.5,
//       }
//     );

//     // "Coming Soon" animation from top, word by word
//     if (textRef.current) {
//       const words = textRef.current.children;
//       gsap.fromTo(
//         words,
//         { y: -50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           stagger: 0.3,
//           ease: "power2.out",
//           delay: 0.8,
//         }
//       );
//     }

//     // Underline animation
//     if (underlineRef.current) {
//       gsap.fromTo(
//         underlineRef.current,
//         { width: "0%" },
//         {
//           width: "100%",
//           duration: 1,
//           ease: "power2.out",
//           delay: 1.5, // Starts after "Coming Soon" animation
//         }
//       );
//     }
//   }, []);

//   return (
//     <header className="bg-[#e0d8cf] shadow-md fixed top-0 w-full z-50">
//       <nav className="w-full py-5 px-4 md:px-10 flex justify-between items-center relative">
//         {/* Logo */}
//         <div ref={logoRef}>
//           <img src={logo} alt="Logo" className="w-13 h-13" />
//         </div>

//         {/* Animated "Coming Soon" with Underline */}
//         <div className="absolute left-1/2 md:left-[55%] transform -translate-x-1/2 ml-16 sm:px-6 flex flex-col items-center">
//           <div
//             ref={textRef}
//             className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-aquire-bold text-[#4a3728] tracking-wide uppercase"
//           >
//             {/* <span>Coming</span> <span>Soon...</span> */}
//           </div>
//           {/* <div ref={underlineRef} className="h-1 bg-[#4a3728] mt-1"></div> */}
//         </div>

//         {/* Hamburger Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-800 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {menuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul
//           className={`${
//             menuOpen
//               ? "absolute top-16 left-0 w-full bg-[#f6ede8] p-4 space-y-4 shadow-md z-40 flex flex-col items-center"
//               : "hidden"
//           } md:flex md:space-x-8 md:items-center font-aquire-bold text-xl`}
//         >
//           {["home", "about", "contact"].map((section, i) => (
//             <li key={section}>
//               <button
//                 onClick={() => handleScroll(section)}
//                 ref={(el) => (menuItemsRef.current[i] = el)}
//                 className="menu-item text-gray-600 hover:text-blue-600 px-4 py-2 transition duration-300"
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const textRef = useRef(null);
  const underlineRef = useRef(null);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      menuItemsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    if (textRef.current) {
      const words = textRef.current.children;
      gsap.fromTo(
        words,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          delay: 0.8,
        }
      );
    }

    if (underlineRef.current) {
      gsap.fromTo(
        underlineRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 1,
          ease: "power2.out",
          delay: 1.5,
        }
      );
    }
  }, []);

  return (
    <header className="bg-[#e0d8cf] shadow-md fixed top-0 w-screen z-50">
      <nav className="w-screen py-5 px-4 md:px-10 flex justify-between items-center relative">
        {/* Logo */}
        <div ref={logoRef}>
          <img src={logo} alt="Logo" className="w-13 h-13" />
        </div>

        {/* Animated Text + Underline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 ml-16 flex flex-col items-center">
          <div
            ref={textRef}
            className="flex gap-2 text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-aquire-bold text-[#4a3728] tracking-wide uppercase"
          >
            <span>Coming</span>
            <span>Soon...</span>
          </div>
          <div
            ref={underlineRef}
            className="h-[2px] bg-[#4a3728] mt-1 w-full max-w-[120px]"
          ></div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`${
            menuOpen
              ? "fixed top-14 left-0 right-0 w-full bg-[#f6ede8] p-4 space-y-3 shadow-md z-40 flex flex-col items-center md:hidden"
              : "hidden md:flex"
          } md:space-x-6 font-aquire-bold text-sm sm:text-base md:text-lg`}
        >
          {["home", "about", "contact"].map((section, i) => (
            <li key={section}>
              <button
                onClick={() => handleScroll(section)}
                ref={(el) => (menuItemsRef.current[i] = el)}
                className="text-gray-600 hover:text-[#4a3728] px-3 py-1 transition duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
