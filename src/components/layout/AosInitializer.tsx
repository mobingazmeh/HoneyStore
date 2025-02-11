// components/AosInitializer.tsx

"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AosInitializer() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });

    return () => {
      Aos.refresh();
    };
  }, []);

  return null;
}
