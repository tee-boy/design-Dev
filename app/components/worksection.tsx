"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface Experience {
  company: string;
  duration: string;
  role: string;
  description: string;
  dotColor: string;
}

const experiences: Experience[] = [
  {
    company: "Grandeur Tech & IT Services, Lagos",
    duration: "Jan 2023 - July 2025",
    role: "Visual Designer",
    description:
      "I design production ready visual assets, including logos and infographics, using Adobe Photoshop and Illustrator, I taught design, color theory concepts.",
    dotColor: "bg-orange-500",
  },
  {
    company: "Prime Finance, Lagos",
    duration: "July 2025",
    role: "Creative Designer",
    description:
      "I create Online banners and flyer for this brand promotion, I create Social Media carousel designs.",
    dotColor: "bg-black",
  },
  {
    company: "SkyStone Finance, Lagos",
    duration: "July 2025 - October 2025",
    role: "Visual Designer",
    description:
      "I designed social media banners, maintaining strictly the brand's Identity, I source for high quality assets and smart objects for the brands website...",
    dotColor: "bg-orange-500",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WorkExperience() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-4 py-20 overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-3xl md:text-4xl font-meduim tracking-[-0.015em] text-[#1D0055] mb-16"
      >
        My Work <span className="text-[#1D0055] font-extrabold">Experience</span>
      </motion.h2>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative flex flex-col md:flex-row justify-center items-start gap-16 w-full max-w-5xl"
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between space-y-20 flex-1 text-right">
          {experiences.map((exp, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-800">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-500">{exp.duration}</p>
            </motion.div>
          ))}
        </div>

        {/* CENTER LINE */}
        <div className="relative flex flex-col items-center min-h-[500px] md:min-h-[600px]">
          {/* Base dotted line */}
          <div className="absolute top-0 bottom-0 w-px border-l-2 border-dotted border-gray-300 z-0"></div>

          {/* Animated gradient line (now visible above dotted one) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-600 via-orange-500 to-orange-300 rounded-full shadow-[0_0_10px_#a855f7] z-10"
          />

          {/* Dots */}
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.3 }}
              viewport={{ once: true }}
              className={`w-5 h-5 rounded-full border-4 border-white shadow-md ${exp.dotColor} relative z-20 my-10`}
            />
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between space-y-20 flex-1 text-left">
          {experiences.map((exp, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-800">{exp.role}</h3>
              <p className="text-sm text-gray-500 leading-snug">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}