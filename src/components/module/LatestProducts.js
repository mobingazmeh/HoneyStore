import CardSlider from "./Slider/CardSlider";

const LatestProducts = () => {
  return (
    <div className="px-28">
      <div id="shop" className="flex flex-col justify-center items-center py-5">
        <h4
          data-aos-easing="ease-in-out"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="text-C font-bold my-5"
        >
          NEW PRODUCTS
        </h4>
        <p
          data-aos-easing="ease-in-out"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="2000"
          className=" text-2xl font-bold text-black text-center"
        >
          You can check out our work. Are you ready for a<br /> better, more
          productive Progress?
        </p>
      </div>
      <div className=" bg-gradient-to-t from-C to-B p-5 rounded-lg">
        <CardSlider />
      </div>
    </div>
  );
};

export default LatestProducts;
