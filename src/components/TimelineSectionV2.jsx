import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';

export const TimelineSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);

    return (
        <>
          <div className="row mb-3 mt-5">
                <div className="col-lg-8 mx-auto text-center">
                    <div className="lc-block mb-1">
                        <div editable="rich">
                            <h1 className='text-primary' data-aos="fade-up">Your Ideal Career is Ready & Waiting for you</h1>
                        </div>
                    </div>
                    <div className="lc-block">
                        <div editable="rich">
                            <p className="lead" data-aos="fade-up">We understand the challenges of job hunting, which is why we've designed services to support you at every stage of the process..</p>
                        </div>
                    </div>
                </div>
            </div>
        <div className="container py-5 timeline position-relative">
            <div className="timeline-item w-100 mb-4 py-4 text-light lc-block">
                <div className="timeline-img"></div>
                <div className="timeline-content" data-aos="fade-right">
                    <p editable="inline" className="lead">Step 1</p>
                    <h2 editable="inline" className="fw-bold rfs-12">Take Assessment</h2>
                    <div editable="rich">
                        <p>Take a personalized assessment to uncover your strengths, interests, and career potential.</p>
                    </div>
                </div>
            </div>
            <div className="timeline-item w-100 mb-4 py-4 text-light lc-block">
                <div className="timeline-img"></div>
                <div className="timeline-content" data-aos="fade-left">
                    <p editable="inline" className="lead">Step 2</p>
                    <h2 editable="inline" className="fw-bold rfs-12">Get Tips and Personalized Plan</h2>
                    <div editable="rich">
                        <p> Receive expert advice and a tailored action plan to achieve your career goals.</p>
                    </div>
                </div>
            </div>
            <div className="timeline-item w-100 mb-4 py-4 text-light lc-block">
                <div className="timeline-img"></div>
                    <div className="timeline-content" data-aos="fade-right">
                        <p editable="inline" className="lead">Step 3</p>
                    <h2 editable="inline" className="fw-bold rfs-12">Get Personalized Assistance</h2>
                    <div editable="rich">
                        <p>Work one-on-one with a dedicated advisor to guide you every step of the way.</p>
                    </div>
                </div>
            </div>
            <div className="timeline-item w-100 mb-4 py-4 text-light lc-block">
                <div className="timeline-img"></div>
                <div className="timeline-content" data-aos="fade-left">
                    <p editable="inline" className="lead">Step 4</p>
                    <h2 editable="inline" className="fw-bold rfs-12">Secure the Job</h2>
                    <div editable="rich">
                        <p>Apply with confidence, ace your interviews, and land the role you've always wanted.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex pt-4 pb-2 justify-content-center" data-aos="fade-up">
            <Link className="btn btn-primary px-5 py-3 rounded-pill" to={"/assesment"}> <h3 className="m-0 p-0"> Take Free Assessment</h3></Link>
        </div>
            <p className='text-center col-md-6 offset-md-3' data-aos="fade-up">Take the first step toward achieving your career goals with our free, personalized assessment. Discover how our services can help you stand out in the competitive job market and unlock your full potential.</p>
        </>
    )
}
