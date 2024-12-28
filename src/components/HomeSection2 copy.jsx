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
        <div className="container mb-5 howitworks-wrapper">
            <div className="row">

                <p className='text-center m-0 fw-bolder text-secondary'>THIS IS HOW YOU LAND YOUR DREAM JOB</p>
                <h1 className='text-center text-primary-2 mb-5 mt-0'>Your dream career is waiting for you</h1>
                <div className="col-md-6">
                    <h2 className='m-0'>How it works</h2>
                    <p className='col-12 col-md-10 m-0'>We know how painful the job search is. That's why we've created services to help you out every step of the way.</p>
                    <div className="text-center">
                        <img src="./section2.png" width={'75%'} alt="section 2" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="lc-block d-sm-flex align-items-center mb-3 overflow-hidden position-relative">
                        <div className="d-inline-flex">
                            <div>
                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" className="text-success">
                                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                                </svg>
                            </div>

                            <div className="ms-3 align-self-center" editable="rich">
                                <h4 className='fw-bolder'>
                                    Discover Your Path
                                </h4>
                                <p>
                                    Identify the Ideal Sector and Role Aligned to Your Goals by accessing the data that suits your skills and profile.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lc-block d-sm-flex align-items-center mb-3">
                        <div className="d-inline-flex">
                            <div>
                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" className="text-success">
                                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                                </svg>
                            </div>

                            <div className="ms-3 align-self-center" editable="rich">
                                <h4 className='fw-bolder'>
                                    Build Your Professional Presence
                                </h4>
                                <p>
                                    Strengthen Your CV, Cover Letter & LinkedIn for Success. Personalised Strategies and data of companies to Increase Your Profile Visibility and Attract Interview Calls
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lc-block d-sm-flex align-items-center mb-3">
                        <div className="d-inline-flex">
                            <div>
                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" className="text-success">
                                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                                </svg>
                            </div>

                            <div className="ms-3 align-self-center" editable="rich">
                                <h4 className='fw-bolder'>
                                    Upskill for specific roles
                                </h4>
                                <p>
                                    Get job ready skills for us the get the specific role you are applying for to get relevant experience with project based experience and portfolio to impress the targeted employer.
                                    Identify the Ideal Sector and Role Aligned to Your Goals by accessing the data that suits your skills and profile.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lc-block d-sm-flex align-items-center mb-3">
                        <div className="d-inline-flex">
                            <div>
                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" className="text-success">
                                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                                </svg>
                            </div>

                            <div className="ms-3 align-self-center" editable="rich">
                                <h4 className='fw-bolder'>
                                    Secure Your Future
                                </h4>
                                <p>
                                    By getting certified and access to interview call scheduled by us with your potential employer and Ace the Interview and Land Your Dream Job
                                </p>
                            </div>
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
            <div className="row">
                <div className='col-md-6'>
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
                <div className='col-md-6 '>
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
                <div className='col-md-6'>
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
                <div className='col-md-6'>
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
            </div>
        </div>
    )
}
