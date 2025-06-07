import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo2.png"; // Adjust
import Honey from "../assets/Honey-1.png";
import dharmendra from "../assets/dharmendra.png";
import devesh from "../assets/devesh-photo.png";
import prabhat from "../assets/prabhat1.png";
import som from "../assets/som.png";
import rgh from "../assets/rgh.png";

gsap.registerPlugin(ScrollTrigger);

const TeamMember = ({ name, role, imageUrl }) => {
  return (
    <div className="bg-[#f6ede8] p-6 rounded-xl shadow-xl border-gradient transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">
      <div className="text-center">
        <img
          src={imageUrl}
          alt={`${name}, ${role}`}
          className="w-40 h-40 rounded-full object-cover object-top mx-auto mb-4 shadow-md"
        />
        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-[#0D2B14]">{role}</p>
      </div>
    </div>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: "Hemendra Gour",
      role: "Founder & CEO",
      imageUrl: rgh,
    },
    {
      name: "Honey Sharma",
      role: "Co-Founder",
      imageUrl: Honey,
    },
    {
      name: "Devesh Sharma",
      role: "Co-Founder ",
      imageUrl: devesh,
    },
    {
      name: "Dharmendra Makwana",
      role: "Lead Designer",
      imageUrl: dharmendra,
    },
    {
      name: "Prabhat Dhadse",
      role: "Video Editor",
      imageUrl: prabhat,
    },
    {
      name: "Somya Singh Parmar",
      role: "Marketing & Community Builder",
      imageUrl: som,
    },
  ];

  const cardRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      const fromDirection = index < 3 ? -100 : 100;

      gsap.fromTo(
        el,
        { opacity: 0, x: fromDirection },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="py-12 bg-[#e0d8cf] font-semibold overflow-x-hidden">
      <h2
        ref={headingRef}
        className="text-4xl font-aquire-bold mb-8 text-center text-[#4a3728]"
      >
        Meet Our Team
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-8">
        {teamMembers.map((member, index) => (
          <div key={index} ref={(el) => (cardRefs.current[index] = el)}>
            <TeamMember
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
