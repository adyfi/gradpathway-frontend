import React, { useEffect, useState } from 'react'
import { MentorWhySection } from '../../components/MentorWhySection'
import { ButtonPrimary } from '../../components/buttons/ButtonPrimary';
import AOS from 'aos';

export const Mentor = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
    return (
        <>
        <div className="container" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
            <div className="row align-items-center px-2">
                <div className="col-12 col-md-5 col-lg-6">
                    <div className="lc-block"><img alt="banner" className="img-fluid mx-auto d-block" src={"/about-card.png"} loading="lazy" /></div>
                </div>
                <div className="col-12 col-md-7 col-lg-6 mt-4 pt-5">
                    <div className="lc-block mb-4"> 
                        <div editable="rich" >
                            <h1 className="text-primary-2 display-5 fw-bolder" data-aos="fade-left">The Ultimate Monetization Platform for Mentors</h1>
                            <p data-aos="fade-left">
                                Unlock the full potential of your expertise with GradPathway, the all-in-one tool designed to help mentors build and grow their revenue streams. Seamlessly connect 1:1 with your followers to provide personalized guidance, host interactive webinars to engage larger audiences, or sell your expertly crafted guides to share your knowledge at scale.
                                <br /> <br />
                                GradPathway empowers you to focus on what you do best—mentoring—while we handle the rest. Whether you're looking to enhance your personal brand, expand your reach, or create new income opportunities, GradPathway makes it simple and effective. Your expertise, your way—monetize with ease using GradPathway!
                            </p>
                        </div>
                    </div>
                    <div className="lc-block d-flex mb-5">
                        <div className="pe-3" data-aos="fade-right">
                            <h3 className="h2 mb-0 text-primary-2" editable="inline">100%</h3>
                            <span editable="inline" className="mb-0 text-muted"> Satisfaction </span>
                        </div>
                        <div className="border-start"></div>
                        <div className="px-3" data-aos="fade-up">
                            <h3 className="h2 mb-0 text-primary-2" editable="inline">24/7</h3>
                            <span editable="inline" className="mb-0 text-muted"> Support </span>
                        </div>
                        <div className="border-start"></div>
                        <div className="ps-3" data-aos="fade-left">
                            <h3 className="h2 mb-0 text-primary-2" editable="inline">1500+</h3>
                            <span editable="inline" className="mb-0 text-muted">Happy Clients</span>
                        </div>
                    </div>
                    
                    <ButtonPrimary title={'Register as Mentor'} link={'/mentor-registration'} /> 
                </div>
           
            </div>
        </div>
        <MentorWhySection />
        </>
        
    )
}
