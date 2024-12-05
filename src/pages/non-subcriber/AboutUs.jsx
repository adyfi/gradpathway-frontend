import React, { useEffect } from 'react';
import { Testimonials } from '../../components/Testimonials';
import AOS from 'aos';

const AboutUs = () => {
    useEffect(() => {
		AOS.init({
		  duration: 1000, 
		  once: true, 
		});
	  }, []);
    return <>
    
    <div className="container mt-5 pt-5">
        <div className="row align-items-md-center mb-5">
            <div className="col-md-12" data-aos="fade-up">
                <div className="lc-block text-center"><span className="small mt-4 d-block">About us</span>
                    <h2 className="display-2 mb-0 text-primary-2 fw-bolder"><b>About GradPathWay </b></h2>
                    <p> We help students achieve desired careers by innovating their skills</p>
                </div>
            </div>
        </div>
        <div className="row align-items-md-center mb-5">
            <div className="col-lg-6 pr-5" data-aos="fade-right">
                <div className="lc-block py-1">
                    <span className="badge bg-primary">GradPathWay</span>
                </div>
                <div className="lc-block mb-2">
                    <h1 className='fw-bolder display-4'>At GradPathWay</h1>
                </div>
                <div className="lc-block">
                    <div className="row">
                        <div className="col-6">
                            <div className="lc-block mb-4">
                                    <p className="h1 m-0">15+</p>
                                    <p className="small text-uppercase">Services</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="lc-block mb-4">
                                    <p className="h1 m-0">27/7</p>
                                    <p className="small text-uppercase">Assistant</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="lc-block mb-4">
                                    <p className="h1 m-0">100+</p>
                                    <p className="small text-uppercase">Member over the world</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="lc-block mb-4">
                                    <p className="h1 m-0">1500+</p>
                                    <p className="small text-uppercase">Happy Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lc-block text-muted">
                    <div editable="rich">
                        <p> We believe that your international education journey should culminate in a rewarding career. Our AI-powered platform is designed to elevate your job search experience, ensuring you're not just ready but equipped to stand out in competitive job markets worldwide.</p>

                        <h3 className='text-dark'>Our Vision & Mission</h3>   
                        <p>We believe that your international education journey should culminate in a rewarding career. Our AI-powered platform is designed to elevate your job search experience, ensuring you're not just ready but equipped to stand out in competitive job markets worldwide.</p> 

                        <h3 className='text-dark'>Why Choose GradPathWay?</h3>
                        <p>At GradPathWay, we are committed to providing you with the tools, resources, and guidance you need to succeed in the global job market. With access to personalized career advice, skill-building resources, and tailored job opportunities, our platform ensures that you are not only prepared but also positioned for success. Join us today and take the next step toward a thriving career with confidence.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3" data-aos="fade-left">
                <div className="lc-block mb-4">
                    <div className="card shadow-sm border-light">
                        <img src="https://images.unsplash.com/photo-1525296143957-b62256c593bf?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="Featured image 1" className="card-img-top" loading="lazy" />
                        <div className="card-body">
                            <h3 className="card-title">Our Vision</h3>
                            <h4 className="card-subtitle">Shaping Futures</h4>
                            {/*     <p className="card-text">Some quick example text to build on the card title</p> */}
                        </div>
                    </div>
                </div>
                <div className="lc-block">
                    <div className="card shadow-sm border-light">
                        <img src="https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="Featured image 2" className="card-img-top" loading="lazy" />
                        <div className="card-body">
                            <h3 className="card-title">Our Impact</h3>
                            <h4 className="card-subtitle">Global Reach</h4>
                            {/*     <p className="card-text">Some quick example text to build on the card title</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-4 mt-sm-0 align-self-center" data-aos="fade-left">
                <div className="lc-block">
                    <div className="card shadow-sm border-light">
                        <img src="https://images.unsplash.com/photo-1507831228884-93d43e81a99d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=632&amp;q=80" alt="Featured image 3" className="card-img-top" loading="lazy" />
                        <div className="card-body">
                            <h3 className="card-title">Our Values</h3>
                            <h4 className="card-subtitle">Driven by Excellence</h4>
                            {/*     <p className="card-text">Some quick example text to build on the card title</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Testimonials />
    </>
};

export default AboutUs;
