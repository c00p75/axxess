import Image from "next/image";
import "./style.scss";
import Bulb from "@/public/elements/bulb-1.png";
import HeroSection from "./hero section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <section className="home-section relative">
        <div className="flex items-center">
          <div className="flex-1 flex items-center flex-col px-20">
            <h1 className="text-6xl">Your Partner in Business Excellence</h1>
            <p className="text-left w-full">
              Empowering businesses with tailored solutions that drive growth,
              innovation, and operational excellence, whether you're a startup
              building foundations.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={Bulb}
              alt="Logo"
              quality={100}
              className="w-full h-auto hero-img scale-x-[-1]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
