import "./style.scss";
import footerLogo from "@/public/logos/Axxess-Corporate-Consulting-Limited-Logos-8.png";
import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-section relative min-h-min">
      <div className="footer-overlay" />
      <div className="footer-content z-[2] flex flex-col md:flex-row text-white gap-10 md:gap-5 relative">
        <div className="md:w-[30%] flex flex-col gap-10 md:mr-10">
          <Image
            src={footerLogo}
            alt="Axxess"
            quality={100}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-[22%] flex-1 flex flex-col gap-5">
          <h2>Information</h2>
          <p>About Us</p>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="md:w-[22%] flex-1 flex flex-col items-center md:items-start gap-5">
          <h2>Our Social</h2>
          <a
            href="https://zm.linkedin.com/company/axxess-corporate-secretaries-limited"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Linkedin strokeWidth={1} color="palegoldenrod" />
            <span className="pt-1">LinkedIn</span>
          </a>
          <a
            href="https://m.facebook.com/100075765614639"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Facebook color="palegoldenrod" strokeWidth={1} />
            <span className="py-1">Facebook</span>
          </a>
        </div>

        <div className="md:w-[22%] flex-1 flex flex-col gap-5">
          <h2>Opening Time</h2>
          <p>Mon - Fri: 08:00am - 05:00pm</p>
          <p>Plot 2071, 12 Ingwe Rd, Woodlands</p>
          <p>+260 977 788 466</p>
          <p>axxesscorporate@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center z-[2] relative text-white mt-14 gap-2">
        <p className="text-[1rem] text-[#ece5de] font-extralight">
          Designed & created by{" "}
          <Link
            href="https://www.balloinnovations.com/"
            className="font-semibold hover:underline"
          >
            Ballo Innovations
          </Link>
        </p>
        <p>©2025 Axxess Corporate Consulting Limited. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
