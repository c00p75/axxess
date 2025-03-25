'use client'

import './style.scss';
import logo_1 from "@/public/logos/Axxess-Corporate-Consulting-Limited-Logos-8.png";
import Image from "next/image";
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [displayLoader, setDisplayLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    setTimeout(() => {
      setDisplayLoader(false);
    }, 3000);

    // You can return a cleanup function if needed, but in this case, we don't need to do anything
    return () => {};
  }, []);

  return (
    displayLoader && (
      <section id='loading-screen' className={`z-[999] fixed h-screen w-screen top-0 left-0 flex items-center justify-center flex-col gap-3 ${fadeOut && 'opacity-0'}`}>
        <Image
          src={logo_1}
          alt="Axxess"
          quality={100}
          className="h-auto w-[90%] md:w-[45%] image-shadow"
        />
      </section>
    )
  );
};

export default LoadingScreen;
