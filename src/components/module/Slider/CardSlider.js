import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "aos/dist/aos.css";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules"; // اضافه کردن Autoplay
import { Icon } from "@iconify/react";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/images/product-2.png",
    name: "FOREST HONEY",
    price: 169,
    oldPrice: 200,
    weight: "1KG",
  },
  {
    id: 2,
    image: "/images/product-1.png",
    name: "MOUNTAIN HONEY",
    price: 150,
    oldPrice: 180,
    weight: "500G",
  },
  {
    id: 3,
    image: "/images/product-3.png",
    name: "WILD HONEY",
    price: 190,
    oldPrice: 220,
    weight: "750G",
  },
  {
    id: 4,
    image: "/images/product-4.png",
    name: "PURE HONEY",
    price: 200,
    oldPrice: 250,
    weight: "1KG",
  },
  {
    id: 42,
    image: "/images/product-4.png",
    name: "PURE HONEY",
    price: 200,
    oldPrice: 250,
    weight: "1KG",
  },
  {
    id: 43,
    image: "/images/product-4.png",
    name: "PURE HONEY",
    price: 200,
    oldPrice: 250,
    weight: "1KG",
  },
];

export default function CardSlider() {
  return (
    <div className="relative">
      <Swiper
        grabCursor={true}
        slidesPerView={4}
        spaceBetween={0}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // افزایش زمان برای حرکت آرام‌تر
          disableOnInteraction: false,
        }}
        loop={true} // فعال کردن حرکت حلقه‌ای
        speed={1000} // تنظیم سرعت حرکت (یک ثانیه)
        modules={[Navigation, Autoplay]} // اضافه کردن Autoplay به ماژول‌ها
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              data-aos-easing="ease-in-out"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="2000"
              className="p-5 border rounded-lg w-[270px] h-[373.4px] bg-white"
            >
              <div className="overflow-hidden relative">
                <Image
                  width={500}
                  height={500}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[70%] cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <h2 className="font-bold mt-3 text-black text-center">
                {product.name}
              </h2>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg text-C font-semibold">
                  ${product.price}{" "}
                  <b className="line-through text-sm text-red-500">
                    ${product.oldPrice}
                  </b>
                </span>
                <span className="text-gray-500">Weight: {product.weight}</span>
              </div>
              <div className="w-full flex items-center cursor-pointer border-2 border-C font-bold justify-center gap-2 bg-white text-C px-4 py-2 hover:bg-C hover:text-white transition-all duration-300">
                <Icon
                  icon="fluent-emoji-high-contrast:shopping-cart"
                  width="32"
                  height="32"
                />
                <h4> ADD TO CART</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
