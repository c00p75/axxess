import Bulb from "@/public/elements/bulb-1.png";
import img2 from "@/public/elements/male-professional.jpeg";
import Image from "next/image";
import { MousePointer2 } from "lucide-react";
import OurServices from "../our services";

const Solution = () => {
  return (
    <section className="home-section relative px-0  bg-[#ebe1bc]">
        <div className="pt-0 md:pt-20 flex flex-col md:flex-row items-center gap-5 mb-10 min-h-[27rem] md:px-[2rem]">
          <div className="md:w-[70%] flex flex-col py-[2rem] px-3 md:px-[2rem] bg-[] min-h-[25rem] rounded-xl">
            <h1>Leading Corporate Governance and Board Support Experts in Zambia</h1>
            <p className="md:text-left w-full">
              At Axxess Corporate Consulting Limited, we specialize in providing world-class corporate governance solutions, board support services, and company secretarial expertise to businesses in Zambia and beyond. With a team of seasoned professionals, we help organizations enhance their corporate governance frameworks, ensuring compliance, efficiency, and sustainability.
            </p>
          </div>
          <div className="relative mx-1 md:mx-0 md:w-[30%] h-[25rem] bg-gradient-to-br from-[#75471c] to-[#75471c] rounded-md flex-center">
            <Image
              src={Bulb}
              alt="Axxess"
              quality={100}
              className="w-[70%] h-auto hero-img scale-x-[-1] mt-20"
            />

            <div className="absolute top-5 left-5 text-white w-[30%]">
              <h2 className="font-bold text-6xl md:text-7xl">150+</h2>
              <p className="text-sm md:text-base">corporate governance training sessions</p>
            </div>


            <div className="absolute top-5 right-5 text-white w-[25%] text-right">
              <h2 className="font-bold text-6xl md:text-7xl">10+</h2>
              <p className="text-sm md:text-base">years of combined experience</p>
            </div>   


            <div className="absolute bottom-5 left-5 text-white w-[25%]">
              <h2 className="font-bold text-6xl md:text-7xl">20+</h2>
              <p className="text-sm md:text-base">Organizations supported</p>
            </div>


            <div className="absolute bottom-5 right-5 text-white w-[25%] text-right">
              <h2 className="font-bold text-6xl md:text-7xl">50+</h2>
              <p className="text-sm md:text-base">Women mentored and trained</p>
            </div>            
          </div>
        </div>

        <div className="flex bg-[#75471c] text-[#f1e9ca] pb-24 md:pb-0 flex-col md:flex-row px-3 md:px-0">
          <div className="hidden md:flex flex-[4]">
            <Image
                src={img2}
                alt="axxess"
                quality={100}
                className="h-auto w-auto md:h-full md:w-full object-cover object-right brightness-90"
              />
          </div>
          <div className="flex-1 md:flex-[5] relative mt-20 pb-32 md:pl-20">
            <div>
              <h1>Who We Are</h1>
              <p>Founded in 2015, Axxess Corporate Consulting Limited is built on a foundation of excellence, professionalism, and passion for corporate governance. Our team of highly experienced consultants brings decades of industry expertise in legal advisory, board governance, compliance, and company secretarial services. We are dedicated to fostering ethical leadership and governance best practices to strengthen organizations.</p>
            </div>

            <div className="mt-5 md:hidden">
              <Image
                src={img2}
                alt="axxess"
                quality={100}
                className="h-auto w-auto md:h-full md:w-full rounded-sm object-cover object-right"
              />
            </div>

            <div className="mt-16">
              <h1>Why Choose Us</h1>
              <p>Our experienced professionals bring years of industry expertise to every project. We prioritize your goals with a client-centered approach, ensuring personalized solutions. With a proven track record of impactful results, we offer comprehensive.</p>
              <div className="ml-5 mt-5">
                <div className="flex gap-5">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg]" />
                  <p>Experienced Professionals</p>
                </div>

                <div className="flex gap-5">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg]" />
                  <p>Client-Centered Approach</p>
                </div>

                <div className="flex gap-5">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg]" />
                  <p>Proven Results</p>
                </div>

                <div className="flex gap-5">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg]" />
                  <p>Comprehensive Solutions</p>
                </div>


                <div className="flex gap-5">
                  <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg]" />
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
