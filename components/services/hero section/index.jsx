import bg from '@/public/backgrounds/5.png';
import './style.scss'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='aboutus-herosection w-screen flex-center relative'>
      <Image src={bg} className='absolute object-cover object-right md:object-top right-0 w-[80%] h-[100vh] scale-x-[-1]' alt="Axxess" />
      <div className='hero-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full' />
      <div className='text-container text-white absolute z-[2] top-0 left-0 h-full w-full md:w-[40%] flex-center'>
        <h1 className='text-7xl px-5 md:px-0 md:text-8xl -mt-[40%]'>
          Services
        </h1>   
        <div className='w-[5px] h-2/5 md:h-1/2 absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden'>
          <span className='header-line h-full w-full flex bg-white rounded-full' />
        </div>     
      </div>
    </section>
  )
}

export default HeroSection
