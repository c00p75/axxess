"use client"

import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./style.scss";
import heroBg1 from "@/public/backgrounds/handshake.jpg";
import heroBg2 from "@/public/backgrounds/9.jpg";
import heroBg3 from "@/public/backgrounds/3.jpeg";
import Image from "next/image";
import Footer from "../footer";
import ShortCourses from "./short courses";
import Testimonials from "./testimonials";
import Solution from "./solution";
import OurServices from "./our services";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {

  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(async() => {
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
    
    await import("@/utils/services_carousel");
    const LocomotiveScrollModule = await import("locomotive-scroll");
    const LocomotiveScroll = LocomotiveScrollModule.default;      

    const divRef1 = document.querySelector('#divRef1');
    const divRef2 = document.querySelector('#divRef2');
    const divRef3 = document.querySelector('#divRef3');
    const divRef4 = document.querySelector('#divRef4');
    const divRef5 = document.querySelector('#divRef5');
    const divRef6 = document.querySelector('#divRef6');

    const containerRef = document.querySelector('#scroll-wrap-container');
    const pinWrapRef = document.querySelector('#pin-wrap-ref');

    console.log(containerRef, pinWrapRef)

    const scroller = new LocomotiveScroll({
      el: containerRef,
      smooth: true,
      smartphone: {
        smooth: true // Enable smooth scrolling on mobile
      },
      tablet: {
        smooth: true // Enable smooth scrolling on tablets
      }
    });

    scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(containerRef, {
      scrollTop(value) {
        return arguments.length
          ? scroller.scrollTo(value, 0, 0)
          : scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef.style.transform ? "transform" : "fixed",
    });

    let screen = gsap.matchMedia();

    screen.add("(min-width: 768px)", () => {
      gsap.to(pinWrapRef, {
        scrollTrigger: {
          scroller: containerRef,
          trigger: '#sectionPin',
          pin: true,
          scrub: true,
          start: 'top top',
          onUpdate: (self) => {          
            const scrollPercent = self.progress * 100; // Get scroll percentage
            console.log(scrollPercent)
            if (scrollPercent < 20) {
              divRef1.click();          
            } else if (scrollPercent < 40) {
              divRef2.click();          
            } else if (scrollPercent < 60) {
              divRef3.click();          
            } else if (scrollPercent < 80) {
              divRef4.click();          
            } else if (scrollPercent < 100) {
              divRef5.click();          
          }},
          onLeave: () => {console.log('left');  divRef6.click();},      
        },
      });
    })

    ScrollTrigger.addEventListener("refresh", () => scroller.update());
    ScrollTrigger.refresh();

    return () => {
      clearInterval(autoScroll);
      scroller.destroy();
    };
  }, []);

  const slideContent = [
      {
        tagline: `Trusted Advisory`,
        text: `Your Success, Our Expertise`,
        link: "/",
        link_lable: "more",
        image: heroBg1.src,
      },
      {
        tagline: `Corporate Excellence`,
        text: `Effective solutions`,
        link: "/",
        link_lable: "more",
        image: heroBg2.src,
      },
      {
        tagline: `Strategic Success`,
        text: `Driving Strategic Success`,
        link: "/",
        link_lable: "more",
        image: heroBg3.src,
      },
    ];

  return (
    <div id="scroll-wrap-container" className="home-hero-section relative">      
      <div>
        <section className="home-sections relative p-0">
          <Image src={heroBg2} fill className="blur-sm object-cover" alt="axxess"/>
          <div className="mask">
            <div className="wrapper">
              {/* Left Column */}
              <div className="left column relative" ref={leftColumnRef}>            
                {slideContent.map((slide, index) => (
                  <div
                    key={index}
                    className="content text-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >                
                    <div className="home-hero-text-overlay absolute h-screen w-screen blur-3xl md:h-[50%] md:w-[80%] z-[1]" />
                    <h1 className="text-5xl md:text-7xl text-white z-[2] ">{slide.tagline}</h1>
                    <h6 className="mb-7 text-2xl z-[2] text-white mt-3">{slide.text}</h6>
                    <a href='/services' className="z-[2] font-semibold">Learn More</a>
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

        <Solution />

        <section id="sectionPin" className="our-services">          
          <div className="pin-wrap carousel bg-gradient-to-bl md:py-24" id="pin-wrap-ref">
            <OurServices />
          </div>       
        </section>

        <ShortCourses />
        <Testimonials />
        
        <Footer />
      </div>
       
    </div>
  );
};

export default HomePage;
