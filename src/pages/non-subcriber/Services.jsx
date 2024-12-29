import React, { useEffect, useState } from 'react';
import { FaHandPointRight, FaPlusCircle } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const ToggleSwitch = ({ planToggle, setPlanToggle }) => (
    <label className={"custom-switch round"}>
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
    const [modalContent, setModalContent] = useState("")
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
                            <h1 className="text-primary-2 display-3 fw-bolder" data-aos="fade-up">Our Services</h1>
                            <p data-aos="fade-up mt-5">
                                At GradPathWay, we offer tailored packages to empower your career journey. From refining your CV, cover letter, and LinkedIn profile in the Foundation Package, 
                                to comprehensive job search resources and interview preparation in the Advanced Package, we have you covered. 
                            </p>
                            <p>    
                                For a deeper focus, the Professional Package provides mentorship, project-based experience, and mock interviews in specific streams, while the Ultimate Career Package ensures hands-on internships, certifications, and industry-aligned opportunities. Choose the plan that fits your ambitions and take the next step toward a rewarding career!!
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
                        <h2 editable="inline" className="display-2 mb-0 fw-bolder text-primary-2"><b>Pricing</b></h2>
                        <p editable="inline" className='col-md-6 offset-md-3'> Choose from our tailored packages designed to meet your career goals. Whether you're starting out or aiming for advanced opportunities, we have the right plan for you.</p>
                    </div>
                </div>
            </div>
            <p className='text-primary-2 text-center fw-bold' data-aos='fade-up'>
                {/* ONE TIME PAYMENT */}
            </p>
            {/* <div className="d-flex justify-content-center align-items-center gap-3" data-aos="fade-up" >
                <span className={`${!planToggle ? 'text-primary' : 'text-dark'} h3 fw-bolder`}>Monthly</span>
                <ToggleSwitch planToggle={planToggle} setPlanToggle={setPlanToggle} />
                <span className={`${planToggle ? 'text-primary' : 'text-dark'} h3 fw-bolder`}>Yearly</span>
            </div> */}
            <div className="row">

                <div className="d-md-flex flex-col gap-3 mt-4 text-center align-items-stretch">
                    <div className="col-lg-3 col-md-6 col-12 text-dark my-2" data-aos="fade-right">
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
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("Professional enhancement of your CV, cover letter, and LinkedIn profile, including a customized LinkedIn banner and profile content to increase your digital presence.")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12'>CV, Cover Letter, and LinkedIn Review
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("A personalized consultation to discuss your career goals and the best strategies to achieve them.")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12 ps-2'>One Free Consulting Call</span>
                                                </a>
                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("Tailored for five different job roles you are targeting, ensuring your application passes through Applicant Tracking Systems (ATS) effectively.")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12'>3 ATS-Friendly Resumes and Cover Letters</span>
                                                </a>
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
                    <div className="col-lg-3 col-md-6 col-12 text-dark my-2" data-aos="fade-right">
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
                                                <span className='col-md-1'>  <FaPlusCircle className='text-primary' /> </span>
                                                <span className='col-md-10'>
                                                    <b>Everything in Foundation Package</b>
                                                </span>
                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("Crafted based on your work experience, education, and projects to ensure you're prepared for any interview.")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12 ps-1'>Personalized Interview Answers</span>
                                                </a>
                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("<ul> <li>Graduate Schemes</li> <li>Top Websites for Job Search</li> <li>Must-Know Websites</li> <li>Top 25 Graduate Employers</li> <li>Graduate Salaries (Degree Specific)</li> <li>Ineligible Occupations for Skilled Work Visa 2024</li> <li>Job Codes for New Entrants 2024</li> <li>Everything about UK e-Visa (Digital)</li> <li>UK Point System - Must Know</li> <li>UK Point System - Must Know</li> <li>UK Companies with Visa Sponsorship</li> <li>Different Types of Visa</li> </ul>")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12 ps-2'>Weekly Job Subscription</span>
                                                </a>
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
                    <div className="col-lg-3 col-md-6 col-12 text-dark my-2" data-aos="fade-left">
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
                                                <span className='col-md-1'> <FaPlusCircle className='text-primary' /></span>
                                                <span className='col-md-12'><b>Everything in Advance Package</b>
                                                </span>
                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("Guidance from a subject matter expert in your field of study or industry.")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12 ps-2'>
                                                        Mentorship Session:
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("Learn and complete three projects to bolster your CV with hands-on, project-based experience.")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12 ps-2'>
                                                        Project-Based Experience
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("Intensive preparation sessions tailored to your specific career goals and industry")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12 ps-2'>Mock Interview Preperation.</span>
                                                </a>
                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("Stay informed about relevant career fairs and networking events in the UK to build your professional network.")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12'>Updates on Career Fairs and Networking Events.</span>
                                                </a>
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
                    <div className="col-lg-3 col-md-6 col-12 text-dark my-2" data-aos="fade-left">
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
                                                <span className='col-md-1'>  <FaPlusCircle className='text-primary' /> </span>
                                                <span className='col-md-10'>
                                                    <b> Everything in Professional Package</b>
                                                </span>
                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("Secure an internship in your industry to gain valuable UK work experience.")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12 ps-2'>Internship in Your Field</span>
                                                </a>

                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                // data-bs-toggle="modal"
                                                // data-bs-target="#exampleModal"
                                                // onClick={() => setModalContent("")}
                                                >
                                                    <span className='col-md-1'>  <FaPlusCircle className='text-primary' /> </span>
                                                    <span className='col-md-12'>1 Interview with the company in you domain</span>
                                                </a>

                                            </li>
                                            <li className="d-flex">
                                                <a href='#'
                                                    className='text-dark d-flex'
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setModalContent("Ongoing training and support until you pass certification exams relevant to your field, such as Microsoft or Cloud certifications, to build credibility and ensure long-term career growth.")}
                                                >
                                                    <span className='col-md-1'><FaPlusCircle className='text-primary' /></span>
                                                    <span className='col-md-12 ps-1'>Certification Training and Guidance</span>
                                                </a>
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

        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center" data-aos="fade-up">
                    <div className="lc-block mb-4">
                        <span editable="inline" className="mt-4 d-block mb-0 h5">learn about our services</span>
                        <h2 editable="inline" className="display-5 mb-0 fw-bolder text-primary-2 mb-4"><b>How our service bundles work</b></h2>
                        <a href='/services/bundles' className={`col-md-3  offset-md-0 col-10 offset-1 btn btn-primary mb-3 px-5 py-3 rounded-pill`} onClick={() => setActiveBundle('advance')}>
                            <span className='h5'>
                                Learn More Now
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Register Now</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> */}
                    <button type="button" className="btn-close mt-2 ms-auto me-2 " data-bs-dismiss="modal" aria-label="Close"></button>

                    <div className="modal-body">
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: modalContent }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Services;
