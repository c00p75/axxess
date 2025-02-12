import Bulb from "@/public/elements/bulb-1.png";
import img2 from "@/public/elements/male-professional.jpg";
import Image from "next/image";
import { MousePointer2 } from "lucide-react";
import OurServices from "../our services";

const Solution = () => {
  return (
    <section className="home-section relative px-0 bg-gradient-to-b from-[whitesmoke] to-[lightyellow]">
        <div className="pt-20 flex items-center gap-5 mb-10 min-h-[27rem] px-[2rem]">
          <div className="w-[70%] flex flex-col p-[2rem] bg-[] min-h-[25rem] rounded-xl text-[#936133]">
            <h1>Leading Corporate Governance and Board Support Experts in Zambia</h1>
            <p className="text-left w-full">
              At Axxess Corporate Consulting Limited, we specialize in providing world-class corporate governance solutions, board support services, and company secretarial expertise to businesses in Zambia and beyond. With a team of seasoned professionals, we help organizations enhance their corporate governance frameworks, ensuring compliance, efficiency, and sustainability.
            </p>
          </div>
          <div className="relative w-[30%] h-[25rem] bg-gradient-to-br from-[#c2ad93] to-[#9a7959] rounded-xl flex-center">
            <Image
              src={Bulb}
              alt="Logo"
              quality={100}
              className="w-[70%] h-auto hero-img scale-x-[-1] mt-20"
            />

            <div className="absolute top-5 left-5 text-white w-[30%]">
              <h2 className="font-bold text-7xl">150+</h2>
              <p className="text-base">corporate governance training sessions</p>
            </div>


            <div className="absolute top-5 right-5 text-white w-[25%] text-right">
              <h2 className="font-bold text-7xl">10+</h2>
              <p className="text-base">years of combined experience</p>
            </div>   


            <div className="absolute bottom-5 left-5 text-white w-[25%]">
              <h2 className="font-bold text-7xl">20+</h2>
              <p className="text-base">Organizations supported</p>
            </div>


            <div className="absolute bottom-5 right-5 text-white w-[25%]">
              <h2 className="font-bold text-7xl">50+</h2>
              <p className="text-base">Women mentored and trained</p>
            </div>            
          </div>
        </div>

        <div className="flex mt-20  bg-gradient-to-br from-[#d3ba8d] to-[transparent] py-20 pb-32 ">
          <div className="flex-[4] px-20">
            <Image
                src={img2}
                alt="axxess"
                quality={100}
                className="h-full w-auto rounded-2xl object-cover object-right"
              />
          </div>
          <div className="flex-[6] relative">
            <div>
              <h1>Who We Are</h1>
              <p>Founded in 2015, Axxess Corporate Consulting Limited is built on a foundation of excellence, professionalism, and passion for corporate governance. Our team of highly experienced consultants brings decades of industry expertise in legal advisory, board governance, compliance, and company secretarial services. We are dedicated to fostering ethical leadership and governance best practices to strengthen organizations.</p>
            </div>

            <div className="mt-16">
              <h1>Why Choose Us</h1>
              <p>Our experienced professionals bring years of industry expertise to every project. We prioritize your goals with a client-centered approach, ensuring personalized solutions. With a proven track record of impactful results, we offer comprehensive.</p>
              <div className="ml-5 mt-5">
                <div className="flex gap-5">
                  <MousePointer2 color="#896d06" strokeWidth={1.5} className="rotate-[135deg]" />
                  <p>Experienced Professionals</p>
                </div>

                <div className="flex gap-5">
                  <MousePointer2 color="#896d06" strokeWidth={1.5} className="rotate-[135deg]" />
                  <p>Client-Centered Approach</p>
                </div>

                <div className="flex gap-5">
                  <MousePointer2 color="#896d06" strokeWidth={1.5} className="rotate-[135deg]" />
                  <p>Proven Results</p>
                </div>

                <div className="flex gap-5">
                  <MousePointer2 color="#896d06" strokeWidth={1.5} className="rotate-[135deg]" />
                  <p>Comprehensive Solutions</p>
                </div>


                <div className="flex gap-5">
                  <MousePointer2 color="#896d06" strokeWidth={1.5} className="rotate-[135deg]" />
                  <p>Experienced Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </section>
  )
}

export default Solution
