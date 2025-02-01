"use client";
import React from "react";
import "animate.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay } from "swiper/modules";

const slides = [
  {
    id: 1,
    title: "What s hot",
    subtitle: "Made With Love",
    highlight: "Honney",
    description:
      "Morbi sit amet dictum elit, sit amet tincidunt lectus. Curabitur dui erat, cursus vitae facilisis id, hendrerit quis.",
    buttonText: "BUY NO HONEY",
  },
  {
    id: 2,
    title: "What s hot",
    subtitle: "Made With Love",
    highlight: "Honney",
    description:
      "Morbi sit amet dictum elit, sit amet tincidunt lectus. Curabitur dui erat, cursus vitae facilisis id, hendrerit quis.",
    buttonText: "BUY NO HONEY",
  },
  {
    id: 3,
    title: "What s hot",
    subtitle: "Made With Love",
    highlight: "Honney",
    description:
      "Morbi sit amet dictum elit, sit amet tincidunt lectus. Curabitur dui erat, cursus vitae facilisis id, hendrerit quis.",
    buttonText: "BUY NO HONEY",
  },
];

export default function HomeSlider() {
  return (
    <div id="1" className="h-[500px] md:h-screen relative z-20">
      {/* ویدیو ثابت به عنوان پس‌زمینه */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/Untitled design(6).mp4" type="video/mp4" />
      </video>

      {/* اسلایدر برای متون */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        centeredSlides={false}
        effect={"fade"}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper h-full w-full z-40 relative"
        grabCursor={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div className="absolute bottom-3 md:top-60 right-2 md:right-64 backdrop-blur-sm z-10">
              <h2 className="text-B lg:text-4xl text-center font-bold animate__animated animate__delay-2s animate__fadeInUp  animate__slow	2s">
                {slide.title}
              </h2>
              <h2 className="text-gray-950 lg:text-6xl py-1 lg:py-5 text-center font-bold animate__animated animate__delay-2s animate__fadeInUp  animate__slow	2s">
                {slide.subtitle} <span className="text-C font-bold">{slide.highlight}</span>
              </h2>
              <p className="font-bold text-black animate__animated animate__fadeInUp animate__delay-3s animate__slow	2s">
                {slide.description}
              </p>
              <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2">
                <button className="text-sm font-bold rounded-md bg-C hover:bg-B text-B hover:text-C w-20 lg:w-32 transition duration-300 h-12 animate__animated animate__fadeInUp animate__delay-3s animate__slow 	2s">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
