import React from "react";
import { Card } from "../components/Card";
import WelcomeCard from "./WelcomeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faComments,
  faShieldAlt,
  faBriefcase,
  faLaptopCode,
  faUsersCog,
  faChartBar,
  faGlobe,
  faRocket,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";
import Team from "./TeamMember";

function TeamMember({ name, role, imageUrl }) {
  return (
    <div className="text-[#0D2B14] from-white to-gray-50 p-6 rounded-xl shadow-xl border-gradient transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">
      <div className="text-center">
        <img
          src={imageUrl}
          alt={`${name}, ${role}`}
          className="w-20 h-20 rounded-full object-cover object-top mx-auto mb-4 shadow-md slide-up"
          style={{ animationDelay: "0.2s" }}
        />
        <h3
          className="text-xl font-bold mb-2 text-gray-800 slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          {name}
        </h3>
        <p
          className="text-[#0D2B14] slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

function Feature({ title, description, icon }) {
  return (
    <div className="heme p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-start mb-4">
        <div
          className="mr-4 text-[#0D2B14] text-2xl slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>
          <h3
            className="text-xl font-semibold mb-2 text-gray-800 slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {title}
          </h3>
          <p
            className="text-[#0D2B14] slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <div className="heme p-6 rounded-xl shadow-lg bg-amber-200 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-start mb-4">
        <div
          className="mr-4 text-[#0D2B14] text-2xl slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>
          <h3
            className="text-xl font-semibold mb-2 text-gray-800 slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {title}
          </h3>
          <p
            className="text-[#0D2B14] slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const teamMembers = [
    {
      name: "Hemendra Gour",
      role: "CEO & Founder",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      name: "Honey Sharma",
      role: "Bhoshdi Bala/ Gandu",
      imageUrl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      name: "Devesh Sharma",
      role: "Head of Product",
      imageUrl:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      name: "Anita Verma",
      role: "Lead Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      name: "Rahul Kapoor",
      role: "Chief Marketing Officer",
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      name: "Priya Singh",
      role: "Head of Operations",
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    },
  ];

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="container mx-auto w-full">
        {/* Vision Section */}
        <div className="mw-full">
          <WelcomeCard />
        </div>

        {/* What We're Building */}
        <div className="mb-16 fade-in">
          <Service />
        </div>

        {/* Our Services Section */}

        {/* Team Section */}
        <Team />
      </div>
    </section>
  );
}
