import React, { useEffect } from 'react'
import AOS from 'aos';

export const HomeHero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
      
    return (
        <div className="container" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
            <div className="row align-items-center px-2">
                <div className="col-12 col-md-7 col-lg-6">
                    <div className=" mb-4">
                            <p className='mb-0'>
                                Career Coaching to Propel your Career
                            </p>
                            <h1 className="display-5 fw-bolder">Your <span className='text-primary-2'>partner</span> in landing your <span className='text-primary-2'>next</span> career <span className='text-primary-2'>opportunity</span></h1>
                            <p>
                                We've helped over 100,000 people land their dream jobs. Let our job search strategies take you from resumes to better days.
                            </p>
                    </div>
                    {/* <div className="lc-block d-flex mb-5">
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
                            <h3 className="h2 mb-0 text-primary-2" editable="inline">1,500+</h3>
                            <span editable="inline" className="mb-0 text-muted"> Happy Students </span>
                        </div>
                    </div> */}
                    <a className="btn btn-outline-primary-2 px-4 rounded-pill mt-3 me-2" href="/assesment">Take Free AI Assessment</a>
                    <a className="btn btn-primary px-4 rounded-pill mt-3" href="/services">Explore Services</a>
                </div>
                <div className="col-12 col-md-5 col-lg-6">
                    <div className="lc-block"><img alt="banner" className="img-fluid mx-auto d-block" src={"/img/dkp.png"} loading="lazy" /></div>
                </div>
            </div>
        </div>
    )
}
