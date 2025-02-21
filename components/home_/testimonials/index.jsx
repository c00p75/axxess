'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import tetimonial1 from '@/public/elements/face.jpg';
import tetimonial2 from '@/public/elements/nair.jpg';
import './style.scss';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonials = [
        {
            text: "I have tried a lot of other services but Axxess is something out of this world! Their service is really outstanding, which is why I recommend this company to all my friends!",
            name: "Celine Meena Nair",
            image: tetimonial2,
        },
        {
            text: "Their communication is prompt and always clear! I highly recommend their services for anyone looking for an  upgrade to their company's corporate government strategy!",
            name: "Celine Meena Nair",
            image: tetimonial2,
        },
        {
            text: "Excellent service and amazing services! The quality of their services is top-notch, and their customer service is outstanding!",
            name: "Celine Meena Nair",
            image: tetimonial2,
        }
    ];

    useEffect(() => {
			const interval = setInterval(() => {
				setActiveIndex((prevActive) => (prevActive <= 1 ? prevActive + 1 : 0));
			}, 3000);
	
			return () => clearInterval(interval); // Cleanup to prevent memory leaks
		}, [activeIndex]);

    return (
        <section className="bg-white py-12 testimonial">
					<div className="container mx-auto px-6 lg:px-12 pt-10">
						<div className="flex flex-col lg:flex-row items-center justify-around">                    
							<div className="hidden lg:flex flex-col space-y-4 w-full flex-[2] testimonial-container">
								{testimonials.map((testimonial, index) => (
									<button
										key={index}
										className={`testimonial-button rounded-full border-2 p-1 w-20 h-20 transition ${activeIndex === index ? 'border-blue-500 active' : 'border-gray-300'}`}
										onClick={() => setActiveIndex(index)}
									>
										<figure className='flex-center'>
											<Image src={testimonial.image} className="rounded-full" alt={`Testimonial ${index}`} />
										</figure>
									</button>
								))}
							</div>

							<div className="text-center w-auto flex-[3]">
								<h3 className="text-gray-700 font-semibold text-lg">WHAT OUR CLIENTS SAY</h3>
								<h1 className="font-bold mb-6">TESTIMONIALS</h1>

								<div className="relative">
									<div className="p-6 text-gray-700 transition-opacity">
										<p className="text-lg italic">"{testimonials[activeIndex].text}"</p>
										<h3 className="mt-4 font-semibold uppercase">{testimonials[activeIndex].name}</h3>
									</div>
								</div>
									
								<div className="flex justify-center mt-6 space-x-3">
										{testimonials.map((_, index) => (
											<button
												key={index}
												className={`w-3 h-3 rounded-full transition ${activeIndex === index ? 'bg-[#936133]' : 'bg-gray-300'}`}
												onClick={() => setActiveIndex(index)}
											></button>
										))}
								</div>
							</div>
						</div>
					</div>
        </section>
    );
};

export default Testimonials;
