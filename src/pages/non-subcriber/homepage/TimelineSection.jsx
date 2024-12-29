import React, { useEffect } from 'react'
import AOS from 'aos';
import './timeline.scss';

const TimelineSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="row mb-3 mt-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="lc-block mb-1">
                            <div editable="rich">
                                <h1 className='text-primary-2 fw-bolder' data-aos="fade-up">Your Ideal Career is Ready & Waiting for you</h1>
                            </div>
                        </div>
                        <div className="lc-block">
                            <div editable="rich">
                                <p className="lead" data-aos="fade-up">We understand the challenges of job hunting, which is why we've designed services to support you at every stage of the process.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5 timeline2 position-relative">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="timeline2-item w-100 mb-4 py-4 text-light lc-block">
                                <div className="timeline2-img"></div>
                                <div className="timeline2-content" data-aos="fade-right">
                                    <p editable="inline" className="lead">Step 1</p>
                                    <h2 editable="inline" className="fw-bold rfs-12">Take Assessment</h2>
                                    <div editable="rich">
                                        <p>Take a personalized assessment to uncover your strengths, interests, and career potential.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline2-item w-100 mb-4 py-4 text-light lc-block">
                                <div className="timeline2-img"></div>
                                <div className="timeline2-content" data-aos="fade-right">
                                    <p editable="inline" className="lead">Step 2</p>
                                    <h2 editable="inline" className="fw-bold rfs-12">Get Tips and Personalized Plan</h2>
                                    <div editable="rich">
                                        <p> Receive expert advice and a tailored action plan to achieve your career goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline2-item w-100 mb-4 py-4 text-light lc-block">
                                <div className="timeline2-img"></div>
                                <div className="timeline2-content" data-aos="fade-right">
                                    <p editable="inline" className="lead">Step 3</p>
                                    <h2 editable="inline" className="fw-bold rfs-12">Get Personalized Assistance</h2>
                                    <div editable="rich">
                                        <p>Work one-on-one with a dedicated advisor to guide you every step of the way.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline2-item w-100 mb-4 py-4 text-light lc-block">
                                <div className="timeline2-img"></div>
                                <div className="timeline2-content" data-aos="fade-right">
                                    <p editable="inline" className="lead">Step 4</p>
                                    <h2 editable="inline" className="fw-bold rfs-12">Secure the Job</h2>
                                    <div editable="rich">
                                        <p>Apply with confidence, ace your interviews, and land the role you've always wanted.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" style={{ position: 'sticky', top: '15vh', height: "500px" }}>
                            <div className="row mb-4 px-4">
                                <div className="lc-block mb-1">
                                    <div className='' editable="rich" data-aos="fade-up">
                                        <h3 className='text-primary-2'>Build Your Professional Presence</h3>
                                    </div>
                                </div>
                                <div className="lc-block">
                                    <div editable="rich" data-aos="fade-up">
                                        <p className=""> <small> Our video demo showcases how to identify the right career path, build a standout professional presence, and attract opportunities that align with your goals. Take the first step toward acing interviews and securing your dream job today!. </small> </p>
                                    </div>
                                </div>
                                <div className="col-lg-10 mx-auto text-center mt-4">
                                    <div className="lc-block position-relative" data-aos="fade-up">
                                        <img className="img-fluid rounded shadow" src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=4032&amp;q=80" srcSet="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=4032&amp;q=80 4032w, https://images.unsplash.com/photo-1620121478247-ec786b9be2fa??ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80 150w, https://images.unsplash.com/photo-1620121478247-ec786b9be2fa??ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80 300w, https://images.unsplash.com/photo-1620121478247-ec786b9be2fa??ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=768&amp;q=80 768w, https://images.unsplash.com/photo-1620121478247-ec786b9be2fa??ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1024&amp;q=80 1024w" sizes="(max-width: 4032px) 100vw, 4032px" width="4032" height="" alt="Photo by Richard Horvath" />
                                        <a className="position-absolute top-50 start-50 translate-middle glightbox d-flex justify-content-center align-items-center" href="https://www.youtube.com/watch?v=4e6KSaCxcHs">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" className="" viewBox="0 0 16 16" lc-helper="svg-icon">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default TimelineSection