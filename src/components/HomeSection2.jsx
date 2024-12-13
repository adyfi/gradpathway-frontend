import React, { useEffect } from 'react'
import AOS from 'aos';
import { TiTick } from 'react-icons/ti';
import './_homesection2.scss'
export const HomeSection2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className='howitworks-wrapper'>
            <div className="container mb-5 ">
                <div className="row">

                    <p className='text-center m-0 fw-bolder text-secondary'>THIS IS HOW YOU LAND YOUR DREAM JOB</p>
                    <h1 className='text-center text-primary-2 mt-0'>Your dream career is waiting for you</h1>
                    <div className="col-12 text-center mb-5">
                        <h2 className='m-0'>How it works</h2>
                        <p>We know how painful the job search is. That's why we've created services to help you out every step of the way.</p>
                    </div>
                    
                    
                </div>
                <div className="row pt-5">
                    <div className='col-md-6' data-aos="fade-right" data-aos-delay="100">
                        <div className='howitworks-box'>
                            <div className='image-box'>
                                <img src='./howitwork-1.webp' alt='' className='img-fluid'/>
                            </div>
                            <div className='text-box'>
                                <h3>Discover Your Path</h3>
                                <p>Identify the Ideal Sector and Role Aligned to Your Goals by accessing the data that suits your skills and profile.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 '  data-aos="fade-left" data-aos-delay="200">
                        <div className='howitworks-box change-color'>
                            <div className='image-box'>
                                <img src='./howitwork-2.webp' alt='' className='img-fluid'/>
                            </div>
                            <div className='text-box'>
                                <h3>Build Your Professional Presence</h3>
                                <p>Strengthen Your CV, Cover Letter & LinkedIn for Success. Personalised Strategies and data of companies to Increase Your Profile Visibility and Attract Interview Calls</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'  data-aos="fade-right" data-aos-delay="200">
                        <div className='howitworks-box change-color'>
                            <div className='image-box'>
                                <img src='./howitwork-4.webp' alt='' className='img-fluid'/>
                            </div>
                            <div className='text-box'>
                                <h3>Upskill for specific roles</h3>
                                <p>Get job ready skills for us the get the specific role you are applying for to get relevant experience with project based experience and portfolio to impress the targeted employer. Identify the Ideal Sector and Role Aligned to Your Goals by accessing the data that suits your skills and profile.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6' data-aos="fade-left" data-aos-delay="200">
                        <div className='howitworks-box'>
                            <div className='image-box'>
                                <img src='./howitwork-3.webp' alt='' className='img-fluid'/>
                            </div>
                            <div className='text-box'>
                                <h3>Secure Your Future</h3>
                                <p>By getting certified and access to interview call scheduled by us with your potential employer and Ace the Interview and Land Your Dream Job</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-5">
                        <a href="" className='btn btn-primary px-5 py-3 rounded-pill'>
                            <h5 className='m-0'>
                                Find Out How
                            </h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
