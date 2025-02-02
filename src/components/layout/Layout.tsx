"use client";

import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Aos from "aos";

interface LayoutProps {
  children: ReactNode; 
}

function Layout({ children }: LayoutProps) {
  useEffect(() => {
    Aos.init({
      duration: 3000, 
    });

    return () => {
      Aos.refresh();
    };
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
