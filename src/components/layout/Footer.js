"use client";
import Image from "next/image";
import FooterContact from "../models/FooterContact";
import FooterServices from "../models/FooterServices";
import FooterLogo from "../models/FooterLogo";
import FooterAbout from "../models/FooterAbout";
import LottieHive from "@/lottie/LottieHive";

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-r from-C to-B  h-[600px] w-full ">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 py-10 px-40 z-20">
        <FooterLogo />
        <FooterServices />
        <FooterAbout />
        <FooterContact />
      </div>
     <div className=" absolute bottom-0 right-0 flex justify-end ">
        {/*<Image
          id="footer"
          width={500}
          height={500}
          alt="imagefooter"
          src="/images/honeycomb-with-pollen-LVZ5X37-1.png"
        /> */}
         <LottieHive />
      </div> 
      <div className=" absolute bottom-0 left-0 flex justify-end">
       {/* <Image width={500} height={500} alt="imagefooter" src='/images/bg-footer2.png'/>  */}
       
        </div> 
      
    </div>
  );
};

export default Footer;
