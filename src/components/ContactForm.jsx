import React, { useState } from "react";
import { Card } from "./Card";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Simulate form submission (e.g., log data or show alert)
    alert(
      "Form submitted! (Name: " +
        formData.name +
        ", Email: " +
        formData.email +
        ", Message: " +
        formData.message +
        ")"
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Card className="bg-[#f6ede8] p-8 rounded-xl shadow-lg">
      <h3 className="text-xl font-aquire-bold mb-6 text-[#4a3728]">
        Send Us a Message
      </h3>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#4a3728]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#4a3728]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#4a3728]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="w-full bg-[#a8744f] hover:bg-[#905f3b] text-white px-4 py-2 rounded-md  transition font-aquire-bold"
          >
            Send Message
          </button>
        </div>
      </div>
    </Card>
  );
}
