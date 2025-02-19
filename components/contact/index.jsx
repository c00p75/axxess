"use client"

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./style.scss";
import bg from '@/public/backgrounds/contact.jpeg';
import Image from "next/image";
import { CalendarDays, Mail, MapPin, MousePointer2, PhoneCall } from "lucide-react";
import Footer from "../footer";

const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), { ssr: false });
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollContainer = containerRef.current;
      let scroller;

      (async () => {
        const LocomotiveScrollModule = await import("locomotive-scroll");
        const LocomotiveScroll = LocomotiveScrollModule.default;

        scroller = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });

        // Sync with GSAP ScrollTrigger
        scroller.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(scrollContainer, {
          scrollTop(value) {
            return arguments.length
              ? scroller.scrollTo(value, { duration: 0, disableLerp: true })
              : scroller.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
        });

        ScrollTrigger.addEventListener("refresh", () => scroller.update());
        ScrollTrigger.refresh();
      })();

      return () => {
        if (scroller) scroller.destroy();
      };
    }
  }, []);
  
  

  return (
    <div ref={containerRef} className="contact-page relative">
      
      <div className="container" >
        <section className="overflow-hidden">
          <Image src={bg} className='contact-hero-img absolute object-cover md:object-top right-0 md:w-[60%] h-[100vh] scale-x-[-1]' alt="Axxess" />
          <div className='hero-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full' />
            <div className='text-container text-white absolute z-[2] top-0 left-0 h-full w-full md:w-[40%] flex-center'>            
              <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.5" className='text-white text-7xl px-5 md:px-0 md:text-8xl text-center'>
                Contact <br/> Us
              </h1>   
            <div data-scroll data-scroll-speed="2" data-scroll-delay="0.5" className='w-[5px] h-2/5 md:h-[30%] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden'>
              <span className='header-line h-full w-full flex bg-white rounded-full' />
            </div> 
          </div>
        </section>       

        <div className="flex flex-col md:flex-row items-stretch h-full w-full relative contact-us-container">
          <div className="flex-1 flex z-[1] px-5 md:px-20 py-10 md:py-28">
            <div className="flex flex-col z-[1]">
              <h1 className="pb-2">Connect with our team</h1>                            
              <p>At Axxess Corporate Consulting Limited, we value strong relationships with our clients and partners. Whether you have a question about our services, need expert corporate governance advice, or are looking to schedule a consultation, we’re here to assist you.</p>
              <div className="mt-10 flex flex-col text-left">
                <h2 className="flex items-center mb-3">Contact Information </h2>                
                <h5 className="font-semibold pt-5 md:pt-2 flex"><MapPin color="#75471c" className="mr-3 w-14 ml-2 md:ml-0" /> Office Address : 15 Medland Road, Rhodespark, Lusaka, Zambia</h5>
                <h5 className="font-semibold pt-5 md:pt-2 flex"><PhoneCall color="#75471c" strokeWidth={2} className="mr-3 w-10" /> Phone : +260 977 788 466</h5>                
                <h5 className="font-semibold pt-5 md:pt-2 flex"><Mail color="#75471c" strokeWidth={2} className="mr-3 w-10" /> Email : axxesscorporate@gmail.com</h5>  
                <h5 className="font-semibold pt-5 md:pt-2 flex"><CalendarDays color="#75471c" strokeWidth={2} className="mr-3 w-10 ml-1 md:ml-0" /> Business Hours : Monday – Friday: 08:00 AM – 05:00 PM</h5>                
              </div>
            </div>
          </div> 

          <div className="flex-1 bg-[#75471c] w-full min-h-[100vh] pb-20 px-5 md:px-20">
            <h1 className="pb-2 text-white mt-14 md:mt-28">Send a message</h1>   
            <form action="https://api.web3forms.com/submit" className="mt-10">   
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
              <div className="flex flex-col md:grid gap-6 md:grid-cols-2">
                <div className="relative z-0 flex">
                  <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-white focus:border-[#ebe1bc] focus:outline-none focus:ring-0" placeholder=" " />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#ebe1bc] peer-focus:dark:text-[#ebe1bc]">Your name</label>
                </div>
                <div className="relative z-0 flex">
                  <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-white focus:border-[#ebe1bc] focus:outline-none focus:ring-0" placeholder=" " />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#ebe1bc] peer-focus:dark:text-[#ebe1bc]">Your email</label>
                </div>

                <div className="relative z-0 flex mt-10">
                  <input type="text" name="interest" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-white focus:border-[#ebe1bc] focus:outline-none focus:ring-0" placeholder=" " />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#ebe1bc] peer-focus:dark:text-[#ebe1bc]">Interested In</label>
                </div>
                <div className="relative z-0 flex mt-10">
                  <input type="tel" name="tel" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-white focus:border-[#ebe1bc] focus:outline-none focus:ring-0" placeholder=" " />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#ebe1bc] peer-focus:dark:text-[#ebe1bc]">Phone Number</label>
                </div>

                <div className="relative z-0 flex md:col-span-2 mt-10">
                  <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-white focus:border-[#ebe1bc] focus:outline-none focus:ring-0" placeholder=" "></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#ebe1bc] peer-focus:dark:text-[#ebe1bc]">Your message</label>
                </div>
              </div>
              <button type="submit" className="mt-5 rounded-md bg-black px-10 py-3 text-white">Send</button>
            </form>
          </div>           
        </div>  

        <div className="flex-center bg-[#42270f] relative">
          <iframe className="w-screen h-[35rem] rounded-sm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.9278244220404!2d28.33934637494117!3d-15.434446385156807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408cf6c07dd6c7%3A0xcbd0572620d4f377!2sIngwe%20Rd%2C%20Lusaka!5e0!3m2!1sen!2szm!4v1739751419068!5m2!1sen!2szm" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="bg-[#42270f] absolute top-0 left-0 opacity-20 z-[2] h-full w-full"></div>
        </div>

        <Footer /> 
        
      </div>
       
    </div>
  );
};

export default Contact;
