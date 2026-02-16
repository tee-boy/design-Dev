"use client";
import PortfolioCard from "../components/card";

export default function PortfolioSection() {
  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-12 bg-white"
    >
      <div className="w-full max-w-7xl">
        {/* === Heading === */}
        <h1 className="text-center sm:text-left font-semibold text-[#344054] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-12">
          Let’s have a look at <br />
          my{" "}
          <span className="text-[#FD853A]">Portfolio</span>
        </h1>

        {/* === Responsive Grid for Cards === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          <PortfolioCard />
        </div>
      </div>
    </section>
  );
}