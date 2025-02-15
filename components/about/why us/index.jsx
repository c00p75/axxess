import { MousePointer2 } from 'lucide-react'
import React from 'react'

const WhyUs = () => {
  return (
    <div className='mt-20 text-white bg-[#75471c] py-20 px-5 md:px-20'>
      <h1 className='text-center pb-5 md:pb-20'>Why Choose Us</h1>
      <div className='flex flex-col-reverse md:flex-row'>     
        <div className='flex-1 bg-gradient-to-br from-[transparent] to-[transparent]'>
          <h2 className='text-3xl md:text-5xl pb-5'>Our Commitment to Zambia’s Corporate Governance Future</h2>
          <p>Axxess Corporate Consulting Limited is not just a consultancy firm—we are a driving force for change. We actively mentor young professionals, especially women, who aspire to pursue careers in governance, law, and ICT. By investing in capacity building and professional development, we are shaping the next generation of governance leaders in Zambia.          </p>
        </div>

        <div className='w-0 h-10 md:w-[5px] md:h-[50vh] rounded-full md:bg-white mx-20' />

        <div className='flex-1'>          
          <p>Our experienced professionals bring years of industry expertise to every project. We prioritize your goals with a client-centered approach, ensuring personalized solutions. With a proven track record of impactful results, we offer comprehensive.</p>
          <div className="ml-5 mt-5">
            <div className="flex gap-5 relative">
              <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
              <p className='ml-10 text-left'><span className='font-bold'>Proven Expertise</span> – Our consultants have worked with leading institutions across Zambia, including financial institutions, government entities, and private corporations.</p>
            </div>

            <div className="flex gap-5 relative">
              <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
              <p className='ml-10 text-left'><span className='font-bold'>Tailored Solutions</span> – We customize our services to meet the unique needs of each organization.</p>
            </div>

            <div className="flex gap-5 relative">
              <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
              <p className='ml-10 text-left'><span className='font-bold'>Commitment to Excellence</span> – We go beyond compliance to ensure organizations embrace best practices that foster long-term sustainability.</p>
            </div>

            <div className="flex gap-5 relative">
              <MousePointer2 color="#ebe1bc" strokeWidth={1.5} className="rotate-[135deg] h-6 w-6 absolute" />
              <p className='ml-10 text-left'><span className='font-bold'>Holistic Approach</span> – We provide governance training, company secretarial support, risk management insights, and leadership development to create well-rounded governance frameworks.</p>
            </div>
          </div>  
        </div>        
      </div>
    </div>    
  )
}

export default WhyUs