"use client";
import Image from "next/image";
import "aos/dist/aos.css";

const DeliveryService: React.FC = () => {
  return (
    <div className="relative h-[600px] w-full">
      {/* لایه‌ی تصویر پس‌زمینه */}
    
      

      {/* لایه‌ی گرادینت */}
      <div id="services" className="absolute inset-0 bg-gradient-to-r from-C to-B " />

      {/* محتوا */}
      <div className="relative flex p-5 h-full z-10">
        <div className="absolute -bottom-10">
          <Image
            width={500}
            height={500}
            alt="banner"
            src="/images/honey-img04.png"
            data-aos-easing="ease-in-out"
            data-aos="zoom-in-up"
            data-aos-delay="200"
            data-aos-duration="2000"
          />
        </div>
        <div className="p-10 w-full">
          <h4
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-xl"
          >
            Etiam nec risus ac sapien feugiat efficitur.
          </h4>
          <h2
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
            className="text-8xl font-bold my-5"
          >
            Delivery <span className="text-B">Service</span>
          </h2>
          <h4
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="200"
            className="text-xl"
          >
            FREE CALL TO OUR CALL-CENTER
          </h4>
          <span
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="200"
            className="text-B text-5xl font-bold"
          >
            +555 666 999 00
          </span>
        </div>
        <div className="mr-10">
          <Image
            width={800}
            height={800}
            alt="banner"
            src="/images/banner-2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryService;
