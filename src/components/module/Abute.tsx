'use client';
import React from 'react';

import Image from "next/image";
import CountUp from "react-countup";
import "aos/dist/aos.css";

// کامپوننت Abute با تایپ TypeScript
const Abute: React.FC = () => {
  return (
    <div id="abute" className="grid grid-cols-6 p-20 relative">
      <div
        className="col-span-3"
        data-aos-easing="ease-in-out"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="2000"
      >
        <Image
          width={550}
          height={550}
          alt="abuteImage"
          src="/images/beekeepers-on-the-apiary-EVY92SM.png"
        />
      </div>

      <div className="col-span-3 bg-gradient-to-t from-C to-B flex flex-col justify-center items-center p-10 h-fit w-full rounded-xl mt-10">
        <h4
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="200"
          className="text-C text-lg font-bold"
        >
          About Us
        </h4>
        <p className="text-C font-bold text-sm text-center">
          <span
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="200"
            className="block"
          >
            We are a dedicated team passionate about producing the finest
            natural
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="400"
            className="block"
          >
            honey and beekeeping products. With a deep commitment to quality and
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="600"
            className="block"
          >
            sustainability, we deliver organic honey that meets the highest
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="800"
            className="block"
          >
            standards. Our mission is to ensure customer satisfaction while
            preserving nature
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="1000"
            className="block"
          >
            and supporting the environment. If you re looking for pure, natural,
            and premium honey, you ve come to the right place.
          </span>
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1000"
          className="grid grid-cols-3 gap-4 mt-6 text-center"
        >
          <div className="bg-B w-24 h-24 p-2 rounded-full">
            <h5 className="text-2xl font-bold text-C">
              <CountUp start={0} end={20} duration={2} suffix="+" />
            </h5>
            <p className="text-sm text-C">Years of Experience</p>
          </div>
          <div className="bg-B w-24 h-24 p-2 rounded-full">
            <h5 className="text-2xl font-bold text-C">
              <CountUp start={0} end={500} duration={2.5} suffix="+" />
            </h5>
            <p className="text-sm text-C">Happy Customers</p>
          </div>
          <div className="bg-B w-24 h-24 p-2 rounded-full">
            <h5 className="text-2xl font-bold text-C">
              <CountUp start={0} end={100} duration={2} suffix="%" />
            </h5>
            <p className="text-sm text-C">Organic Honey</p>
          </div>
        </div>
      </div>

      <div
        data-aos-easing="ease-in-out"
        data-aos="zoom-in-up"
        data-aos-delay="200"
        data-aos-duration="3000"
        className="absolute bottom-0 right-5 animate-rotate"
      >
        <Image
          width={250}
          height={250}
          alt="abuteImage"
          src="/images/sunflower-01.png"
        />
      </div>
    </div>
  );
};

export default Abute;
