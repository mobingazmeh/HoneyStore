'use client'

import BeeModel from "@/3DModels/BeeModel";
import HoneyList from "../module/HoneyList";
import HomeSlider from "../module/Slider/HomeSlider";
import DeliveryService from "../module/DeliveryService";
import LatestProducts from "../module/LatestProducts";
import GallerySection from "../module/GallerySection";
import LottieBees from "@/lottie/LottieBees";
import Abute from "../module/Abute";

export default function HomePage() {
  return (
    <div className="bg-A w-full h-full">
      <div className=" relative  z-10">
        <BeeModel />
      </div>
      <HomeSlider />
      <Abute />
      <LottieBees />
      <HoneyList />
      <DeliveryService />
      <LatestProducts />
      <GallerySection />
    </div>
  );
}


