import bg1 from "@/public/elements/2.jpeg";
import bg2 from "@/public/elements/company-sec.jpg";
import bg3 from "@/public/elements/research.jpeg";
import bg4 from "@/public/elements/17.jpeg";
import bg5 from "@/public/elements/14.png";
import bg6 from "@/public/backgrounds/handshake.jpg";
import logo from "@/public/logos/Axxess-Corporate-Consulting-Limited-Logos-1.png";
import Image from "next/image";
import './style.scss'

const OurServices = () => {
  return (
    <>
      <div className='absolute left-0 top-0 w-1/2 h-full carousel-logo-overlay flex-center px-10'>
        <Image
          src={logo}
          alt="axxess"
          quality={100}
          className="max-w-none h-auto w-[80vw] left-[10vw] md:left-0 top-[55%] md:w-full absolute md:relative" />
      </div>
      
      <h1 className='our-services-header px-16 absolute right-[0] top-[10%] md:top-[25%] text-6xl md:text-7xl text-[#391e06] md:text-white text-center md:text-right'>
        Our Services
      </h1>
      
      <div className="carousel-item" id="divRef1">
        <div className="carousel-box">
          <div className="title">Board Governance & Effectiveness</div>
          <div className="num">01</div>
          <Image src={bg1} className='object-bottom' alt="Axxess" />
        </div>
      </div>
      
      <div className="carousel-item" id="divRef2">
        <div className="carousel-box">
          <div className="title">Company Secretarial Services</div>
          <div className="num">02</div>
          <Image src={bg2} className='brightness-60 object-bottom' alt="Axxess" />
        </div>
      </div>
      
      <div className="carousel-item" id="divRef3">
        <div className="carousel-box">
          <div className="title">Training & Development</div>
          <div className="num">03</div>
          <Image src={bg3} className='brightness-60 object-bottom' alt="Axxess" />
        </div>
      </div>
      
      <div className="carousel-item" id="divRef4">
        <div className="carousel-box">
          <div className="title">ESG Training & Audits</div>
          <div className="num">04</div>
          <Image src={bg4} className='brightness-60 object-bottom' alt="Axxess" />
        </div>
      </div>
      
      <div className="carousel-item" id="divRef5">
        <div className="carousel-box">
          <div className="title">Business Formation & Registration</div>
          <div className="num">05</div>
          <Image src={bg5} className='brightness-60 object-bottom' alt="Axxess" />
        </div>
      </div>
      
      <div className="carousel-item opacity-0" id="divRef6">
        <div className="carousel-box">
          <div className="title">Business Formation & Registration</div>
          <div className="num">05</div>
          <Image src={bg6} className='brightness-60 object-bottom' alt="Axxess" />
        </div>
      </div>
    </>          
  )
}

export default OurServices