"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/free-mode";

const testimonials = [
  {
    name: "Joyesh Patil",
    title: "CEO, Lirante",
    rating: "5.0",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    name: "Sarah Michael",
    title: "Product Manager, NovaTech",
    rating: "5.0",
    text: "Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    name: "Adebayo Tunde",
    title: "Founder, SmartHub",
    rating: "5.0",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    name: "Faith Johnson",
    title: "UI Designer, Kreate Studio",
    rating: "5.0",
    text: "Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 px-10 bg-gradient-to-b from-[#1A004A] to-[#2A0066] text-white overflow-hidden rounded-[40px]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/backgroundtwo.jpg')] bg-cover bg-center opacity-20" />

      {/* Header */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-[28px] md:text-[48px] font-bold leading-tight tracking-[-0.02em]">
          Testimonials That <br />
          Speak to <span className="text-[#FD853A]">My Results</span>
        </h1>
        <p className="text-white/70 mt-4 text-[15px] max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed congue
          interdum ligula a dignissim.
        </p>
      </div>

      {/* Swiper Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 px-6"
      >
        <Swiper
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentum: true }}
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          className="!overflow-visible"
          breakpoints={{
            320: { slidesPerView: 1.15, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!w-[400px]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className="bg-white/15 border border-white/20 rounded-[20px] p-6 flex flex-col justify-between shadow-lg backdrop-blur-md"
              >
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{t.name}</h3>
                    <p className="text-sm text-white/70">{t.title}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <span className="text-[#FD853A] font-extrabold text-lg mr-1">★★★★★</span>
                  <span className="text-white font-medium">{t.rating}</span>
                </div>

                {/* Text */}
                <p className="text-sm text-white/80 leading-relaxed">{t.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Dots (static indicators) */}
      <div className="relative z-10 flex justify-center mt-8 gap-2">
        <span className="w-2 h-2 bg-white/70 rounded-full" />
        <span className="w-2 h-2 bg-white/30 rounded-full" />
        <span className="w-2 h-2 bg-white/30 rounded-full" />
        <span className="w-2 h-2 bg-white/30 rounded-full" />
      </div>
    </section>
  );
}