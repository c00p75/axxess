'use client'

import { SquareX } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const RegistrationForm = ({image, event, setEvent}) => {
  const [eventValue, setEventValue] = useState(event || '')
  const closeModal = () => {
    setEvent({
      eventImage: '',
      eventName: ''
    });
  };

  useEffect(() => {
    const header = document.querySelector('.header');
    if (header) {
      header.style.zIndex = "0";
    }
  
    return () => {
      if (header) {
        header.style.zIndex = "99";
      }
    };
  }, []);
  
  return (
    <div id='events-registration-form' className="flex-center min-h-screen w-screen overflow-scroll fixed top-0 left-0 z-[100]">
      <button className='absolute top-0 left-0 w-screen h-screen bg-black/80 p-4 z-0 cursor-auto' onClick={closeModal} />
      <div className="flex justify-center items-start md:items-center pt-10 md:pt-0 bg-[#ebe1bc] h-[98vh] md:h-[90vh] w-[95%] md:w-[90%] overflow-scroll relative z-[1]">
        <button
          className='absolute top-2 md:top-5 right-3 md:right-7'
          onClick={closeModal}
        >
          <SquareX color="#75471c" size={40} strokeWidth={1.5} />
        </button>

        {image && (
          <div className="w-1/2 h-full hidden lg:block p-5">
            <Image src={image} alt="Axxess" className="object-contain w-full h-full" />
          </div>
        )}
        <div className= "py-8 md:px-8 md:py w-full lg:w-1/2 overflow-auto">
          <h1 className="text-4xl font-semibold mb-4">Registration Form</h1>
          {image && (
            <div className="w-full h-full lg:hidden">
              <Image src={image} alt="Axxess" className="object-contain w-full h-full" />
            </div>
          )}
          <form action="#" method="POST" className='px-8 md:px-0'>
            <div className="flex flex-wrap -mx-3 mb-6 gap-10 md:gap-0 mt-10 md:mt-0">
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2" for="event">
                  Event 
                </label>
                <input 
                  className="appearance-none block w-full text-black/70 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#75471c]"
                  id="event"
                  type="text"
                  value={eventValue}
                  onChange={(e) => setEventValue(e.target.value)}
                  disabled={event}
                />
                  
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2" for="company">
                  Organization
                </label>
                <input className="appearance-none block w-full text-black/70 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#75471c]" id="company" type="text" name="company" autocomplete="organization" />
              </div>              
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2" for="first-name">
                  First Name
                </label>
                <input required className="appearance-none block w-full text-black/70 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#75471c]" id="first-name" name="first-name" type="text" autocomplete="given-name" />
                <p className="text-[#75471c] text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2" for="last-name">
                  Last Name
                </label>
                <input required className="appearance-none block w-full text-black/70 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#75471c]" id="last-name" type="text" name="surname" autocomplete="family-name" />
                <p className="text-[#75471c] text-xs italic">Please fill out this field.</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">              
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2" for="email">
                  Email
                </label>
                <input required className="appearance-none block w-full text-black/70 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#75471c]" id="email" type="email" name="email" autocomplete="email"  />
                <p className="text-[#75471c] text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2" for="tel">
                  Phone Number
                </label>
                <input required className="appearance-none block w-full text-black/70 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#75471c]" id="tel" type="tel" name="tel" autocomplete="tel" />
                <p className="text-[#75471c] text-xs italic">Please fill out this field.</p>
              </div>
            </div>            
            <button type="submit" className="bg-[#75471c] hover:bg-[#58381b] text-white font-semibold rounded-md py-3 mt-10 px-4 w-full">Submit</button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm