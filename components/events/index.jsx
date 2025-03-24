"use client"

import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./style.scss";
import bg from '@/public/backgrounds/18.jpg';
import data_protection from '@/public/events/data-protection-law.jpg';
import Image from "next/image";
import { MousePointer2, SquareCheckBig } from "lucide-react";
import Footer from "../footer";
import target from "@/public/elements/target-2.png";
import vision from "@/public/elements/vision-1.png";
import about1 from "@/public/elements/1.jpeg";
import about2 from "@/public/elements/4.jpeg";
import boardroom from '@/public/elements/2.jpeg';
import ShortCourses from "../home/short courses";
import RegistrationForm from "./registration form";

gsap.registerPlugin(ScrollTrigger);

const Events = ({setEvent}) => {    
  const handleSelectEvent = (image, name) => {
    console.log("Setting event details...");
    setEvent({
      eventImage: image,
      eventName: name
    });
  };
  
  useEffect(async() => {
    if (typeof window !== "undefined") {
        const LocomotiveScrollModule = await import("locomotive-scroll");
        const LocomotiveScroll = LocomotiveScrollModule.default;

        const containerRef = document.querySelector('#scroll-wrap-container');
        const pinWrapRef = document.querySelector('#pin-wrap-ref');

        const scroller = new LocomotiveScroll({
          el: containerRef,
          smooth: true,
          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true
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

        let pinWrapWidth = pinWrapRef.offsetWidth;
        let horizontalScrollLength = pinWrapWidth - window.innerWidth;

        gsap.to(pinWrapRef, {
          scrollTrigger: {
            scroller: containerRef,
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            start: "top top",
            end: pinWrapWidth,
          },
          x: -horizontalScrollLength,
          ease: "none",
        });

        ScrollTrigger.addEventListener("refresh", () => scroller.update());
        ScrollTrigger.refresh();

        const cleanup = () => {
          if (scroller) {
            scroller.destroy();
          }
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };

        return cleanup;      

    }
  }, []);
  

  return (
    <div id='scroll-wrap-container' className="events-page relative">      
      <div>
      <section className="overflow-hidden">
          <Image src={bg} className='contact-hero-img absolute object-cover md:object-top right-0 md:w-[60%] h-[100vh] scale-x-[-1]' alt="Axxess" />
          <div className='hero-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full' />
          <div className='text-container text-white absolute z-[2] top-0 left-0 h-full w-full md:w-[45%] flex-center'>            
            <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.5" className='text-white text-7xl px-5 md:px-0 md:text-8xl text-center'>
              Events
            </h1>   
            <div data-scroll data-scroll-speed="2" data-scroll-delay="0.5" className='w-[5px] h-[20%]  md:h-[30%] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden'>
              <span className='header-line h-full w-full flex bg-white rounded-full' />
            </div> 
          </div>
        </section>

        <section id="sectionPin" className="hidden md:flex p-0 bg-[#75471c]">
          <div className="pin-wrap" id="pin-wrap-ref">
            <div id="vision-container" className="text-[#ebe1bc] pt-20 md:pt-[30vh] flex flex-col h-full w-[100%] min-w-[100vw] md:min-w-[55vw] relative px-5 md:px-20">
              <h1 className='left-text flex justify-center md:justify-normal gap-2 md:gap-5 items-center md:text-6xl md:pb-2'>
                Upcoming Events
              </h1>
              <p className='left-text'>At Axxess Corporate Consulting Limited, we are committed to fostering excellence in corporate governance through specialized training sessions, seminars, and networking events. Our events are designed to equip professionals, executives, and boards with the knowledge and skills necessary for effective governance and leadership.</p>                
            </div>

            <div className="hidden md:flex h-full w-full min-w-[100vw] md:min-w-[45vw] relative">
              <Image src={data_protection} className="object-contain h-full w-full" alt="Axxess" />              
            </div>

            <div className="bg-[#75471c] pt-[20vh] border border-[#ebe1bc40] md:border-none md:pt-0 text-[#ebe1bc] px-5 md:pl-20  flex flex-col h-full w-full min-w-[100vw] md:min-w-[65vw] relative">
              <div className='flex-[2] mt-10 md:pt-[10vh] px-5 md:px-10'>                  
                <div className="flex flex-col mt-5 gap-5">
                  <h2 className='text-4xl'>Masterclass in Data Protection Law</h2>
                  <h2 className='text-2xl'>Stay Compliant, Stay Secure!</h2>
                  <p>Join our Masterclass in Data Protection Law to master the Data Protection Act and your compliance role. Gain essential knowledge and practical tools to navigate data privacy regulations effectively.</p>
                  <h2 className='text-2xl hidden lg:flex'>What You Will Learn</h2>
                  <ul className="pl-5 flex-col gap-2 w-fit">
                    <li className="gap-3 hidden lg:flex">
                      <SquareCheckBig />
                      <span>Understanding Zambia’s Data Protection Act</span>  
                    </li>

                    <li className="gap-3 hidden lg:flex">
                      <SquareCheckBig />
                      <span>Key principles of data privacy and security</span>  
                    </li>

                    <li className="gap-3 hidden lg:flex">
                      <SquareCheckBig />
                      <span>Legal obligations for businesses and organizations</span>  
                    </li>

                    <li className="gap-3 hidden lg:flex">
                      <SquareCheckBig />
                      <span>How to develop a data protection compliance framework</span>  
                    </li>

                    <li className="gap-3 hidden lg:flex">
                      <SquareCheckBig />
                      <span>Best practices for handling personal data</span>  
                    </li>

                    <li className="gap-3 hidden lg:flex">
                      <SquareCheckBig />
                      <span>Real-world case studies and interactive Q&A</span>
                    </li>
                    <li className="flex justify-center mt-10 md:mt-5 2xl:mt-10">
                      <h2 className='text-2xl'>
                        <button
                        onClick={() => {handleSelectEvent(data_protection, 'Masterclass in Data Protection Law')}}
                        className="bg-[#75471c] text-white text-center px-5 py-2 border-2 rounded-full">
                          Register
                        </button>     
                      </h2>  
                                        
                    </li>
                  </ul>                
                </div>            
              </div>                        
            </div> 
          </div>
        </section>
        

        {/* Mobile version */}
        <section className="flex md:hidden p-0 bg-[#75471c]">
          <div>
            <div className="text-[#ebe1bc] pt-20 pb-10 md:pt-[30vh] flex flex-col h-full w-[100%] min-w-[100vw] relative px-5 md:px-20">
              <h1 className='left-text flex justify-center md:justify-normal gap-2 md:gap-5 items-center md:text-6xl md:pb-2'>
                Upcoming Events
              </h1>
              <p className='left-text'>At Axxess Corporate Consulting Limited, we are committed to fostering excellence in corporate governance through specialized training sessions, seminars, and networking events. Our events are designed to equip professionals, executives, and boards with the knowledge and skills necessary for effective governance and leadership.</p>                
            </div>            

            <div className="bg-[#75471c] border border-[#ebe1bc40] text-[#ebe1bc] px-5 flex flex-col h-full w-full min-w-[100vw] relative">
              <div className='flex-[2] mt-10'>                  
                <div className="flex flex-col mt-5 gap-5">
                  <h2 className='text-4xl'>Masterclass in Data Protection Law</h2>
                  <div className="h-full w-full relative">
                    <Image src={data_protection} className="object-contain h-full w-full" alt="Axxess" />              
                  </div>
                  <h2 className='text-2xl mt-5'>Stay Compliant, Stay Secure!</h2>
                  <p>Join our Masterclass in Data Protection Law to master the Data Protection Act and your compliance role. Gain essential knowledge and practical tools to navigate data privacy regulations effectively.</p>
                  <h2 className='text-2xl mt-5'>What You Will Learn</h2>
                  <ul className="flex flex-col gap-2 w-fit text-left">
                    <li className="flex gap-3">
                      <SquareCheckBig />
                      <span>Understanding Zambia’s Data Protection Act</span>  
                    </li>

                    <li className="flex gap-3">
                      <SquareCheckBig />
                      <span>Key principles of data privacy and security</span>  
                    </li>

                    <li className="flex gap-3">
                      <SquareCheckBig />
                      <span>Legal obligations for businesses and organizations</span>  
                    </li>

                    <li className="flex gap-3">
                      <SquareCheckBig />
                      <span>How to develop a data protection compliance framework</span>  
                    </li>

                    <li className="flex gap-3">
                      <SquareCheckBig />
                      <span>Best practices for handling personal data</span>  
                    </li>

                    <li className="flex gap-3">
                      <SquareCheckBig />
                      <span>Real-world case studies and interactive Q&A</span>
                    </li>
                    <li className="flex justify-center w-full my-10">
                      <h2 className='text-2xl'>
                        <button
                          onClick={() => {handleSelectEvent(data_protection, 'Masterclass in Data Protection Law')}}
                          className="bg-[#75471c] text-white text-center px-5 py-2 border-2 rounded-full">
                            Register
                          </button>
                      </h2>                    
                    </li>
                  </ul>                
                </div>            
              </div>                        
            </div> 
          </div>
        </section>          
        <ShortCourses />     
        <Footer />    
        
      </div>
    </div>
  );
};

export default Events;
