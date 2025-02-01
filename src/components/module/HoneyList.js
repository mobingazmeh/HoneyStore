export const honeyData = [
  {
    id: 1,
    name: "Forest Honey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel consectetur risus.",
    imageUrl: "/images/work1.png",
  },
  {
    id: 2,
    name: "Creamed Honey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel consectetur risus.",
    imageUrl: "/images/work2.png",
  },
  {
    id: 3,
    name: "Meadow Honey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel consectetur risus.",
    imageUrl: "/images/work3.png",
  },
];

import Image from "next/image";
import "aos/dist/aos.css";

const HoneyList = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col justify-center items-center py-8 px-20">
        <h4
          data-aos-easing="ease-in-out"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="text-C"
        >
          DO WHAT I LOVE
        </h4>
        <p
          data-aos-easing="ease-in-out"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="2000"
          className="text-black text-3xl font-bold text-center mt-5"
        >
          You can check out our work. Are you ready for a<br /> better, more
          productive Progress?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-40">
        {honeyData.map((honey) => (
          <div
            key={honey.id}
            className="card flex flex-col justify-center items-center p-4 hover:bg-white  hover:shadow-lg duration-500 rounded-lg w-fit h-fit"
          >
            <Image
              src={honey.imageUrl}
              alt={honey.name}
              width={800}
              height={800}
              data-aos-easing="ease-in-out"
              data-aos="flip-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="w-28 h-28 object-cover rounded-lg"
            />
            <h3
              data-aos-easing="ease-in-out"
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-duration="3000"
              className="text-lg text-black font-bold mt-4"
            >
              {honey.name}
            </h3>
            <p
              data-aos-easing="ease-in-out"
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="3000"
              className="mt-2 text-gray-500 text-center text-sm"
            >
              {honey.description}
            </p>
          </div>
        ))}
      </div>
      <div
        data-aos-easing="ease-in-out"
        data-aos="zoom-in-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="flex justify-center items-center mt-10"
      >
        <button className="text-sm font-bold  rounded-md bg-C hover:bg-B text-white hover:text-C w-20 lg:w-32 transition-all duration-500 h-12">
          VIEW ALL HONEY
        </button>
      </div>
    </div>
  );
};

export default HoneyList;
