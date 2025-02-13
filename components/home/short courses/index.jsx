import Image from 'next/image';
import './style.scss'
import secretaryTraining from "@/public/elements/secretary-training.jpg";
import secretary from "@/public/elements/secretary.jpg";
import companyWriting from "@/public/elements/research.jpg";
import { CircleArrowRight } from 'lucide-react';

const ShortCourses = () => {
  return (
    <section id='course-container' className='mt-24 md:-mt-10'>
			<h1 className='text-center text-[#5f3209]'>Customized Training / Short Courses</h1>
			<div className='my-0 md:my-20'>
				<ul className="cards">
					<li>
						<div href="" className="card">
							<Image src={secretaryTraining} className="card__image" alt="" />
							<div className="card__overlay">
									<div className="card__header">
									<svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 
									<div className="card__header-text">
											<h3 className="card__title">A Day in the Life of a Company Secretary</h3>            
											<div className='flex justify-between items-center mt-2'>
											<span className="card__status px-2 py-1 border-2 border-[#936133] rounded-xl cursor-pointer">Enroll</span>
											<div className='text-base flex gap-2'>
												<span className='line-through'>K2000</span>
												<span className=''>K1500</span>
											</div>
											</div>
									</div>
									</div>
									<p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
							</div>
						</div>      
					</li>

					<li>
						<div href="" className="card">
							<Image src={companyWriting} className="card__image" alt="" />
							<div className="card__overlay">
									<div className="card__header">
									<svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 
									<div className="card__header-text">
											<h3 className="card__title">The Do&apos;s and Don’ts of Minute Taking</h3>            
											<div className='flex justify-between items-center mt-2'>
											<span className="card__status px-2 py-1 border-2 border-[#936133] rounded-xl cursor-pointer">Enroll</span>
											<div className='text-base flex gap-2'>
												<span className='line-through'>K2000</span>
												<span className=''>K1500</span>
											</div>
											</div>
									</div>
									</div>
									<p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
							</div>
						</div>      
					</li>

					<li>
						<div href="" className="card">
							<Image src={secretaryTraining} className="card__image" alt="" />
							<div className="card__overlay">
									<div className="card__header">
									<svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 
									<div className="card__header-text">
											<h3 className="card__title">Effective Workplace Writing</h3>            
											<div className='flex justify-between items-center mt-2'>
											<span className="card__status px-2 py-1 border-2 border-[#936133] rounded-xl cursor-pointer">Enroll</span>
											<div className='text-base flex gap-2'>
												<span className='line-through'>K2000</span>
												<span className=''>K1500</span>
											</div>
											</div>
									</div>
									</div>
									<p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
							</div>
						</div>      
					</li>

					<li>
						<div href="" className="card">
							<Image src={secretary} className="card__image object-bottom" alt="" />
							<div className="card__overlay">
									<div className="card__header">
									<svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 
									<div className="card__header-text">
											<h3 className="card__title">The Role of a Company Secretary</h3>            
											<div className='flex justify-between items-center mt-2'>
											<span className="card__status px-2 py-1 border-2 border-[#936133] rounded-xl cursor-pointer">Enroll</span>
											<div className='text-base flex gap-2'>
												<span className='line-through'>K2000</span>
												<span className=''>K1500</span>
											</div>
											</div>
									</div>
									</div>
									<p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
							</div>
						</div>      
					</li>
				</ul>
			</div>

			<div className='flex-center md:my-28 mb-20 md:mb-28'>
				<button className='flex items-center w-fit text-xl gap-5 bg-[#936133] text-white px-5 py-3 rounded-full '>
					<span>View all courses</span>
					<CircleArrowRight color="#936133" fill='white' strokeWidth={1.5} className='h-10 w-10' />
				</button>
			</div>
    </section>
  )
}

export default ShortCourses