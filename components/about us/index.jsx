"use client"

import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./style.scss";
import bg from '@/public/backgrounds/7.jpeg';
import boardGovernance from '@/public/backgrounds/13.jpeg';
import Image from "next/image";
import { MousePointer2 } from "lucide-react";
import Footer from "../footer";
import target from "@/public/elements/target-2.png";
import vision from "@/public/elements/vision-1.png";
import about1 from "@/public/elements/1.jpeg";
import about2 from "@/public/elements/4.jpeg";
import boardroom from '@/public/elements/2.jpeg';
import Team from "./team";
import WhyUs from "./why us";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {    
  useEffect(async() => {
    if (typeof window !== "undefined") {
        const LocomotiveScrollModule = await import("locomotive-scroll");
        const LocomotiveScroll = LocomotiveScrollModule.default;

        const containerRef = document.querySelector('#scroll-wrap-container');
        const pinWrapRef = document.querySelector('#pin-wrap-ref');

        const scroller = new LocomotiveScroll({
          el: containerRef,
          smooth: true,
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
    <div id='scroll-wrap-container' className="about-us-page relative">      
      <div className="container" >
        <section className="overflow-hidden">
        <Image src={bg} className='absolute object-cover object-left md:object-top left-0 w-[80%] h-[100vh] scale-x-[-1]' alt="Axxess" />
        <div className='hero-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full' />
          <div className='text-container text-white absolute z-[2] top-0 right-0 h-full w-full md:w-[40%] flex-center'>            
            <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.5" className='text-white text-7xl px-5 md:px-0 md:text-8xl'>
              About Us
            </h1>   
            <div data-scroll data-scroll-speed="2" data-scroll-delay="0.5" className='w-[5px] h-2/5 md:h-[30%] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden'>
              <span className='header-line h-full w-full flex bg-white rounded-full' />
            </div> 
          </div>
        </section>

        <div className='flex flex-col-reverse md:flex-row gap-10'>
          <div className='w-full h-auto md:w-[45%] md:h-[40rem]'>
            <Image src={boardroom} className="object-cover h-full" alt="Axxess" />
          </div>
  
          <div className='flex-[2] mt-10 md:mt-32 px-5 md:px-10'>
            <h2 className='text-[#171717] text-base'>About Axxess Corporate Consulting Limited</h2>
            <h1 className='mt-5 md:mt-0'>Who We Are</h1>
            <p>Axxess Corporate Consulting Limited is a premier consultancy firm specializing in Corporate Governance, Board Support Services, and Company Secretarial solutions. Established in October 2015, our firm is driven by a team of highly experienced consultants with a deep passion for governance excellence. Our mission is to strengthen corporate leadership by providing organizations with the knowledge, structures, and strategic guidance needed to thrive in today’s dynamic business landscape.</p>
          </div>
        </div>

        <section id="sectionPin" className="p-0">
          <div className="pin-wrap" id="pin-wrap-ref">
            <div className="bg-[#75471c] text-[#ebe1bc] pt-[20vh] md:pt-[22vh] flex flex-col h-full w-[100%] min-w-[100vw] md:min-w-[60vw] relative px-5 md:px-20">
              <h1 className='left-text flex justify-center md:justify-normal gap-2 md:gap-5 items-center md:text-6xl md:pb-2'>
                Our Vision
                <Image
                  src={vision}
                  alt="axxess"
                  quality={100}
                  className="left-icon opacity-1 w-auto h-10 md:h-14 object-cover"
                />
              </h1>
              <p className='left-text'>To be the leading corporate governance consultancy in Zambia, setting the benchmark for board effectiveness, regulatory compliance, and ethical leadership.</p>
    
              <h1 className='left-text flex justify-center md:justify-normal gap-2 md:gap-5 items-center mt-10 md:mt-14 md:text-6xl md:pb-2'>
                Our Mission
                <Image
                  src={target}
                  alt="axxess"
                  quality={100}
                  className="left-icon opacity-1 w-auto h-8 md:h-12 object-cover"
                />
              </h1>
              <p className='left-text'>To enhance corporate governance practices by providing expert guidance, training, and board support services that empower organizations to operate with transparency, accountability, and efficiency.</p>         
            </div>

            <div className="hidden md:flex h-full w-full md:min-w-[40vw] relative scale-x-[-1]">
              <Image src={boardGovernance} className="object-cover h-full w-full" alt="Axxess" />              
            </div>

            <div className="bg-[#75471c] pt-[20vh] border border-[#ebe1bc40] md:border-none md:pt-0 text-[#ebe1bc] px-5 md:px-20 flex flex-col h-full w-full min-w-[100vw] md:min-w-[60vw] relative">
              <h1 className='right-text text-center md:text-left mt-[-1px] md:mt-[20%] md:text-6xl'>Our Core Values</h1>
              <div className="ml-5 mt-5 flex flex-col gap-5 text-left">
                <div className="flex gap-5">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
                  <p><span className='font-bold'>Integrity</span> – We uphold the highest ethical standards in all our engagements.</p>
                </div>
                <div className="flex gap-5">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
                  <p><span className='font-bold'>Excellence</span> – We are committed to delivering top-quality corporate governance solutions.</p>
                </div>
                <div className="flex gap-5">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
                  <p><span className='font-bold'>Transparency</span> – We believe in open communication and honest business practices.</p>
                </div>
                <div className="gap-5 hidden md:flex">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
                  <p><span className='font-bold'>Collaboration</span> – We build strong relationships with our clients and industry partners.</p>
                </div>
                <div className="gap-5 hidden md:flex">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
                  <p><span className='font-bold'>Innovation</span> – We continuously seek new ways to improve corporate governance standards.</p>
                </div>
              </div>            
            </div> 

            <div className="md:hidden bg-[#75471c] pt-[20vh] text-[#ebe1bc] px-5 md:px-20 flex flex-col h-full w-full min-w-[100vw] md:min-w-[60vw] relative">
              <h1 className='opacity-0 right-text text-center md:text-left mt-[-1px] md:mt-[20%] md:text-6xl'>Our Core Values</h1>
              <div className="ml-5 mt-5 flex flex-col gap-5 text-left">                
                <div className="flex gap-5">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
                  <p><span className='font-bold'>Collaboration</span> – We build strong relationships with our clients and industry partners.</p>
                </div>
                <div className="flex gap-5">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
                  <p><span className='font-bold'>Innovation</span> – We continuously seek new ways to improve corporate governance standards.</p>
                </div>
              </div>            
            </div>                  
          </div>
        </section>

        <Team />
        <WhyUs />        
        <Footer />    
        
      </div>
       
    </div>
  );
};

export default AboutUs;
