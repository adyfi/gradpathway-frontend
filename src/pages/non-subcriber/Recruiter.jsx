import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecruiterForm from '../../components/RecruiterForm';
import { ButtonPrimary } from '../../components/buttons/ButtonPrimary';
import AOS from 'aos';

const Recruiter = () => {
    const [planToggle, setPlanToggle] = useState(false)
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);

    return <>
        <div className="container" style={{ marginTop: "12vh" }}>
            <div className="row">
                <div className="col-md-7" style={{ marginTop: "10vh" }}>
                    <h1 className='display-4 fw-bolder text-primary-2' data-aos="fade-up">
                        Hire Tech Talent Ready to Deploy in Just 2 Weeks!
                    </h1>
                    <p className='text-secondary mt-3' style={{ fontSize: '1.4rem' }} data-aos="fade-up">
                        Why wait weeks to hire? Access skilled, pre-vetted tech talent ready to contribute from day one in just hours.
                    </p>
                    <div className="banner-button my-2" data-aos="fade-up">
                        {/* <a href="#" className="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Register Now</a> */}
                        <ButtonPrimary title={'Register Now'} link={''} />
                    </div>
                </div>
                <div className="col-md-5 d-flex justify-content-center mt-5">
                    <img src="ab-banner.png" width={"90%"} alt="img" data-aos="fade-left" className="img-fluid" />
                </div>
            </div>

            <div className="row" style={{marginTop:"20vh"}}>
                <h1 className='text-center fw-bolder display-4' data-aos="fade-up"> 
                    Recruit <span className='text-primary-2'>Top Talent</span> for These<br /> 
                    <span className='text-primary-2'>In-Demand</span> Tech Roles
                </h1>

                <div className="col-md-12 d-flex justify-content-center flex-wrap gap-2 mt-3 mb-5" data-aos="fade-up">
                    <button className="btn btn-outline-primary btn-lg"> Business Analyst</button>
                    <button className="btn btn-outline-primary btn-lg"> Backend Developer</button>
                    <button className="btn btn-outline-primary btn-lg"> Frontend Developer</button>
                    <button className="btn btn-outline-primary btn-lg"> Tech Lead</button>
                    <button className="btn btn-outline-primary btn-lg"> Data Analyst</button>
                    <button className="btn btn-outline-primary btn-lg"> Gen AI Developer</button>
                    <button className="btn btn-outline-primary btn-lg"> ReactJS Develoepr</button>
                    <button className="btn btn-outline-primary btn-lg"> Python Developer</button>
                    <button className="btn btn-outline-primary btn-lg"> SDTE</button>
                    <button className="btn btn-outline-primary btn-lg"> SEO</button>
                    <button className="btn btn-outline-primary btn-lg"> Marketing</button>
                    <button className="btn btn-outline-primary btn-lg"> QA/Tester</button>
                    <button className="btn btn-outline-primary btn-lg"> .NET Developer</button>
                </div>
                <div className="banner-button d-flex justify-content-center mb-5" data-aos="fade-up">
                    {/* <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Register Now</a> */}
                    <ButtonPrimary title={'Register Now'} link={''} />
                </div>
            </div>
        </div>

        {/* registernow-form */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Register Now</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                       <RecruiterForm />
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        
    </>

};

export default Recruiter;