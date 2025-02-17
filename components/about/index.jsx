'use client'

import React, { useEffect, useRef } from 'react';
import HeroSection from './hero section';
import nair from '@/public/elements/nair2.jpeg';
import boardroom from '@/public/elements/2.jpeg';
import Image from 'next/image';
import Team from './team';
import WhyUs from './why us';
import bg from '@/public/backgrounds/7.jpeg';
import './hero section/style.scss';
import './style.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import target from "@/public/elements/target-2.png";
import vision from "@/public/elements/vision-1.png";
import about1 from "@/public/elements/1.jpeg";
import about2 from "@/public/elements/4.jpeg";
import { MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const scrollContainerRef = useRef(null);
  const locoScrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    if (typeof window !== "undefined") {
      import('locomotive-scroll').then((LocomotiveScroll) => {
        locoScrollRef.current = new LocomotiveScroll.default({
          el: scrollContainerRef.current,
          smooth: true,
        });
      });
    }

    // Cleanup Locomotive Scroll on unmount
    return () => {
      locoScrollRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    let screen = gsap.matchMedia();

    screen.add("(min-width: 768px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.trigger',
          scrub: 0.5,
          pin: true,
          start: 'top top',
          end: '+=150%',
        }
      })
        .to('.box', {
          force3D: true,
          duration: 1,
          xPercent: 85,
          ease: 'power1.inOut',
          stagger: { amount: 1 }
        })
        .to('.box', { ease: 'power1.out', duration: 1, rotation: '45deg' }, 0)
        .to('.right-icon', { opacity: 0 }, 0.4)
        .to('.left-text', { opacity: 0, color: '#ebe1bc' }, 0.5)
        .to('.svg-arrow', { color: '#ebe1bc' }, 0.6)
        .to('.right-text', { opacity: 1, color: '#ebe1bc' }, 0.6)
        .to('.trigger', { backgroundColor: '#40260e', duration: 3, ease: 'back.inOut' }, 0.7)
        .to('.left-icon', { opacity: 1 }, 0.7)
        .to('.box', { ease: 'power1.in', duration: 1, rotation: '0deg' }, 1);
    });
  }, []);

  return (
    <div ref={scrollContainerRef} data-scroll-container className='about-page'>
      <section className='aboutus-herosection w-screen flex-center relative' data-scroll-section data-scroll data-scroll-speed="0">
        <Image src={bg} className='absolute object-cover object-right md:object-top w-full h-[100vh] scale-x-[-1]' alt='Axxess' />
        <div className='hero-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full' />
        <div className='text-container text-white absolute z-[2] top-0 right-0 h-full w-full md:w-[40%] flex-center'>
          <h1 data-scroll data-scroll-speed="3" data-scroll-delay="0.5" className='text-white text-7xl px-5 md:px-0 md:text-8xl'>
            About Us
          </h1>

          <div data-scroll data-scroll-speed="2" data-scroll-delay="0.5" className='w-[5px] h-[25%] absolute top-[80%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden'>
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

      <section className="trigger p-0">
        <Image
          src={about2}
          alt="axxess"
          quality={100}
          className="hidden md:flex left-icon opacity-0 absolute left-0 top-[0] w-[47%] h-[102vh] object-cover z-0"          
        />
        <div className="anim-container down px-5 md:px-10 top-[20%] z-[1] py-14 md:py-0">
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
        <div className="anim-container text-left up px-5 md:px-10 h-screen z-[1]">
          <Image
            src={about1}
            alt="axxess"
            quality={100}
            className="right-icon absolute right-0 top-0 w-[95%] h-[100vh] object-cover hidden md:flex"
          />
          <h1 className='right-text text-center md:text-left mt-[-1px] md:mt-[20%] md:text-6xl'>Our Core Values</h1>
          <div className="ml-5 mt-5 flex flex-col gap-5">
            <div className="flex gap-5">
              <MousePointer2 strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
              <p><span className='font-bold'>Integrity</span> – We uphold the highest ethical standards in all our engagements.</p>
            </div>
            <div className="flex gap-5">
              <MousePointer2 strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
              <p><span className='font-bold'>Excellence</span> – We are committed to delivering top-quality corporate governance solutions.</p>
            </div>
            <div className="flex gap-5">
              <MousePointer2 strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
              <p><span className='font-bold'>Transparency</span> – We believe in open communication and honest business practices.</p>
            </div>
            <div className="flex gap-5">
              <MousePointer2 strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
              <p><span className='font-bold'>Collaboration</span> – We build strong relationships with our clients and industry partners.</p>
            </div>
            <div className="flex gap-5">
              <MousePointer2 strokeWidth={1.5} className="rotate-[135deg] text-transparent svg-arrow" />
              <p><span className='font-bold'>Innovation</span> – We continuously seek new ways to improve corporate governance standards.</p>
            </div>
          </div>
        </div>
        {[...Array(100)].map((_, i) => (
          <div key={i} className="box" />
        ))}
      </section>
      <Team />
      <WhyUs />
    </div>
  );
};

export default AboutUs;
