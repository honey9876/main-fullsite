import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faShieldAlt,
  faStar,
  faUserCheck,
  faRocket,
  faGlobe,
  faChartBar,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import digital from "../assets/digital1.png";
import AI from "../assets/AI.png";
import vvv from "../assets/vvv.png";
import resume from "../assets/resume.png";
import chat from "../assets/chat.png";
import menter from "../assets/menterai.png";
import registration from "../assets/registration.png";

gsap.registerPlugin(ScrollTrigger);

const whyChooseUsData = [
  {
    title: "AI-Powered Job & Connection Recommendations",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: faGears,
    imageUrl: AI,
  },
  {
    title: "Resume Analyzer & Career Roadmap Generator",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: faShieldAlt,
    imageUrl: resume,
  },
  {
    title: "Real-time Chat with Translation & Sync",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: faStar,
    imageUrl: chat,
  },
  {
    title: "In-App Events, Webinars & Virtual Job Fairs",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: faUserCheck,
    imageUrl: vvv,
  },
  {
    title: "AI Mentorship Matching & Community Support",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: faRocket,
    imageUrl: menter,
  },
  {
    title: " Advanced Freelance Marketplace",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: faGlobe,
    imageUrl:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    title: "One-Stop Business Registration Platform",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: faChartBar,
    imageUrl: registration,
  },
  {
    title: "Verified Digital Profiles with Badges & 2FA",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: faLaptopCode,
    imageUrl: digital,
  },
];

const Service = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const handleMouseEnter = (card, img, icon) => {
      gsap.to(card, {
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(img, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(icon, {
        scale: 1.2,
        rotation: -5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (card, img, icon) => {
      gsap.to(card, {
        scale: 1,
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(img, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    gsap.fromTo(
      sectionRef.current.querySelector("h2"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      sectionRef.current.querySelector("p"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    if (!isMobile) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50, scale: 0.95, rotation: 5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.6, // Reduced from 0.8 to 0.5 for faster animation
          ease: "power2.inOut", // Changed to a snappier easing function
          stagger: 0.1, // Reduced from 0.2 to 0.1 for quicker staggering
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".grid"),
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".heading-char"),
      {
        opacity: 0,
        y: -40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power2.out",
        stagger: 0.05,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const img = card.querySelector("img");
      const icon = card.querySelector(".icon-container");

      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "back.out(1)",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const mouseEnterHandler = () => handleMouseEnter(card, img, icon);
      const mouseLeaveHandler = () => handleMouseLeave(card, img, icon);
      card.addEventListener("mouseenter", mouseEnterHandler);
      card.addEventListener("mouseleave", mouseLeaveHandler);
      card._gsapEventHandlers = { mouseEnterHandler, mouseLeaveHandler };
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      cardsRef.current.forEach((card) => {
        if (card && card._gsapEventHandlers) {
          card.removeEventListener(
            "mouseenter",
            card._gsapEventHandlers.mouseEnterHandler
          );
          card.removeEventListener(
            "mouseleave",
            card._gsapEventHandlers.mouseLeaveHandler
          );
        }
      });
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-12 bg-[#e0d8cf] will-change-transform">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-aquire-bold text-[#4a3728] text-center mb-4 heading-text">
          {Array.from("Main Services").map((char, i) => (
            <span key={i} className="inline-block heading-char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <p className="text-[#4a3728] text-center mb-8">
          Delivering smart, scalable, and future-ready solutions that drive real
          impact.
        </p>

        <div className="grid md:grid-cols-4 gap-8  ">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[#f6ede8] p-6 rounded-xl shadow-lg flex flex-col items-center transition-all duration-300 will-change-transform x"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-56 h-32 rounded-lg object-cover mb-4"
              />
              <div className="text-[#4a3728] text-3xl mb-4 icon-container">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className="text-xl font-semibold text-[#4a3728] mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-[#4a3728] text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
