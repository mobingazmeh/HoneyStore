"use client";
import Image from "next/image";
import React from "react";

const FooterLogo: React.FC = () => (
  <div className="p-5 lg:p-10">
    <div>
      <Image src={"/images/logo3@2x.png"} width={150} height={150} alt="logo" />
    </div>
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="pt-3 lg:pt-7"
    >
      <span className="text-C py-5 ">
        Dumbo dika, Mirpur-12 R-9/A B-C Dhaka.
      </span>
    </div>
  </div>
);

export default FooterLogo;
