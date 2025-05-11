"use client";
import { useEffect, useState } from "react";

export default function NavbarSection() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`z-50 fixed w-full h-16 flex items-center justify-center lg:justify-normal lg:px-16 ${
        isScrolled && "backdrop-blur-sm bg-black/70 duration-300"
      }`}
    >
      <p className="font-bold text-2xl text-center">
        VhishBERT-ID
      </p>
    </section>
  );
}
