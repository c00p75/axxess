'use client'

import Image from 'next/image';
import './style.scss'
import secretaryTraining from "@/public/elements/office-secretary.jpg";
import secretary from "@/public/elements/secretary.jpg";
import writing from "@/public/elements/writing.jpg";
import companyWriting from "@/public/elements/research.jpeg";
import course3 from "@/public/backgrounds/course-3.png";
import course4 from "@/public/backgrounds/course-4.png";
import course6 from "@/public/backgrounds/course-6.png";
import course7 from "@/public/backgrounds/course-7.png";
import course8 from "@/public/backgrounds/course-8.png";
import course9 from "@/public/backgrounds/course-9.png";
import course1 from "@/public/backgrounds/course-1.png";
import course10 from "@/public/backgrounds/course-10.png";
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
			description: `Equip your board with the knowledge and tools needed for effective governance, strategic decision-making, and compliance with best practices.`,
			image: course4,
		},
		{ 
			title: `Overview of Company Secretarial Practice`,
			description: `Gain a comprehensive understanding of company secretarial duties, regulatory compliance, and corporate governance principles.`,
			image: course8,
		},
		{ 
			title: `Etiquette and Grooming Standards`,
			description: `Master professional etiquette, appearance, and behavior to enhance your personal brand and workplace confidence.`,
			image: course10,
		},
		{ 
			title: `How to Prepare for a Board Meeting`,
			description: `Learn the key steps to organize a successful board meeting, from agenda setting to document preparation and stakeholder coordination.`,
			image: course7,
		},
		{ 
			title: `Running Efficient and Effective Meetings in the Workplace`,
			description: `Develop skills to structure, facilitate, and manage workplace meetings that drive productivity and results.`,
			image: course3,
		},
		{ 
			title: `How to Prepare for an Annual Meeting`,
			description: `Understand the legal and procedural requirements for annual meetings, including agenda setting, reporting, and stakeholder engagement.`,
			image: companyWriting,
		},
		{ 
			title: `How to Be Effective in Meetings `,
			description: `Enhance your participation, communication, and decision-making skills to contribute meaningfully in any meeting setting.`,
			image: course9,
		},
		{ 
			title: ` 	The Role of a Company Secretary`,
			description: `Explore the critical functions of a company secretary, including governance support, compliance, and board advisory responsibilities.`,
			image: course1,
		},
		{ 
			title: `Effective Workplace Writing`,
			description: `Improve your business writing skills to communicate clearly and professionally in emails, reports, and official documents.`,
			image: writing,
		},
		{ 
			title: `The Do’s and Don’ts of Minute Taking`,
			description: `Learn best practices for accurate, concise, and legally compliant minute-taking to capture key discussions and decisions.`,
			image: secretary,
		},		
	]

  return (
    <div id='course-container' className='px-0'>
			<h1 className='text-center text-[#5f3209] px-5 mt-20 md:mt-28'>Customized Training / Short Courses</h1>
			<div className='hidden md:flex gap-6 justify-center md:justify-end md:mr-16 mt-10 mb-5'>
				<button className='flex items-center w-fit text-xl h-20 rounded-full' onClick={() => scroll("left")}>
					<CircleChevronLeft color="white" fill='#936133' strokeWidth={1.5} className='h-16 w-16' />
				</button>
				<button className='flex items-center w-fit text-xl h-20 rounded-full' onClick={() => scroll("Right")}>
					<CircleChevronRight color="white" fill='#936133' strokeWidth={1.5} className='h-16 w-16' />
				</button>
			</div>
			<div className='mt-10 md:mt-0'>
				<ul ref={scrollRef} className="cards scroll-smooth no-scrollbar">
					{courses.map((course, i) => (
						<li>
							<div className="card">
								<Image src={course.image} className="card__image" alt="Axxess" />
								<div className="card__overlay">
										<div className="card__header">
										<svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 
										<div className="card__header-text flex gap-5">
												<h3 className="card__title">{course.title}</h3>            
												<div className='flex justify-between items-center'>
													<a href='/contact-us' className="card__status px-2 py-1 border-2 border-white rounded-xl cursor-pointer">Enroll</a>												
												</div>
										</div>
										</div>
										<p className="card__description text-base">{course.description}</p>
								</div>
							</div>      
						</li>
					))}
				</ul>
			</div>	
			<div className='md:hidden flex gap-6 justify-center md:justify-end  md:mr-16s mb-5'>
				<button className='flex items-center w-fit text-xl h-20 rounded-full' onClick={() => scroll("left")}>
					<CircleChevronLeft color="white" fill='#936133' strokeWidth={1.5} className='h-16 w-16' />
				</button>
				<button className='flex items-center w-fit text-xl h-20 rounded-full' onClick={() => scroll("Right")}>
					<CircleChevronRight color="white" fill='#936133' strokeWidth={1.5} className='h-16 w-16' />
				</button>
			</div>		
    </div>
  )
}

export default ShortCourses