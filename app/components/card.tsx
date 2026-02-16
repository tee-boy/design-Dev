"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const portfolio = [
  { title: "Product Design for Mobile App", image: "/cardTwo.jpg" },
  { title: "UI/UX Design for Fintech App", image: "/cardTwo.jpg" },
  { title: "The Designership", image: "/cardTwo.jpg" },
];

export default function PortfolioSection() {
  return (
    <section className="flex justify-center py-20 bg-transparent px-4 sm:px-6 lg:px-12">
      <div
        className="
          flex flex-col lg:flex-row
          items-center lg:items-stretch
          justify-center lg:justify-between
          gap-8 w-full max-w-7xl
        "
      >
        {portfolio.map((item, i) => (
          <div
            key={i}
            className="
              relative w-full sm:w-104 lg:w-104 h-104
              rounded-[35px] overflow-hidden
              backdrop-blur-md bg-white/10 border border-white/30 shadow-lg
              flex flex-col justify-between gap-4
              transition-transform duration-500 hover:-translate-y-2
            "
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={416}
              height={307}
              className="w-full h-full object-cover opacity-95"
              priority
            />

            {/* Glass Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/10 to-black/40" />

            {/* Title */}
            <div className="absolute bottom-10 left-8 z-10">
              <h3 className="text-white text-lg sm:text-xl font-semibold tracking-[-0.015em] drop-shadow-md">
                {item.title}
              </h3>
            </div>

            {/* Arrow Button */}
            <button
              className="
                absolute top-5 right-5 text-white text-xl
                w-11.25 h-11.25 sm:w-12.5 sm:h-12.5
                rounded-full flex items-center justify-center
                bg-linear-to-r from-[#5E5E5E]/60 to-[#1A1A1A]/80
                backdrop-blur-lg hover:scale-105 transition-transform duration-300
                shadow-lg
              "
            >
              <FiArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}