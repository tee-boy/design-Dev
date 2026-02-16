"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center px-6 md:px-20 pt-24 bg-white text-[#1A004A] overflow-hidden"
    >
      {/* === TOP HEADING SECTION === */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 z-10"
      >
        <p className="inline-block border-2 border-orange-500 text-[#1A004A] px-5 py-1 rounded-full text-sm font-medium mt-10 mb-2">
          Hello!
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
          I’m <span className="text-[#235181]">Emmanuel,</span> <br /> Visual Designer
        </h1>
      </motion.div>

      {/* === MAIN GRID SECTION === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center w-full max-w-7xl relative z-10">
        {/* LEFT COLUMN - DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-1 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0 space-y-6"
        >
          <p className="text-[#344054] text-base md:text-lg max-w-md leading-relaxed relative">
            <span className="text-6xl text-[#344054] font-serif absolute -left-6 top-0">
              “
            </span>
            <br />
            Emmanuel is a highly accomplished designer with more than{" "}
            <span className="font-semibold">3 years of experience</span> in this
            creative field, including strong design systems and branding
            experience that help clients achieve their vision while maintaining
            consistency and enhancing their brand storytelling.
          </p>
        </motion.div>

        {/* CENTER COLUMN - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="order-3 md:order-2 flex justify-center items-center relative mt-10 md:mt-0"
        >
          {/* Navy Blue Circle (Tucked to Neck Level) */}
          <div className="relative w-[320px] h-80 md:w-105 md:h-105 bg-[#1A004A] rounded-full overflow-hidden translate-y-14 md:translate-y-20 shadow-lg shadow-[#1A004A]/30" />

          {/* Portrait Image (Balanced & Tucked) */}
          <div className="absolute bottom-15 md:bottom-[-27.5] z-10">
            <Image
              src="/jerryherosection.png"
              alt="Jeremiah portrait"
              width={450}
              height={650}
              className="object-cover md:w-100 md:h- w-[300px] h-[450px] rounded-full"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN - EXPERIENCE TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="order-2 md:order-3 flex flex-col items-center md:items-end text-center md:text-right px-4 md:px-0 space-y-2"
        >
          <div className="flex space-x-1 text-3xl text-[#1A004A] mb-1">
            {Array(5)
              .fill("★")
              .map((star, i) => (
                <span key={i}>{star}</span>
              ))}
          </div>
          <h3 className="text-[#1A004A] font-extrabold text-3xl md:text-4xl">
            3 Years
          </h3>
          <p className="text-gray-600 font-medium text-sm md:text-base">
            Experience
          </p>
        </motion.div>
      </div>

      {/* Overlap effect - smooth tucked-in under next section */}
      <div className="absolute bottom-[-90px] md:bottom-[-160px] left-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent z-0" />
    </section>
  );
}