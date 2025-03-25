'use client'

import { CircleCheckBig, SquareX, TriangleAlert, X } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppContext } from "@/app/RootLayoutClient";
import dayjs from 'dayjs';
import './style.scss'

const RegistrationForm = () => {
  const { registrationDetails, setRegistrationDetails } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false)
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    event: registrationDetails.eventName || '',
    company: '',
    firstName: '',
    lastName: '',
    gender: '',
    location: '',
    email: '',
    phone: '',
    amount: 'K2000',
    eventDate: dayjs('2025-04-04', 'YYYY-MM-DD'),
  })

  useEffect(() => {
    const header = document.querySelector('.header')
    if (header) header.style.zIndex = "0"
    return () => { if (header) header.style.zIndex = "99" }
  }, [])

  const closeModal = () => {
    setRegistrationDetails({ eventImage: '', eventName: '' })
  }

  const handleDateChange = (date) => {
    setFormData({ ...formData, eventDate: date });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const getOrdinalSuffix = (day) => {
    const j = day % 10;
    const k = day % 100;
    if (j === 1 && k !== 11) { return 'st'; }
    if (j === 2 && k !== 12) { return 'nd'; }
    if (j === 3 && k !== 13) { return 'rd'; }
    return 'th';
  };

  const allowedDates = [
    dayjs('2025-04-04', 'YYYY-MM-DD'),
    dayjs('2025-04-11', 'YYYY-MM-DD'),
  ];

  const shouldDisableDate = (date) => {
    return !allowedDates.some((allowedDate) => date.isSame(allowedDate, 'day'));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      amount: formData.amount,
      event: formData.event,
      eventDate: formData.eventDate 
        ? dayjs(formData.eventDate).format('D') + getOrdinalSuffix(dayjs(formData.eventDate).date()) + ' ' + dayjs(formData.eventDate).format('MMMM YYYY') 
        : 'Not Provided',
    };

    emailjs
      .send(
        'service_zggzve4',
        'template_88go7xa',
        emailParams,
        'xyyTpx2P0EcwJw0mG'
      )
      .then(
        () => {
          setSuccess(true)
          setTimeout(() => {
            closeModal();
          }, 8000);
        },
        () => {
          setFailed(true);
          setTimeout(() => {
            closeModal();
          }, 8000);
        }
      );
  };

  return (
    <div id='events-registration-form' className="flex-center min-h-screen w-screen fixed top-0 left-0 z-[100] overflow-auto md:overflow-hidden">
      <button className='absolute top-0 left-0 w-screen h-screen bg-black/80 p-4 z-0 cursor-auto' onClick={closeModal} />
      <div className="flex justify-center items-start pt-10 md:pt-0 bg-[#ebe1bc] h-[98vh] md:h-[90vh] w-[95%] md:w-[90%] overflow-auto relative z-[1]">
        <button className='absolute top-2 md:top-5 right-3 md:right-7' onClick={closeModal}>
          <SquareX color="#75471c" size={40} strokeWidth={1.5} />
        </button>

        {registrationDetails.eventImage && (
          <div className="w-1/2 h-full hidden lg:flex items-center justify-center p-5">
            <Image src={registrationDetails.eventImage} alt="Axxess" className="object-contain w-full h-full" />
          </div>
        )}
        <div className="py-8 md:px-8 md:py w-full lg:w-1/2 min-h-[100vh]">
          <h1 className="text-4xl font-semibold mb-4">Registration Form</h1>

          <form onSubmit={sendEmail} className='px-4 md:px-0 md:mt-10 lg:mt-0'>
            <div className="flex flex-wrap -mx-3 mb-6 gap-10 md:gap-0 mt-10 md:mt-5">              
              <div className="w-full md:w-1/2 px-3 md:mb-0">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2">
                  Organization
                </label>
                <input 
                  className="appearance-none block w-full text-black/70 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#75471c]" 
                  name="company" 
                  type="text" 
                  onChange={handleChange}
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2">
                  Event Date
                  <span className="text-[#75471c] mx-1 font-medium text-xs italic lowercase">{'(Required)'}</span>
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={formData.eventDate}
                    onChange={handleDateChange}
                    format="YYYY-MM-DD"
                    shouldDisableDate={shouldDisableDate}
                    defaultValue={dayjs('2025-04-04')}
                    slotProps={{ textField: { fullWidth: true, variant: "outlined" } }}
                    className='bg-white'
                  />
                </LocalizationProvider>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2">
                  First Name
                  <span className="text-[#75471c] mx-1 font-medium text-xs italic lowercase">{'(Required)'}</span>
                </label>
                <input 
                  required 
                  className="appearance-none block w-full text-black/70 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#75471c]" 
                  name="firstName" 
                  type="text" 
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2">
                  Last Name
                  <span className="text-[#75471c] mx-1 font-medium text-xs italic lowercase">{'(Required)'}</span>
                </label>
                <input 
                  required 
                  className="appearance-none block w-full text-black/70 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#75471c]" 
                  name="lastName" 
                  type="text" 
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6 md:mb-8">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2" for="gender">
                  Gender
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-[#75471c]"
                    id="gender"
                    onChange={handleChange}
                  >
                    <option value="" disabled selected className='text-slate-300 hidden'></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2" for="last-name">
                  Location
                </label>
                <input 
                  placeholder='Province, city'
                  className="placeholder-slate-200 appearance-none block w-full text-black/70 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#75471c]" id="last-name" type="text" name="surname" autocomplete="family-name"
                  onChange={handleChange}
                />  
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2">
                  Email
                  <span className="text-[#75471c] mx-1 font-medium text-xs italic lowercase">{'(Required)'}</span>
                </label>
                <input 
                  required 
                  placeholder='hello@gmail.com'
                  className="appearance-none block w-full text-black/70 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#75471c]" 
                  name="email" 
                  type="email" 
                  onChange={handleChange}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-black/70 text-xs font-bold mb-2">
                  Phone Number
                  <span className="text-[#75471c] mx-1 font-medium text-xs italic lowercase">{'(Required)'}</span>
                </label>
                <input 
                  required 
                  placeholder='+260974549983'
                  className="appearance-none block w-full text-black/70 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#75471c]" 
                  name="phone" 
                  type="tel" 
                  onChange={handleChange}
                />
              </div>
            </div>            
            <button
              type="submit"
              className="bg-[#75471c] hover:bg-[#58381b] text-white font-semibold rounded-md py-3 mt-5 px-4 w-full mb-5 md:mb-0"
              disabled={loading}  
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
      {success && (
        <div className='absolute flex-center top-0 left-0 w-screen p-4 h-screen z-[2] cursor-auto'>
          <button className='absolute top-0 left-0 w-screen h-screen bg-black/30 p-4 z-0 cursor-auto' onClick={closeModal} />
          <div className='relative overflow-hidden flex flex-col md:flex-row justify-center items-center gap-5 h-fit bg-[#edf7ed] px-10 py-20 text-[#2c522e] rounded-md shadow-2xl text-center'>                      
            <CircleCheckBig color="#2c522e" strokeWidth={3} size={100} />
            <div className='p-4 flex flex-col'>
              <h2 className='text-3xl font-extrabold mb-3'>Registration successful!</h2>
              <span>Check your email for next steps.</span>
            </div>
            <div className="absolute top-0 left-0 h-1 rounded-tl-lg bg-green-500 progress-bar w-full" />
          </div>
        </div>
      )}

      {failed && (
        <div className='absolute flex-center top-0 left-0 w-screen h-screen p-4 z-[2] cursor-auto'>
          <button className='absolute top-0 left-0 w-screen h-screen bg-black/30 p-4 z-0 cursor-auto' onClick={closeModal} />
          <div className='relative overflow-hidden flex flex-col md:flex-row justify-center items-center gap-5 h-fit bg-red-100 px-10 py-20 text-red-700 rounded-md shadow-2xl text-center'>          
            <TriangleAlert color="#dc2626" strokeWidth={3} size={100} />
            <div className=' flex flex-col'>
              <h2 className='text-3xl font-extrabold mb-3'>Something went wrong.</h2>
              <span>Please try again.</span>
            </div>
            <div className="absolute top-0 left-0 h-1 rounded-tl-lg bg-red-500 progress-bar w-full" />
          </div>
        </div>
      )}
      {/* <Alert severity="success" className='absolute z-[2]'>
        <AlertTitle>Success</AlertTitle>
        This is a success Alert with an encouraging title.
      </Alert> */}
    </div>
  )
}

export default RegistrationForm
