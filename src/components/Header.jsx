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
        onComplete: () => {
          menuItemsRef.current.forEach((el) => {
            if (el) gsap.set(el, { clearProps: "transform" });
          });
        },
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
      <nav className="w-screen py-3 px-4 sm:px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <div ref={logoRef}>
          <img src={logo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        {/* Animated Text + Underline */}
        <div className="flex flex-col items-center">
          <div
            ref={textRef}
            className="flex gap-1 sm:gap-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-aquire-bold text-[#4a3728] tracking-wide uppercase"
          >
            <span>A New Era</span>
            <span>is Loading...</span>
          </div>
          <div
            ref={underlineRef}
            className="h-[2px] bg-[#4a3728] mt-1 w-full max-w-[100px] sm:max-w-[120px] md:max-w-[140px]"
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
              ? "fixed top-[284px] left-0 right-0 transform -translate-y-1/2 w-full bg-[#f6ede8] p-4 shadow-md z-40 flex flex-col items-center justify-center md:hidden min-h-[180px] gap-4"
              : "hidden md:flex"
          } md:space-x-4 lg:space-x-6 font-aquire-bold text-xs sm:text-sm md:text-base`}
        >
          {["home", "about", "contact"].map((section, i) => (
            <li key={section} className="w-full text-center">
              <button
                onClick={() => handleScroll(section)}
                ref={(el) => (menuItemsRef.current[i] = el)}
                className="text-gray-600 hover:text-[#4a3728] px-4 py-3 transition duration-300 w-full text-lg font-medium"
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