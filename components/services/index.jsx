"use client"

import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./style.scss";
import bg from '@/public/backgrounds/5.jpeg';
import bg1 from "@/public/elements/2.jpeg";
import bg2 from "@/public/elements/office-secretary.jpg";
import bg3 from "@/public/elements/research.jpeg";
import bg4 from "@/public/elements/17.jpeg";
import bg5 from "@/public/elements/14.png";
import bg6 from "@/public/backgrounds/handshake.jpg";
import boardGovernance from '@/public/backgrounds/13.jpeg';
import Image from "next/image";
import { MousePointer2 } from "lucide-react";
import Footer from "../footer";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  useEffect(async() => {
    if (typeof window !== "undefined") {
      const LocomotiveScrollModule = await import("locomotive-scroll");
      const LocomotiveScroll = LocomotiveScrollModule.default;

      const containerRef = document.querySelector('#scroll-wrap-container');
      const pinWrapRef = document.querySelector('#pin-wrap-ref');

      console.log(containerRef, pinWrapRef)

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

      return () => {
        scroller.destroy();
      };
    }
  }, []);

  return (
    <div id="scroll-wrap-container" className="services-page relative">      
      <div className="container" >
        <section className="overflow-hidden">
        <Image src={bg} className='absolute object-cover object-right md:object-top right-0 w-[80%] h-[100vh] scale-x-[-1]' alt="Axxess" />
        <div className='hero-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full' />
          <div className='text-container text-white absolute z-[2] top-0 left-0 h-full w-full md:w-[40%] flex-center'>            
            <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.5" className='text-white text-7xl px-5 md:px-0 md:text-8xl'>
              Services
            </h1>   
            <div data-scroll data-scroll-speed="2" data-scroll-delay="0.5" className='w-[5px] h-2/5 md:h-[30%] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden'>
              <span className='header-line h-full w-full flex bg-white rounded-full' />
            </div> 
          </div>
        </section>

        <section id="sectionPin" className="hidden md:block">
          <div className="pin-wrap text-left" id="pin-wrap-ref">
            
            <div className="self-start md:self-center pl-5 md:pl-10 pr-5 md:pr-28 w-[100vw] min-w-[100vw] md:w-[60vw] md:min-w-[60vw] z-[1] pt-[15vh] md:pt-0">
              <h1>Our Services</h1>
              At Axxess Corporate Consulting Limited, we provide expert corporate governance solutions tailored to support organizations in achieving excellence in leadership, compliance, and strategic oversight. Our services are designed to enhance board effectiveness, streamline governance structures, and ensure regulatory compliance for businesses across various industries in Zambia.
            </div>

            <div className="bg-[#75471c] text-[#ebe1bc] px-5 md:px-20 pt-[15vh] md:pt-[22vh] flex h-full w-[100vw] min-w-[100vw] md:w-[100%] md:min-w-[90vw] md:pr-[10rem] relative">
              <div className="flex z-[1]">
                <Image src={bg1} className="hidden md:flex brightness-50 absolute object-cover rounded-md h-[15rem] w-[10rem] md:h-[25rem] md:w-[20rem] top-0 md:top-[40%] left-[-5rem] z-[0]" alt="Axxess" />
                <h1 className="self-start md:text-[20rem] md:mt-[-10%] z-[1] mr-1 md:mr-10">1.</h1>
                <div className="flex flex-col z-[1]">
                  <h1>Board Governance and Effectiveness</h1>
                  <p>We help organizations build strong and effective boards by providing expert guidance on governance structures and best practices.</p>
                  <div className="md:ml-5 mt-5">
                    <div className="flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Board Effectiveness Reviews</span> – Assessing board performance and identifying areas for improvement.</p>
                    </div>

                    <div className="mt-5 md:mt-0 flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Board, Committee, and Director Evaluations</span> – Conducting structured evaluations to enhance board productivity.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Corporate Governance Training</span> – Equipping directors and executives with essential governance knowledge.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Board Succession Planning</span> – Identifying and developing future board leaders.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Board Readiness Training</span> – Preparing new board members for effective governance roles.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Drafting Board Charters and Terms of Reference</span> – Establishing clear governance frameworks.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Policy Development </span> – Crafting governance policies, including Codes of Conduct and Ethics.</p>
                    </div>
                  </div> 
                </div>
              </div>              
            </div>

            <div className="px-5 md:px-20 pt-[15vh] md:pt-[22vh] flex h-full w-[100vw] min-w-[100vw] md:w-[100%] md:min-w-[90vw] md:pr-[10rem] relative">
              <div className="flex z-[1]">
                <Image src={bg2} className="hidden md:flex absolute object-cover rounded-md h-[25rem] w-[20rem] top-[10%] left-[-5rem] z-[0]" alt="Axxess" />
                <h1 className="self-start text-[20rem] md:mt-[-10%] z-[1] mr-1 md:mr-10">2.</h1>
                <div className="flex flex-col z-[1]">
                  <h1>Company Secretarial and Administrative Support</h1>
                  <p>We offer comprehensive company secretarial services to ensure smooth board operations and regulatory compliance.</p>
                  <div className="md:ml-5 mt-5">
                    <div className="flex gap-5 relative">
                      <MousePointer2 color="#75471c" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Company Secretarial Services</span> – Handling governance compliance and documentation.</p>
                    </div>

                    <div className="mt-5 md:mt-0 flex gap-5 relative">
                      <MousePointer2 color="#75471c" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Minute Taking for Board and Committee Meetings</span> – Providing accurate and professional minutes.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#75471c" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Board and Committee Meeting Pack Preparation</span> – Ensuring directors receive well-organized materials.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#75471c" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Drafting Company Policies and Strategic Plans</span> – Aligning governance structures with corporate objectives.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#75471c" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Annual General Meeting (AGM) Coordination</span> – Managing the planning and execution of AGMs.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#75471c" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Filing of Statutory Returns</span> – Ensuring timely submissions to regulatory authorities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#75471c] text-[#ebe1bc] px-5 md:px-20 pt-[15vh] md:pt-[22vh] flex h-full w-[100vw] min-w-[100vw] md:w-[100%] md:min-w-[90vw] md:pr-[10rem] relative">
              <div className="flex z-[1]">
                {/* <Image src={boardGovernance} className="brightness-50 absolute object-cover rounded-md h-[25rem] w-[20rem] top-[40%] left-[-5rem] z-[0]" alt="Axxess" /> */}
                <h1 className="self-start text-[20rem] md:mt-[-10%] z-[1] mr-1 md:mr-10">3.</h1>
                <div className="flex flex-col z-[1]">
                  <h1>Training and Development</h1>
                  <p>We empower executives, board members, and professionals with the knowledge and skills needed for effective governance.</p>
                  <div className="md:ml-5 mt-5">
                    <div className="flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Corporate Governance and Board Training</span> – Workshops for directors and senior management.</p>
                    </div>

                    <div className="mt-5 md:mt-0 flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Training in Risk Management and Compliance</span> – Equipping teams to navigate regulatory frameworks.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Financial Literacy for Boards</span> – Understanding financial statements and investment strategies.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Strategic Leadership and Ethical Governance</span> – Enhancing leadership effectiveness.</p>
                    </div>

                    <div className="hidden md:flex gap-5 relative">
                      <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                      <p className='ml-10 text-left'><span className='font-bold'>Etiquette and Professional Conduct Training</span> – Promoting professionalism in corporate environments.</p>
                    </div>
                  </div> 
                </div>
              </div>              
            </div>                                
          </div>
        </section>

        <section className="px-20 pt-[22vh] flex h-full w-full md:min-w-[90vw] md:pr-[10rem] relative">
          <div className="flex z-[1] pt-[6rem] pl-[15rem] pr-[10rem]">
            <Image src={bg4} className="absolute brightness-75 object-cover rounded-md h-[25rem] w-[20rem] top-[-15%] left-[5px] z-[0]" alt="Axxess" />
            <h1 className="self-start text-[20rem] mt-[-10%] z-[1] md:mr-10">4.</h1>
            <div className="flex flex-col z-[1]">
              <h1>ESG Training and Audits (Environment, Social, and Governance)</h1>
              <p>We guide organizations in integrating ESG principles into their governance structures.</p>
              <div className="md:ml-5 mt-5">
                <div className="flex gap-5 relative">
                  <MousePointer2 color="#75471c" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'><span className='font-bold'>ESG Training for Boards and Executives</span> – Understanding sustainability and corporate responsibility.</p>
                </div>

                <div className="flex gap-5 relative">
                  <MousePointer2 color="#75471c" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'><span className='font-bold'>ESG Audits</span> – Evaluating an organization’s impact on environmental, social, and governance factors.</p>
                </div>

                <div className="flex gap-5 relative">
                  <MousePointer2 color="#75471c" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'><span className='font-bold'>Sustainability Reporting</span> – Helping businesses meet global ESG reporting standards.</p>
                </div>                    
              </div> 
            </div>
          </div>              
        </section>  

        <section className="bg-[#75471c] text-[#ebe1bc] pt-[22vh] flex h-full w-full relative service-section flex-col">
          <div className="flex z-[1] pt-[6rem] pl-[15rem] pr-[10rem]">
            <Image src={bg3} className="brightness-50 absolute object-cover rounded-md h-[25rem] w-[20rem] top-[-10%] left-[2rem] z-[0]" alt="Axxess" />
            <h1 className="self-start text-[20rem] mt-[-10%] z-[1] md:mr-10">5.</h1>
            <div className="flex flex-col z-[1]">
              <h1>Tailor-Made Training & Short Courses</h1>
              <p>We provide specialized courses designed to meet the unique needs of professionals and organizations.</p>
              <div className="md:ml-5 mt-5">
                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'>A Day in the Life of a Company Secretary</p>
                </div>

                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'>How to be Effective in Meetings</p>
                </div>

                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'>The Do’s and Don’ts of Minute Taking</p>
                </div>

                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'>Getting Board Ready – Training for New Board Members</p>
                </div>

                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'>The Role of a Company Secretary</p>
                </div>

                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'>How to Prepare for an Annual General Meeting</p>
                </div>

                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'>How to Prepare for a Board Meeting</p>
                </div>

                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'>Overview of Company Secretarial Practice</p>
                </div>
              </div> 
            </div>
          </div>              
        </section>   
        
        <section className="pt-[22vh] flex h-full w-full relative service-section">
          <div className="flex z-[1] pt-[6rem] pl-[15rem] pr-[10rem]">
            <Image src={bg5} className="brightness-50 absolute object-cover rounded-md h-[25rem] w-[20rem] top-[-10%] left-[2rem] z-[0]" alt="Axxess" />
            <h1 className="self-start text-[20rem] mt-[-10%] z-[1] md:mr-10">6.</h1>
            <div className="flex flex-col z-[1]">
              <h1>Company Formation and Business Registration</h1>
              <p>Starting a new business? We streamline the registration and compliance process for startups and established firms.</p>
              <div className="md:ml-5 mt-5">
                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'><span className='font-bold'>Company Formation and Registration</span> – Helping you set up your business with ease.</p>
                </div>

                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'><span className='font-bold'>Business Start-up Advisory</span> – Offering guidance on business structures and governance.</p>
                </div>            
              </div> 
            </div>
          </div>              
        </section>

        <section className="bg-[#75471c] text-[#ebe1bc] pt-[22vh] flex h-full w-full relative service-section flex-col">
          <div className="flex z-[1] pt-[6rem] pl-[15rem] pr-[10rem]">
            <Image src={bg6} className="brightness-50 absolute object-cover rounded-md h-[25rem] w-[20rem] top-[-10%] left-[2rem] z-[0]" alt="Axxess" />
            <h1 className="self-start text-[20rem] mt-[-10%] z-[1] md:mr-10">7.</h1>
            <div className="flex flex-col z-[1]">
              <h1>Executive and Special Occasion Services</h1>
              <p>We offer premium corporate gifting solutions for businesses and executives.</p>
              <div className="md:ml-5 mt-5">
                <div className="flex gap-5 relative">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
                  <p className='ml-10 text-left'><span className='font-bold'>Executive Gift Hampers and Baskets</span> – Thoughtfully curated gifts for corporate events and special occasions.</p>
                </div>
              </div> 
            </div>
          </div>  
                   
        </section> 
        <Footer />
      </div>
       
    </div>
  );
};

export default Services;
