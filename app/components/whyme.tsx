"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function WhyChooseMe() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      // Animate the number count up to 450
      let start = 0;
      const end = 450;
      const duration = 2500;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 5;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, stepTime);
    }
  }, [inView, controls]);

  return (
    <section id="about" className="flex justify-center py-20 bg-[#F4F5F7] rounded-[20px] shadow-md">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 w-[100%] md:w-[1100px] max-w-6xl"
      >
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-shrink-0 flex justify-center items-center mb-8 md:mb-0"
        >
          <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#F2E9FF] rounded-[20px] w-[300px] h-[380px] p-0 md:p-0 shadow-inner overflow-hidden relative"
        >
          <Image
            src="/jerrysection.jpg"
            alt="Jeremiah Portrait"
            fill
            className="object-cover rounded-[20px]"
          />
        </motion.div>

        </motion.div>

        {/* TEXT part */}
        <div className="flex-1 md:ml-12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#1A004A] font-100 text-lg font-200 mb-3"
          >
            Why Choose Me?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-600 font-100 mb-8 max-w-md leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-row space-x-50 mb-8"
          >
            <div className="text-center md:text-left">
              <h4 className="text-3xl font-extrabold text-[#1A004A]">
                {count}+
              </h4>
              <p className="text-gray-500 text-sm font-medium">
                Projects Completed
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-3xl font-extrabold text-[#1A004A]">{count}+</h4>
              <p className="text-gray-500 text-sm font-medium">
                Project Completed
              </p>
            </div>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: "#1A004A",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="border cursor-pointer border-[#1A004A] text-[#1A004A] font-medium px-8 py-3 rounded-xl transition-ease-out"
          >
            Hire me
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
