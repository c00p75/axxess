import Image from 'next/image';
import './style.scss'
import nair from '@/public/team/celine.png';
import victoria from '@/public/team/victoria.png';
import suzyo from '@/public/team/suzyo.png';
import lisulo from '@/public/team/lisulo.png';
import herbert from '@/public/team/herbert.png';

const Team = () => {
  const team = [
    { 
      name: 'Victoria C. Silutongwe',
      position: `Director/`,
      position2: `Consultant`,
      image: victoria
     },
     { 
      name: 'Suzyo Ng’andu',
      position: 'Senior Consultant',
      image: suzyo
     },
     { 
      name: 'Lisulo Soko',
      position: 'Consultant',
      image: lisulo
     },
     { 
      name: 'Celine Meena Nair',
      position: `Director/`,
      position2: `Consultant`,
      image: nair
     },     
     { 
      name: 'Herbert Mulenga',
      position: 'Admin/',
      position2: `Business Development Officer`,
      image: herbert
     },
  ]
  return (
    <div className='team-section flex flex-col md:flex-row mt-14 md:mt-20 px-5 md:px-20'>
      <div className='w-full md:w-[39%] pt-[5%]'>
        <h1 className='md:text-7xl'>Our Team</h1>          
          <p className='flex  mt-5'>
            At Axxess Corporate Consulting Limited, our team comprises seasoned professionals with extensive experience in legal, financial, and governance disciplines. Our consultants have held key positions in major organizations, providing invaluable insights into best practices for board management, compliance, and governance frameworks.
          </p>
          
      </div>
      
      <div className='flex-1 mt-14 md:mt-0'>
        <div className="container md:pl-20">
          {team.map((member, index) => (
            <div key={index} className="card">
              <Image src={member.image} fill className='object-cover object-top' />
              <div className='card-overlay' />
              <div className="border" />
              <div className="content">                
                <span className="logo-bottom-text">{member.name} </span>      
                <span className="logo-bottom-text logo-bottom-text-2">{member.position} <br /> {member.position2}</span>                
              </div>
              <span className="bottom-text">Axxess</span>
            </div>
            ))}          
        </div>        
      </div>
    </div>
  )
}

export default Team
