'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  useEffect(() => {
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
      xPercent: 100,
      ease: 'power1.inOut',
      stagger: { amount: 1 }
    })
    .to('.box', { ease: 'power1.out', duration: 1, rotation: '45deg' }, 0)
    .to('.box', { ease: 'power1.in', duration: 1, rotation: '0deg' }, 1);
  }, []);

  return (
    <>
      <section className="trigger p-0">
        <div className="anim-container down px-10">
          <h1>Our Vision</h1>
          <p>To be the leading corporate governance consultancy in Zambia, setting the benchmark for board effectiveness, regulatory compliance, and ethical leadership.</p>
        </div>
        <div className="anim-container up px-10">
        <h1>Our Mission</h1>
        <p>To enhance corporate governance practices by providing expert guidance, training, and board support services that empower organizations to operate with transparency, accountability, and efficiency.</p>
        </div>
        {[...Array(100)].map((_, i) => (
          <div key={i} className="box"></div>
        ))}
      </section>
    </>
  );
};

export default WhoWeAre;