'use client'

import Image from 'next/image';
import './style.scss'
import secretaryTraining from "@/public/elements/office-secretary.jpg";
import secretary from "@/public/elements/secretary.jpg";
import writing from "@/public/elements/writing.jpg";
import companyWriting from "@/public/elements/research.jpeg";
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import { useRef } from 'react';

const ShortCourses = () => {
	const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -500 : 500,
        behavior: "smooth",
      });
    }
  };

	const courses = [
		{ 
			title: `A Day in the Life of a Company Secretary`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: secretaryTraining,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
		{ 
			title: `The Do's and Don’ts of Minute Taking`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: companyWriting,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
		{ 
			title: `Effective Workplace Writing`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: writing,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
		{ 
			title: `The Role of a Company Secretary`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: secretary,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
		{ 
			title: `How to be effective in Meetings`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: companyWriting,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
		{ 
			title: `How to prepare for an Annual General Meetin`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: secretaryTraining,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
		{ 
			title: `Running efficient and effective Meetings in the workplace`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: secretary,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
		{ 
			title: `How to prepare for a Board Meeting`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: secretary,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
		{ 
			title: `Etiquette and Grooming Standards`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: secretary,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
		{ 
			title: `Overview of Company Secretarial Practice.`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: secretary,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
		{ 
			title: `Getting you Board ready`,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?`,
			image: secretary,
			actual_price: 'K2000',
			discounted_price: 'K1500',
		},
	]

  return (
    <section id='course-container' className='mt-24 md:-mt-10 px-0'>
			<h1 className='text-center text-[#5f3209]'>Customized Training / Short Courses</h1>
			<div className='flex gap-6 justify-center md:justify-end  md:mr-16 mt-10 mb-5'>
				<button className='flex items-center w-fit text-xl h-20 rounded-full' onClick={() => scroll("left")}>
					<CircleChevronLeft color="white" fill='#936133' strokeWidth={1.5} className='h-16 w-16' />
				</button>
				<button className='flex items-center w-fit text-xl h-20 rounded-full' onClick={() => scroll("Right")}>
					<CircleChevronRight color="white" fill='#936133' strokeWidth={1.5} className='h-16 w-16' />
				</button>
			</div>
			<div>
				<ul ref={scrollRef} className="cards scroll-smooth no-scrollbar">
					{courses.map((course, i) => (
						<li>
							<div className="card">
								<Image src={course.image} className="card__image" alt="Axxess" />
								<div className="card__overlay">
										<div className="card__header">
										<svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 
										<div className="card__header-text">
												<h3 className="card__title">{course.title}</h3>            
												<div className='flex justify-between items-center mt-2'>
												<a href='/contact-us' className="card__status px-2 py-1 border-2 border-[#936133] rounded-xl cursor-pointer">Enroll</a>
												<div className='text-base flex gap-2'>
													<span className='line-through'>{course.actual_price}</span>
													<span className=''>{course.discounted_price}</span>
												</div>
												</div>
										</div>
										</div>
										<p className="card__description">{course.description}</p>
								</div>
							</div>      
						</li>
					))}
				</ul>
			</div>			
    </section>
  )
}

export default ShortCourses