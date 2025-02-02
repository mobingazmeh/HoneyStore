"use client";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import "animate.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState(""); // لینک پیش‌فرض فعال
  const [isScrolled, setIsScrolled] = useState(false); // وضعیت اسکرول

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // وقتی که صفحه اسکرول شد، تغییر می‌کند
    };

    window.addEventListener("scroll", handleScroll);

    // برای پاک کردن رویداد در هنگام ترک کامپوننت
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 px-40 flex justify-between items-center w-full h-24  transition-all duration-500 z-50 ${
        isScrolled
          ? "backdrop-blur-sm bg-opacity-0 bg-gradient-to-r from-C to-B animate__animated animate__zoomInUp"
          : "backdrop-blur-sm  bg-[rgba(0,0,0,0.1)]  animate__fadeInDown animate__animated animate__slow	2s"
      }`}
    >
      
      <div>
        <Image
          src={"/images/logo3@2x.png"}
          width={150}
          height={150}
          alt="logo"
        />
      </div>

      <div className="flex-grow flex justify-center items-center">
        {[
          { text: "HOME", link: "/", activeKey: "HOME", to: "1" },
          { text: "ABOUT US", link: "/", activeKey: "ABOUT US", to: "abute" },
          {
            text: "SERVICES",
            link: "/",
            activeKey: "SERVICES",
            to: "services",
          },
          { text: "SHOP", link: "/", activeKey: "SHOP", to: "shop" },
          { text: "GALLERY", link: "/", activeKey: "GALLERY", to: "GALLERY" },
          { text: "CONTACT", link: "/", activeKey: "CONTACT", to: "footer" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.link}
            activeClass="active"
            to={item.to}
            spy={true}
            smooth="easeInOutCubic"
            offset={-70}
            duration={1200}
          >
            <div
              onClick={() => handleLinkClick(item.activeKey)}
              className={`flex items-center mx-2 ${
                activeLink === item.activeKey ? "text-C " : "text-C"
              } duration-500  hover:text-B transition-all cursor-pointer p-2`}
            >
              <h2 className="font-bold text-sm p-2">{item.text}</h2>
              <Icon className="w-3 h-5 pt-1" icon="mingcute:down-fill" />
            </div>
          </Link>
        ))}
      </div>

      <div className="flex bg-C text-B hover:text-C transition-all duration-500 hover:bg-B w-fit p-2 mx-5 cursor-pointer rounded-xl  h-fit">
        <Icon icon="line-md:align-justify" width="24" height="24" />
      </div>
    </div>
  );
};

export default Header;
