'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';
import target from "@/public/elements/target-2.png";
import vision from "@/public/elements/vision-1.png";
import about1 from "@/public/elements/1.png";
import about2 from "@/public/elements/4.png";
import Image from 'next/image';
import { MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  useEffect(() => {
    let screen = gsap.matchMedia();

    screen.add("(min-width: 768px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.trigger',
          scrub: 0.5,
          pin: true,
          start: 'top top',
          end: '+=150%'
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
    })
  }, []);

  return (
    <>
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
          <div key={i} className="box"></div>
        ))}
      </section>
    </>
  );
};

export default WhoWeAre;