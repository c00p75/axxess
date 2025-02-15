"use client"

import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./style.scss";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const pinWrapRef = useRef(null);

  useEffect(() => {
    const scroller = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(containerRef.current, {
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
      pinType: containerRef.current.style.transform ? "transform" : "fixed",
    });

    let pinWrapWidth = pinWrapRef.current.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    gsap.to(pinWrapRef.current, {
      scrollTrigger: {
        scroller: containerRef.current,
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

    return () => {
      scroller.destroy();
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <section data-textcolor="#032f35">
        <div>
          <h1 data-scroll data-scroll-speed="1">
            Services
          </h1>
          <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
            with GSAP ScrollTrigger & Locomotive Scroll
          </p>
        </div>
      </section>

      <section id="sectionPin">
        <div className="pin-wrap" ref={pinWrapRef}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <img
            src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
            alt=""
          />
        </div>
      </section>

      <section data-bgcolor="#e3857a" data-textcolor="#f1dba7">
        <img
          src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h2 data-scroll data-scroll-speed="1" className="credit">
          <a href="https://thisisadvantage.com" target="_blank">
            Made by Advantage
          </a>
        </h2>
      </section>
    </div>
  );
};

export default HorizontalScroll;
