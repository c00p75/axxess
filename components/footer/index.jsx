import "./style.scss";
import footerLogo from "@/public/logos/Axxess-Corporate-Consulting-Limited-Logos-8.png";
import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <section className="footer-section relative min-h-min">
      <div className="footer-overlay" />
      <div className="footer-content z-[2] flex text-white gap-5 relative">
        <div className="w-[30%] flex flex-col gap-10 mr-10">
          <Image
            src={footerLogo}
            alt="Axxess"
            quality={100}
            className="w-full h-auto"
          />
        </div>
        <div className="w-[22%] flex-1 flex flex-col gap-5">
          <h2>Information</h2>
          <p>About Us</p>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="w-[22%] flex-1 flex flex-col gap-5">
          <h2>Our Social</h2>
          <p className="flex items-center gap-2">
            <Linkedin strokeWidth={1} color="#807045" />
            <span className="pt-1">LinkedIn</span>
          </p>
          <p className="flex items-center gap-2">
            <Facebook color="#807045" strokeWidth={1} />
            <span className="py-1">Facebook</span>
          </p>
        </div>

        <div className="w-[22%] flex-1 flex flex-col gap-5">
          <h2>Openning Time</h2>
          <p>Mon - Fri: 08:00am - 05:00pm</p>
          <p>15 Medland Rd Rhodespark, Lusaka</p>
          <p>+260 977 788 466</p>
          <p>axxesscorporate@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
