import Image from "next/image";
import React from "react";
import "animate.css";
import "aos/dist/aos.css";

const GallerySection = () => {
  // لیست تصاویر گالری
  const images = [
    "/images/our-gallery-8.jpg",
    "/images/our-gallery-7.jpg",
    "/images/our-gallery-5.jpg",
    "/images/our-gallery-2.jpg",
  ];

  return (
    <div id="GALLERY" className="gallery-section py-28">
      <div  className="grid grid-cols-7 gap-4 items-center">
        <div className="bg-gradient-to-r col-span-2 from-C to-B p-20 h-[450px]">
          <h4
            data-aos-easing="ease-in-out"
            data-aos="zoom-in-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="text-B font-bold"
          >
            LATEST GALLERY
          </h4>
          <p
            data-aos-easing="ease-in-out"
            data-aos="zoom-in-right"
            data-aos-delay="200"
            data-aos-duration="2000"
            className="text-3xl font-bold"
          >
            You can check out our work. Are you ready for a better, more
            productive Gallery.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-2 gap-y-2 col-span-5">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transform ${
                index % 2 === 0 ? "translate-y-[30px]" : "translate-y-[-30px]"
              } transition-transform duration-500 hover:scale-110 hover:z-10`}
            >
              <Image
                width={100}
                height={100}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg cursor-pointer shadow-md    hover:shadow-lg"
                data-aos-easing="ease-in-out"
                data-aos="flip-up"
                data-aos-delay="300"
                data-aos-duration="3000"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
