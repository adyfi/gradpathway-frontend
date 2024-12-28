import React, { useEffect, useState } from 'react';
import { FaHandPointRight, FaPlusCircle } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const ToggleSwitch = ({ planToggle, setPlanToggle }) => (
    <label className={"switch round"}>
        <input type="checkbox" checked={planToggle} onChange={() => setPlanToggle(!planToggle)} />
        <span className={"slider round"} />
    </label>
);

const ServicesBundle = () => {
    const [planToggle, setPlanToggle] = useState(false)
    const [activeBundle, setActiveBundle] = useState('foundation')

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return <>
        <div className="container pb-5 mt-15vh" id='plans'>
            <div className="row">
                <div className="col-md-12 text-center" data-aos="fade-up">
                    <div className="lc-block mb-4">
                        <span editable="inline" className="small mt-4 d-block fw-bolder m-0">Join us to Secure Your Dream Job</span>
                        <h2 editable="inline" className="display-5 mb-0 fw-bold text-primary-2 m-0">How GradPathway's Service Bundles Work</h2>
                        <p editable="inline" className='col-md-6 offset-md-3'>Step-by-Step Process for Plan Delivery!</p>
                    </div>
                </div>
            </div>
            {/* <div className="d-flex justify-content-center align-items-center gap-3" data-aos="fade-up" >
                <span className={`${!planToggle ? 'text-primary' : 'text-dark'} h3 fw-bolder`}>Monthly</span>
                <ToggleSwitch planToggle={planToggle} setPlanToggle={setPlanToggle} />
                <span className={`${planToggle ? 'text-primary' : 'text-dark'} h3 fw-bolder`}>Yearly</span>
            </div> */}
            <div className="row gap-2" data-aos="fade-up">
                <button className={`col-md-3 offset-md-3 col-10 offset-1 btn ${activeBundle === 'foundation' ? 'btn-primary':'btn-outline-primary-2'} mb-3 px-5 py-3`} onClick={() => setActiveBundle('foundation')}>
                    <span className='h5'>
                        Foundation Package
                    </span>
                </button>

                <button className={`col-md-3  offset-md-0 col-10 offset-1 btn ${activeBundle === 'advance' ? 'btn-primary':'btn-outline-primary-2'} mb-3 px-5 py-3`} onClick={() => setActiveBundle('advance')}>
                    <span className='h5'>
                        Advanced Package
                    </span>
                </button>
            </div>

            <div className="row text-center mt-5">
                <h2 className='display-5  text-primary-2' data-aos="fade-up">{activeBundle === 'foundation' ? 'Foundation Package': activeBundle ===  'advance' ? 'Advance Package': ''}: How it Works</h2>
                <p className='col-md-6 offset-md-3' data-aos="fade-up" data-aos-delay="100">
                    You'll leave with a powerful digital presence and targeted applications to confidently apply for jobs.
                </p>
            </div>

            <div className="row">
                <div className="col-md-3 border p-3 mb-4 rounded bg-light" data-aos="fade-up" style={{ position: 'sticky', top: '15vh', maxHeight: '300px' }}>

                    {
                        activeBundle === 'foundation' ? <>
                            <h2 className='text-primary-2'>Price: £99</h2>
                            <ol>
                                <li>
                                    Everything in Plan 1
                                </li>
                                <li>
                                    Personalized Interview Answers
                                </li>
                                <li>
                                    Weekly Job Subscription
                                </li>
                                <li>
                                    Subscription Bundle Access
                                </li>
                            </ol>
                        </> : <>
                            <h2 className='text-primary-2'>Price: £149</h2>
                            <ol>
                                <li>
                                    Sign Up and Access
                                </li>
                                <li>
                                    CV, Cover Letter, and LinkedIn Review
                                </li>
                                <li>
                                    Free Consulting Call
                                </li>
                                <li>
                                    3 ATS-Friendly Resumes and Cover Letters
                                </li>
                            </ol>
                        </>
                    }
                </div>
                {
                    activeBundle === 'foundation' ?

                        <div className="col-md-9">
                            <div className="col-12 mb-4 p-4 border rounded bg-light" data-aos="fade-up" data-aos-delay="200">
                                <h3>
                                    Step 1: Sign Up and Access
                                </h3>
                                <ol>
                                    <li>Once enrolled in the Foundation Package, you'll receive login credentials to access your personalized dashboard on GradPathway.</li>
                                    <li>The dashboard will have dedicated sections for document uploads, progress tracking, and resource downloads.</li>
                                </ol>
                            </div>
                            <div className="col-12 mb-4 p-4 border rounded bg-light" data-aos="fade-up" data-aos-delay="200">
                                <h3> Step 2: CV, Cover Letter, and LinkedIn Review</h3>
                                <ol>
                                    <li>Step 1: Upload your current CV, cover letter, and LinkedIn profile link to your dashboard. </li>
                                    <li>Step 2: Our career experts will professionally enhance your CV, cover letter, and LinkedIn profile. </li>
                                    <li>Step 3: You'll receive a polished version of your CV and cover letter along with a custom LinkedIn banner and updated profile content. </li>
                                </ol>
                            </div>
                            <div className="col-12 mb-4 p-4 border rounded bg-light" data-aos="fade-up" data-aos-delay="200">
                                <h3>Step 3: Free Consulting Call</h3>
                                <ol>
                                    <li>Step 1: Schedule your free consulting call through your dashboard. </li>
                                    <li>Step 2: In the call, our consultant will discuss your career goals and provide actionable insights for targeting specific roles. </li>
                                </ol>
                            </div>
                            <div className="col-12 mb-4 p-4 border rounded bg-light" data-aos="fade-up" data-aos-delay="200">
                                <h3>Step 4: 3 ATS-Friendly Resumes and Cover Letters</h3>
                                <ol>
                                    <li>Step 1: Share details about the five job roles you want to target. </li>
                                    <li>Step 2: We will craft ATS-friendly versions of your CV and cover letters tailored to these roles. </li>
                                    <li>Step 3: Download the customized documents directly from your dashboard. </li>
                                </ol>
                            </div>

                        </div>
                        :
                        <div className="col-md-9">
                            <div className="col-12 mb-4 p-4 border rounded bg-light" data-aos="fade-up" data-aos-delay="200">
                                <h3>
                                    Step 1: Everything in Plan 1
                                </h3>
                                <ol>
                                    <li>All the features from the Foundation Package will be included, delivered with the same step-by-step process.</li>
                                </ol>
                            </div>
                            <div className="col-12 mb-4 p-4 border rounded bg-light" data-aos="fade-up" data-aos-delay="200">
                                <h3> Step 2: Personalized Interview Answers</h3>
                                <ol>
                                    <li>Share details about your work experience, education, and specific projects through a structured form on the dashboard.</li>
                                    <li>Receive a document with personalized, scenario-based interview answers designed to align with your profile and potential interview questions.</li>
                                </ol>
                            </div>
                            <div className="col-12 mb-4 p-4 border rounded bg-light" data-aos="fade-up" data-aos-delay="200">
                                <h3>Step 3: Weekly Job Subscription</h3>
                                <ol>
                                    <li>Set up your job preferences (e.g., industries, locations, and job roles) on the dashboard.</li>
                                    <li>Every week, you'll receive a curated list of job openings tailored to your preferences.</li>
                                    <li>View job links and application tips directly on your dashboard.</li>
                                </ol>
                            </div>
                            <div className="col-12 mb-4 p-4 border rounded bg-light" data-aos="fade-up" data-aos-delay="200">
                                <h3>Step 4: Subscription Bundle Access</h3>
                                <ol>
                                    <li>Gain access to a comprehensive repository of essential resources, including:
                                        <ul>
                                            <li>Graduate Schemes</li>
                                            <li>Must-Know Websites for Job Search</li>
                                            <li>UK Point System Insights</li>
                                            <li>UK Companies Offering Visa Sponsorship</li>
                                        </ul>
                                    </li>
                                    <li>Download these resources anytime through your dashboard.</li>
                                    <li>Get notified of updates to keep you informed about the latest industry trends and regulations.</li>
                                </ol>
                            </div>

                        </div>
                }
            </div>
        </div>


    </>
};

export default ServicesBundle;
