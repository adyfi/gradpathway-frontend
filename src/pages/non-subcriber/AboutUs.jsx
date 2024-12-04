import React from 'react';
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return <div>
  <div className="inner-page-wrapper"> 
        <div className="inner-text-banner">
            <div className="text-banner-content">
                <h2>About GradPathWay</h2>
                <p>We help students achieve desired careers by innovating their skills</p>
            </div>
        </div>

        <div className="container">
            <div className="image-text-section row">
                <div className="col-md-5">
                    <div className="image-wrapper">
                        <img src="/img/demo-img.webp" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="text-wrapper">
                        <h2><span>At </span> GradPathWay</h2>
                        <p>We believe that your international education journey should culminate in a rewarding career. Our AI-powered platform is designed to elevate your job search experience, ensuring you’re not just ready but equipped to stand out in competitive job markets worldwide.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="vision-mission-wrapper">
            <div className="img-wrapper">
                <img src="/img/business-concept-with-team-close-up.webp" alt="" />
            </div>
            <div className="vision-mission-content">
                <h2>Our Vision & Mission</h2>
                <p>We believe that your international education journey should culminate in a rewarding career. Our AI-powered platform is designed to elevate your job search experience, ensuring you’re not just ready but equipped to stand out in competitive job markets worldwide.</p>
            </div>
        </div>

        <div className="meetourteam-wrapper">
            <div className="meetourteam-content">
                <h2>Meet our Team</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="team-member-wrapper">
                                <div className="member-image">
                                    <img src="/img/young-bearded-man-with-striped-shirt.webp" alt="" />
                                </div>
                                <div className="member-info">
                                    <h3>Mr. John John John</h3>
                                    <p>Chief Operations Officer</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="team-member-wrapper">
                                <div className="member-image">
                                    <img src="/img/young-bearded-man-with-striped-shirt.webp" alt="" />
                                </div>
                                <div className="member-info">
                                    <h3>Mr. John John John</h3>
                                    <p>Chief Operations Officer</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="team-member-wrapper">
                                <div className="member-image">
                                    <img src="/img/young-bearded-man-with-striped-shirt.webp" alt="" />
                                </div>
                                <div className="member-info">
                                    <h3>Mr. John John John</h3>
                                    <p>Chief Operations Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

export default AboutUs;
