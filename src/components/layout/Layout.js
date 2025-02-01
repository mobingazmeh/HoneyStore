"use client";

import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Aos from "aos";

function Layout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 3000, // مدت زمان انیمیشن
    });
  }, []);

  return (
    <div className="mx-auto h-full flex flex-col justify-between max-w-[1400px]">
      <Header />
      <div className="h-fit w-full mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
