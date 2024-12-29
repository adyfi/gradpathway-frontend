import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { FaBlackTie, FaBookReader } from 'react-icons/fa'
import { GrResources } from 'react-icons/gr'
import { MdOutlineSupport } from 'react-icons/md'
import { PiTargetBold } from 'react-icons/pi'
import AOS from 'aos';
import './_homeaboutsection.scss';

export const HomeAboutSection = () => {
	useEffect(() => {
		AOS.init({
		  duration: 1000, 
		  once: true, 
		});
	  }, []);

	return (
		
			<div className="container py-5 py-md-6 why-choose-wrapper">
				<div className="row mb-4">
					<div className="col-md-12">
						<div className="lc-block text-center mb-2">
							<div editable="rich">
								<h2 className="display-5 text-primary-2 fw-bolder" data-aos="fade-up">Why Choose GradPathWay?&nbsp;</h2>
							</div>
						</div>
						<div className="lc-block text-center">
							<div editable="rich" data-aos="fade-up">
								<p className="">Navigating today's global job market is complex, especially for international students who need support aligning their skills with employer expectations. GradPathway is more than just an ed-tech platform - we're a career catalyst. Our approach combines advanced AI tools and a powerful ROI calculator to help you measure and maximize the impact of your academic investment. By focusing on project-based learning, tailored career services, and digital skill-building, we're committed to your long-term success.</p>
							</div>
						</div>
					</div>
				</div>

				<div className='why-choose-cards'>
					<div className="row mt-5">
						<div className="col-12 col-md-6 col-xl-3 mb-4">
							<div className="lc-block shadow-sm border border-primary rounded text-center card-box position-relative" data-aos="fade-right" data-aos-delay="100">
								<div className='card-image'>	
									<div className='h-100'>
										<div className='h-100'>
											<img src='./why-choose1.webp' alt='' className='img-fluid' />
										</div>
									</div>
								</div>
								<div className='card-text position-absolute'>
									<div className="h1 text-primary-2 lc-block rounded-circle d-flex justify-content-center align-items-center mx-auto mb-2">
										<FaBookReader />
									</div>
									<div className="lc-block">
										<div editable="rich">
											<h5 className="">Personalized Guidance</h5>
											<div className='ptag-content'>
												<p>Tailored assessments, plans, and one-on-one support to align your career with your unique goals.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-xl-3 mb-4">
							<div className="lc-block shadow-sm border border-primary rounded text-center card-box position-relative" data-aos="fade-up" data-aos-delay="200">
								<div className='card-image'>
									<img src='./why-choose2.webp' alt='' className='img-fluid' />
								</div>
								<div className='card-text position-absolute'>
									<div className="h1 text-primary-2 lc-block rounded-circle d-flex justify-content-center align-items-center mx-auto mb-2" >
							
										<GrResources />
									</div>
									<div className="lc-block">
										<div editable="rich">
											<h5 className="">Expert Resources</h5>
											<div className='ptag-content'>
												<p>Access proven strategies, tools, and tips to enhance your CV, LinkedIn profile, and interview skills.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-xl-3 mb-4">
							<div className="lc-block shadow-sm border border-primary rounded text-center card-box position-relative" data-aos="fade-up" data-aos-delay="300">
								<div className='card-image'>
									<img src='./why-choose4.webp' alt='' className='img-fluid' />
								</div>
								<div className='card-text position-absolute'>
									<div className="h1 text-primary-2 lc-block rounded-circle d-flex justify-content-center align-items-center mx-auto mb-2" >
										
										<MdOutlineSupport />
									</div>
									<div className="lc-block">
										<div editable="rich">
											<h5 className="">Comprehensive Support</h5>
											<div className='ptag-content'>
											<p>From career discovery to securing your dream job, we guide you every step of the way.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-xl-3 mb-4">
							<div className="lc-block shadow-sm border border-primary rounded text-center card-box position-relative" data-aos="fade-left" data-aos-delay="400">
								<div className='card-image'>
									<img src='./why-choose3.webp' alt='' className='img-fluid' />
								</div>
								<div className='card-text position-absolute'>
									<div className="h1 text-primary lc-block rounded-circle d-flex justify-content-center align-items-center mx-auto mb-2" >
										
										<PiTargetBold />
									</div>
									<div className="lc-block">
										<div editable="rich">
											<h5 className="">Proven Success</h5>
											<div className='ptag-content'>
											<p>Trusted by countless graduates to elevate their profiles and achieve career success.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		


	)
}
