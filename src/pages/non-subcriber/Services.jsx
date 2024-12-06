import React, { useEffect, useState } from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const ToggleSwitch = ({ planToggle, setPlanToggle }) => (
    <label className={"switch round"}>
        <input type="checkbox" checked={planToggle} onChange={() => setPlanToggle(!planToggle)} />
        <span className={"slider round"} />
    </label>
);

const CalculatePrice = (planToggle, price) => {
    const multiplyBy = planToggle ? 12 : 1
    console.log(multiplyBy)
    console.log(price)
    return price * multiplyBy
}

const Services = () => {
    const [planToggle, setPlanToggle] = useState(false)
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);

    return <>

        <div className="container" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
            <div className="row align-items-center px-2">
                <div className="col-12 col-md-7 col-lg-6 pt-5">
                    <div className="lc-block mb-4">
                        <div editable="rich">
                            <h1 className="text-primary display-3 fw-bolder" data-aos="fade-up">Our Services</h1>
                            <p data-aos="fade-up">
                                At GradPathWay, we offer tailored packages to empower your career journey. From refining your CV, cover letter, and LinkedIn profile in the Foundation Package, to comprehensive job search resources and interview preparation in the Advanced Package, we have you covered. For a deeper focus, the Professional Package provides mentorship, project-based experience, and mock interviews in specific streams, while the Ultimate Career Package ensures hands-on internships, certifications, and industry-aligned opportunities. Choose the plan that fits your ambitions and take the next step toward a rewarding career!!
                            </p>
                            <a href='#plans' className='btn btn-primary rounded-pill mb-2 px-4 py-2 p-0 m-0 text-white' data-aos="fade-up">Explore Our Plans</a>
                            <ul className='d-flex gap-4 style-non p-0' data-aos="fade-up">
                                <img height={"20px"} src="/img/paypal.webp" alt="" />
                                <img height={"20px"} src="/img/sezzle.webp" alt="" />
                                <img height={"20px"} src="/img/shoppay.webp" alt="" />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 col-lg-6 mt-5">
                    <div className="lc-block" data-aos="fade-left"><img alt="banner" className="img-fluid mx-auto d-block" src={"/about-card.png"} loading="lazy" /></div>
                </div>
            </div>
        </div>

        <div className="container pb-5" id='plans'>
            <div className="row">
                <div className="col-md-12 text-center" data-aos="fade-up">
                    <div className="lc-block mb-4"><span editable="inline" className="small mt-4 d-block">Affordable Plans</span>
                        <h2 editable="inline" className="display-2 mb-0 fw-bolder text-primary"><b>Pricing</b></h2>
                        <p editable="inline" className='col-md-6 offset-md-3'> Choose from our tailored packages designed to meet your career goals. Whether you're starting out or aiming for advanced opportunities, we have the right plan for you.</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3" data-aos="fade-up" >
                <span className={`${!planToggle ? 'text-primary' : 'text-dark'} h3 fw-bolder`}>Monthly</span>
                <ToggleSwitch planToggle={planToggle} setPlanToggle={setPlanToggle} />
                <span className={`${planToggle ? 'text-primary' : 'text-dark'} h3 fw-bolder`}>Yearly</span>
            </div>
            <div className="d-flex flex-col gap-3 mt-4 text-center align-items-stretch" style={{width:"100%", overflowX:"scroll"}}>
                <div className="col-lg-3 col-md-6 col-10 text-dark my-2" data-aos="fade-right">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="my-0 " editable="inline">Foundation Package</h4>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title"><span className="display-4" editable="inline"><b>£{CalculatePrice(planToggle, 99)}</b></span><span editable="inline" className="lead">{planToggle ? '/year' : '/month'}</span></h5>

                            <div className="card-text my-4 lc-block">
                                <div editable="rich">
                                    <ul className="list-unstyled" style={{ textAlign: "left", fontSize: ".8em" }}>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>CV, Cover Letter, and LinkedIn Review: </b>
                                                Professional enhancement of your CV, cover letter, and LinkedIn profile, including a customized LinkedIn banner and profile content to increase your digital presence.
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>One Free Consulting Call: </b>
                                                A personalized consultation to discuss your career goals and the best strategies to achieve them.
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>3 ATS-Friendly Resumes and Cover Letters: </b>
                                                Tailored for five different job roles you are targeting, ensuring your application passes through Applicant Tracking Systems (ATS) effectively.
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Ideal For: </b>
                                                Students looking to make a strong first impression with a polished digital presence and targeted job applications.
                                            </span>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="d-grid lc-block mt-auto">
                                <a href="#" className="btn btn-lg  btn-outline-primary-2">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-10 text-dark my-2" data-aos="fade-right">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="my-0 " editable="inline">Advance Package</h4>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title"><span className="display-4" editable="inline"><b>£{CalculatePrice(planToggle, 149)}</b></span><span editable="inline" className="lead">{planToggle ? '/year' : '/month'}</span></h5>

                            <div className="card-text my-4 lc-block">
                                <div editable="rich">
                                    <ul className="list-unstyled" style={{ textAlign: "left", fontSize: ".8em" }}>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Everything in Plan 1</b>
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Personalized Interview Answers: </b>
                                                Crafted based on your work experience, education, and projects to ensure you're prepared for any interview.
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Weekly Job Subscription: </b>
                                                <ul>
                                                    <li>Graduate Schemes</li>
                                                    <li>Top Websites for Job Search</li>
                                                    <li>Must-Know Websites</li>
                                                    <li>Top 25 Graduate Employers</li>
                                                    <li>Graduate Salaries (Degree Specific)</li>
                                                    <li>Ineligible Occupations for Skilled Work Visa 2024</li>
                                                    <li>Job Codes for New Entrants 2024</li>
                                                    <li>Everything about UK e-Visa (Digital)</li>
                                                    <li>UK Point System - Must Know</li>
                                                    <li>UK Point System - Must Know</li>
                                                    <li>UK Companies with Visa Sponsorship</li>
                                                    <li>Different Types of Visa</li>

                                                </ul>
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Ideal For:</b>
                                                Students seeking a comprehensive approach to their job search, with ongoing support and resources to stay informed and prepared.
                                            </span>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="d-grid lc-block mt-auto">
                                <a href="#checkout" className="btn btn-lg  btn-primary">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-10 text-dark my-2" data-aos="fade-left">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="my-0 " editable="inline">Professional Package</h4>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title"><span className="display-4" editable="inline"><b>£{CalculatePrice(planToggle, 249)}</b></span><span editable="inline" className="lead">{planToggle ? '/year' : '/month'}</span></h5>

                            <div className="card-text my-4 lc-block">
                                <div editable="rich">
                                    <ul className="list-unstyled" style={{ textAlign: "left", fontSize: ".8em" }}>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Everything in Plan 2</b>
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Mentorship Session: </b>
                                                Guidance from a subject matter expert in your field of study or industry.
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Project-Based Experience:</b>
                                                Learn and complete three projects to bolster your CV with hands-on, project-based experience.
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b> Mock Interview Prep: </b>
                                                Intensive preparation sessions tailored to your specific career goals and industry
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b> Updates on Career Fairs and Networking Events: </b>
                                                Stay informed about relevant career fairs and networking events in the UK to build your professional network.

                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Ideal For: </b>
                                                Students who want to go beyond the basics, focusing on developing project-based experience, gaining insights from industry experts, and staying connected to key networking opportunities.
                                            </span>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="d-grid lc-block mt-auto">
                                <a href="#checkout" className="btn btn-lg  btn-primary">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-10 text-dark my-2" data-aos="fade-left">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="my-0 " editable="inline">Ultimate Career Package</h4>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title"><span className="display-4" editable="inline"><b>£{CalculatePrice(planToggle, 399)}</b></span><span editable="inline" className="lead">{planToggle ? '/year' : '/month'}</span></h5>

                            <div className="card-text my-4 lc-block">
                                <div editable="rich">
                                    <ul className="list-unstyled" style={{ textAlign: "left", fontSize: ".8em" }}>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b> Everything in Plan 3</b>
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Internship in Your Field: </b>
                                                Secure an internship in your industry to gain valuable UK work experience.
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>1 Interview with the company in you domain</b>
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b> Certification Training and Guidance: </b>
                                                Ongoing training and support until you pass certification exams relevant to your field, such as Microsoft or Cloud certifications, to build credibility and ensure long-term career growth.
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span className='col-md-1'> <FaHandPointRight className='text-primary' /> </span>
                                            <span className='col-md-10'>
                                                <b>Ideal For: </b>
                                                Students committed to maximizing their job prospects, with a focus on practical experience, financial planning, professional certifications, and long-term career growth.
                                            </span>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="d-grid lc-block mt-auto">
                                <a href="#checkout" className="btn btn-lg  btn-primary">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
};

export default Services;
