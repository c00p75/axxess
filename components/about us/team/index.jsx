import Image from 'next/image';
import './style.scss'
import nair from '@/public/elements/nair2.jpeg';

const Team = () => {
  return (
    <div className='team-section flex flex-col md:flex-row mt-14 md:mt-20 px-5 md:px-20 gap-[5%] items-center '>
      <div className='w-full md:w-[40%]'>
        <h1 className='md:text-7xl'>Our Team</h1>          
          <p className='flex  mt-5'>
            At Axxess Corporate Consulting Limited, our team comprises seasoned professionals with extensive experience in legal, financial, and governance disciplines. Our consultants have held key positions in major organizations, providing invaluable insights into best practices for board management, compliance, and governance frameworks.
          </p>
          
      </div>
      
      <div className='flex-1 mt-14 md:mt-0'>
        <div className="container md:pl-20">
          <div className="card" href="#">
            <Image src={nair} className='w-[12rem]' alt="Axxess" />
          </div>

          <div className="card" href="#">
            <Image src={nair} className='w-[12rem]' alt="Axxess" />
          </div>
        </div>

        <div className="container mt-4">
          <div className="card" href="#">
            <Image src={nair} className='w-[12rem]' alt="Axxess" />
          </div>

          <div className="card" href="#">
            <Image src={nair} className='w-[12rem]' alt="Axxess" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
