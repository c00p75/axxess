import './style.scss'
import logo from "@/public/logos/Axxess-Corporate-Consulting-Limited-Logos-8.png";
import Image from "next/image";

const LoadingSrceen = () => {
  return (
    <section id='loading-screen' className='z-[999] fixed h-screen w-screen top-0 left-0 flex-center'>
      <Image
        src={logo}
        alt="Axxess"
        quality={100}
        className="h-[60%] w-auto"
      />
    </section>
  )
}

export default LoadingSrceen