import React from "react";

export function Card({ children, className }) {
  return (
    <div
      className={`bg-[#f6ede8] rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
