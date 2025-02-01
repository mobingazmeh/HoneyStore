import Image from "next/image";
import "aos/dist/aos.css";

const DeliveryService = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/R.jpg')", // مسیر تصویر بک‌گراند
        backgroundBlendMode: "overlay", // ترکیب گریدینت و تصویر
      }}
    >
      {/* محتوا */}
      <div
        id="services"
        className="bg-gradient-to-r from-C to-B flex p-5 relative h-full"
      >
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
        <div className="p-10 w-full z-10">
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
            className="text-xl "
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
