"use client";

import { useEffect, useRef, useState } from "react";
import "./style.scss";
import Link from "next/link";
import bg1 from "@/public/backgrounds/handshake.jpg";
import bg2 from "@/public/backgrounds/9.jpg";
import bg3 from "@/public/backgrounds/3.png";
import Image from "next/image";

const HeroSection = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

    if (!leftColumn || !rightColumn) return;

    const divL = leftColumn.getElementsByTagName("div");
    const divR = rightColumn.getElementsByTagName("div");

    const next = () => {
      leftColumn.classList.add("next");
      rightColumn.classList.add("next");

      setTimeout(() => {
        divL[0].parentNode.appendChild(divL[0]);
        divR[2].parentNode.insertBefore(divR[2], divR[0]);
        leftColumn.classList.remove("next");
        rightColumn.classList.remove("next");
      }, 600);
    };

    const prev = () => {
      leftColumn.classList.add("prev");
      rightColumn.classList.add("prev");

      setTimeout(() => {
        divR[0].parentNode.appendChild(divR[0]);
        divL[2].parentNode.insertBefore(divL[2], divL[0]);
        leftColumn.classList.remove("prev");
        rightColumn.classList.remove("prev");
      }, 600);
    };

    const autoScroll = setInterval(next, 4000);

    return () => {
      clearInterval(autoScroll);
    };
  }, []);

  const slideContent = [
    {
      tagline: `Trusted Advisory`,
      text: `Your Success, Our Expertise`,
      link: "/",
      link_lable: "more",
      image: bg1.src,
    },
    {
      tagline: `Corporate Excellence`,
      text: `Effective solutions`,
      link: "/",
      link_lable: "more",
      image: bg2.src,
    },
    {
      tagline: `Strategic Success`,
      text: `Driving Strategic Success`,
      link: "/",
      link_lable: "more",
      image: bg3.src,
    },
  ];

  return (
    <section className="home-sections relative p-0">
      <Image src={bg2} fill className="blur-sm object-cover" alt="axxess"/>
      <div className="mask">
        <div className="wrapper">
          {/* Left Column */}
          <div className="left column" ref={leftColumnRef}>
            {slideContent.map((slide, index) => (
              <div
                key={index}
                className="content text-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute h-screen w-screen blur-3xl bg-black/50 md:hidden z-[1]" />
                <h1 className="text-5xl md:text-7xl text-white z-[2]">{slide.tagline}</h1>
                <p className="mb-7 z-[2]">{slide.text}</p>
                <Link href={slide.link} className="z-[2]">{slide.link_lable}</Link>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="right column" ref={rightColumnRef}>
            {slideContent
              .slice()
              .reverse()
              .map((slide, index) => (
                <div  
                  key={index}
                  className="pic"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
