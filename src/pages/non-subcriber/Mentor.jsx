import React from 'react'
import { MentorWhySection } from '../../components/MentorWhySection'

export const Mentor = () => {
    return (
        <>
        <div className="container" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
            <div className="row align-items-center px-2">
                <div className="col-12 col-md-5 col-lg-6">
                    <div className="lc-block"><img alt="banner" className="img-fluid mx-auto d-block" src={"/about-card.png"} loading="lazy" /></div>
                </div>
                <div className="col-12 col-md-7 col-lg-6 mt-4 pt-5">
                    <div className="lc-block mb-4"> 
                        <div editable="rich">
                            <h1 className="text-primary-2 display-5 fw-bolder">The Ultimate Monetization Platform for Mentors</h1>
                            <p>
                                Unlock the full potential of your expertise with gradpathway, the all-in-one tool designed to help mentors build and grow their revenue streams. Seamlessly connect 1:1 with your followers to provide personalized guidance, host interactive webinars to engage larger audiences, or sell your expertly crafted guides to share your knowledge at scale.
                                <br /> <br />
                                gradpathway empowers you to focus on what you do best—mentoring—while we handle the rest. Whether you're looking to enhance your personal brand, expand your reach, or create new income opportunities, gradpathway makes it simple and effective. Your expertise, your way—monetize with ease using gradpathway!
                            </p>
                        </div>
                    </div>
                    <div className="lc-block d-flex mb-5">
                        <div className="pe-3">
                            <h3 className="h2 mb-0 text-primary-2" editable="inline">100%</h3>
                            <span editable="inline" className="mb-0 text-muted"> Satisfaction </span>
                        </div>
                        <div className="border-start"></div>
                        <div className="px-3">
                            <h3 className="h2 mb-0 text-primary-2" editable="inline">24/7</h3>
                            <span editable="inline" className="mb-0 text-muted"> Support </span>
                        </div>
                        <div className="border-start"></div>
                        <div className="ps-3">
                            <h3 className="h2 mb-0 text-primary-2" editable="inline">1500+</h3>
                            <span editable="inline" className="mb-0 text-muted">Happy Clients</span>
                        </div>
                    </div>
                    <a className="btn btn-primary px-4 rounded-pill mt-3" href="/mentor-registration">Register as Mentor</a>
                </div>
           
            </div>
        </div>
        <MentorWhySection />
        </>
        
    )
}
