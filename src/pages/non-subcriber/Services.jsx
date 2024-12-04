import React from 'react';
import { Link } from 'react-router-dom';
const Services = () => {
  return <div>
  <div className="inner-page-wrapper">

        <section className="our-services-banner">
            <div className="our-services-content container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="text-content">
                            <h1>Our Services</h1>
                            <p>We offer personalized support and expert guidance to turn your career goals into reality.</p>
                            <div className="button-wrapper">
                                <a href="#" className="active">Monthly</a>
                                <a href="#">Yearly</a>
                            </div>
                            <ul>
                                <li><img src="/img/paypal.webp" alt=""/></li>
                                <li><img src="/img/sezzle.webp" alt=""/></li>
                                <li><img src="/img/shoppay.webp" alt=""/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="image-content">
                            <img src="/img/about-card.webp" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="our-services-list-wrapper">
            <div className="out-services-list-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="service-box">
                                <h3>Foundation Package</h3>
                                <div className="price-tag">
                                    <span className="price">£99</span><span className="tag">    </span>
                                </div>
                                <h5>What's Included</h5>
                                <ul className="whats-included">
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>CV, Cover Letter, and LinkedIn Review:</b> Professional enhancement of your CV, cover
                                                letter, and LinkedIn profile, including a customized LinkedIn banner and profile content to
                                                increase your digital presence.
                                        </span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>One Free Consulting Call:</b> A personalized consultation to discuss your career goals
                                            and the best strategies to achieve them.
                                            </span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>3 ATS-Friendly Resumes and Cover Letters:</b> Tailored for five different job roles you
                                        are targeting, ensuring your application passes through Applicant Tracking Systems
                                        (ATS) effectively.
                                        </span>
                                    </li>
                                    <li>
                                        <small><b>Ideal For:</b> Students looking to make a strong first impression with a polished digital presence
                                        and targeted job applications.
                                        </small>
                                    </li>
                                </ul>
                                <div className='btn-box'>   
                                <a href="#" className="btn btn-primary btn-gradient">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="service-box">
                                <h3>Advanced Package</h3>
                                <div className="price-tag">
                                    <span className="price"> £149
                                    </span><span className="tag"></span>
                                </div>
                                <h5>What's Included</h5>
                                <ul className="whats-included">
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span>Everything in Plan 1</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Personalized Interview Answers:</b> Crafted based on your work experience, education,
                                        and projects to ensure you’re prepared for any interview.</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Weekly Job Subscription:</b> A weekly subscription delivering the latest jobs specific to
                                        your profile.</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Subscription Bundle:</b> Access to essential resources:</span>
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
                                    </li>
                                    <li>
                                        <small>
                                            <b>Ideal For:</b>  Students seeking a comprehensive approach to their job search, with ongoing support and resources to stay informed and prepared.
                                        </small>
                                    </li>
                                </ul>
                                <div className='btn-box'>   
                                <a href="#" className="btn btn-primary btn-gradient">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="service-box">
                                <h3> Professional Package</h3>
                                <p>( add a condition that it have coaching for
                                    specific 4 stream)</p>
                                <div className="price-tag">
                                    <span className="price"> £249</span><span className="tag"></span>
                                </div>
                                <h5>What's Included</h5>
                                <ul className="whats-included">
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span>Everything in Plan 2</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Mentorship Session:</b> Guidance from a subject matter expert in your field of study or industry.</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Project-Based Experience:</b> Learn and complete three projects to bolster your CV with hands-on, project-based experience.</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Mock Interview Prep:</b> Intensive preparation sessions tailored to your specific career
                                        goals and industry</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Updates on Career Fairs and Networking Events:</b> Stay informed about relevant
                                        career fairs and networking events in the UK to build your professional network.</span>
                                    </li>
                                    <li>
                                        <small><b>Ideal For:</b> Students who want to go beyond the basics, focusing on developing project-based
                                            experience, gaining insights from industry experts, and staying connected to key networking
                                            opportunities.
                                        </small>
                                    </li>
                                </ul>
                                <div className='btn-box'>   
                                <a href="#" className="btn btn-primary btn-gradient">Get Started</a>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-md-6 mb-4">
                            <div className="service-box">
                                <h3>Ultimate Career Package</h3>
                                <div className="price-tag">
                                    <span className="price">£399</span><span className="tag"></span>
                                </div>
                                <h5>What's Included</h5>
                                <ul className="whats-included">
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span> Everything in Plan 3</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Internship in Your Field:</b> Secure an internship in your industry to gain valuable UK work
                                        experience.
                                        </span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span>1 Interview with the company in you domain</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Certification Training and Guidance:</b> Ongoing training and support until you pass
                                        certification exams relevant to your field, such as Microsoft or Cloud certifications, to
                                        build credibility and ensure long-term career growth.</span>
                                    </li>
                                    <li><small><b>Ideal For:</b> Students committed to maximizing their job prospects, with a focus on practical
                                    experience, financial planning, professional certifications, and long-term career growth.</small></li>
                                </ul>
                                 <div className='btn-box'>   
                                    <a href="#" className="btn btn-primary btn-gradient">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="opportunities-wrapper">
            <div className="opportunities-content">
            <h2>Unlock new career opportunities 
                with us</h2>
                <Link to={"/contactus"} className="btn btn-secondary" href="#">Get in Touch</Link>
            </div>
        </section>
        
    </div>
  </div>
};

export default Services;
