import React from 'react'
import HeroSection from './hero section'
import nair from '@/public/elements/nair2.jpeg';
import Image from 'next/image';
import WhoWeAre from './about us';

const AboutUs = () => {
  return (
    <div className='about-page'>
      <HeroSection/>
      <h2 className='text-[#171717] text-base mb-10 text-center'>About Axxess Corporate Consulting Limited</h2>
      <div className='flex gap-10 px-32'>
          {/* <div className='flex-1'></div> */}

          <div className='flex-[2]'>                    
            <h1>Who We Are</h1>
            <p>Axxess Corporate Consulting Limited is a premier consultancy firm specializing in Corporate Governance, Board Support Services, and Company Secretarial solutions. Established in October 2015, our firm is driven by a team of highly experienced consultants with a deep passion for governance excellence. Our mission is to strengthen corporate leadership by providing organizations with the knowledge, structures, and strategic guidance needed to thrive in today’s dynamic business landscape.</p>
          </div>

          {/* <div className='flex-1'></div> */}
          <div className='w-[40%] pb-32'>
            <Image src={nair} className="rounded-full" alt="Axxess" />
          </div>
        </div>

      <WhoWeAre />

      <div className='mt-20'>
        <h1>Our Core Values</h1>
        <p></p>
      </div>
      {/* <section className='pt-20 px-32'>
        <h2 className='text-[#171717] text-base mb-10 text-center'>About Axxess Corporate Consulting Limited</h2>
        <div className='flex gap-10'>
          <div className='flex-1'></div>

          <div className='flex-[2]'>                    
            <h1>Who We Are</h1>
            <p>Axxess Corporate Consulting Limited is a premier consultancy firm specializing in Corporate Governance, Board Support Services, and Company Secretarial solutions. Established in October 2015, our firm is driven by a team of highly experienced consultants with a deep passion for governance excellence. Our mission is to strengthen corporate leadership by providing organizations with the knowledge, structures, and strategic guidance needed to thrive in today’s dynamic business landscape.</p>
          </div>

          <div className='flex-1'></div>
          <div className='w-[40%]'>
            <Image src={nair} className="rounded-xl" alt="Axxess" />
          </div>
        </div>

        <div className='flex gap-10 mt-20'>
          <div className='flex-1'>                    
            <h1>Our Vision</h1>
            <p>To be the leading corporate governance consultancy in Zambia, setting the benchmark for board effectiveness, regulatory compliance, and ethical leadership.</p>
          </div>

          <div className='flex-1'>                    
            <h1>Our Mission</h1>
            <p>To enhance corporate governance practices by providing expert guidance, training, and board support services that empower organizations to operate with transparency, accountability, and efficiency.</p>
          </div>
        </div>

        <div className='mt-20'>
          <h1>Our Core Values</h1>
          <p></p>
        </div>

      </section> */}
    </div>
  )
}

export default AboutUs
