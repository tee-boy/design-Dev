"use client";

import { FaEnvelope, FaStar, FaAward, FaUserCheck } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
        Have an <span className="text-orange-500">Awesome Project</span> <br /> Idea?{" "}
        <span className="text-orange-500">Let’s Discuss</span>
      </h2>

      {/* Email Input */}
      <div className="flex justify-center">
        <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-md px-2 py-2 w-full max-w-md">
          <FaEnvelope className="text-orange-500 ml-3" />
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-1 px-3 py-2 outline-none text-gray-700 bg-transparent"
          />
          <button className="bg-linear-to-r from-orange-500 to-orange-400 text-white px-5 py-2 rounded-full hover:opacity-90 transition-all duration-300">
            Send
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <FaStar className="text-orange-500" /> <span>4.9/5 Average Ratings</span>
        </div>
        <div className="flex items-center gap-2">
          <FaAward className="text-orange-500" /> <span>25+ Winning Awards</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserCheck className="text-orange-500" />{" "}
          <span>Certified Product Designer</span>
        </div>
      </div>
    </section>
  );
}