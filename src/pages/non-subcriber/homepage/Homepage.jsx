import React, { useEffect } from "react";
import './_homepage.scss';
import TimelineSection from "../../../components/TimelineSection";

const Homepage = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Apply transformations
      const aiJob1 = document.getElementById('ai-job-1');
      const aiJob2 = document.getElementById('ai-job-2');
      const aiJob3 = document.getElementById('ai-job-3');
      const aiJob4 = document.getElementById('ai-job-4');

      if (aiJob1) aiJob1.style.transform = `translateY(${scrollY * -0.5}px) rotate(15deg)`;
      if (aiJob2) aiJob2.style.transform = `translateY(${scrollY * -0.4}px) rotate(-15deg)`;
      if (aiJob3) aiJob3.style.transform = `translateY(${scrollY * -0.2}px) rotate(-15deg) translateX(${scrollY * -0.15}px)`;
      if (aiJob4) aiJob4.style.transform = `translateY(${scrollY * -0.2}px) rotate(15deg) translateX(${scrollY * 0.15}px)`;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <div className="main-wrapper">
        <div className="container-fluid hero">
        <img src="./ai-job-img/ai-job-1.png" class="ai-job-img ai-job-1" id="ai-job-1" alt="" />
          <img src="./ai-job-img/ai-job-2.png" class="ai-job-img ai-job-2" id="ai-job-2" alt="" />
          <img src="./ai-job-img/ai-job-3.png" class="ai-job-img ai-job-3" id="ai-job-3" alt="" />
          <img src="./ai-job-img/ai-job-4.png" class="ai-job-img ai-job-4" id="ai-job-4" alt="" />
         
          <div className="row">

            <div className="data-hero m-auto text-center">
              <h1>Elevate Your Career</h1>
              <p>
                We've helped over 100,000 people secure their dream jobs. Let our job search strategies guide you from writing resumes to achieving better days
              </p>
              <div className="d-flex justify-content-center gap-5">
                <button className="btn btn-p d-flex align-items-center ">
                  <span className="m-0">
                    Take a Free Asessment
                  </span>
                  <img src="./bi_stars.svg" className="icon-stars" alt="" />
                </button>
                <button className="btn btn-p-2 text-primary-2 d-flex align-items-center">
                  <span className="m-0">
                    Our Services
                  </span>
                  <img src="./arrow-right.svg" className="icon-arrow-right" alt="" />
                </button>
              </div>
            </div>
            {/* <img src="./ai-job-2.jpg" className="ai-job-2" id="ai-job-2" alt="">
            <img src="./ai-job-3.jpg" className="ai-job-3" id="ai-job-3" alt="">
            <img src="./ai-job-2.jpg" className="ai-job-4" id="ai-job-4" alt="">
            <img src="./ai-job-3.jpg" className="ai-job-5" id="ai-job-5" alt=""> */}
            <div className="d-flex col-md-8 offset-md-2 mt-5 pb-5">
              <img src="./dashboard-big.webp" width="100%" className="dashboard-img " alt="bg svg" />
            </div>
          </div>
       
        </div>

        <div className="container services">

          <div className="row text-center">
            <div className="col-md-8 offset-md-2 mb-3">
              <p className="text-primary-2 m-0 p-0">This is how you land your dream job</p>
              <h1 className="m-0 fw-bolder p-0">Your Dream Career is Waiting For You</h1>
              <p className="text-subtitle m-0 p-0">We know how painful the job search is. That's why we've created services to help you out every step of the way.</p>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-6">
              <div className="image-wrapper">
                <img src="./GP.webp" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex my-card">
                    <div className="pe-3">
                      <h4>Discover Your Path</h4>
                      <p className="small m-0">
                        Identify the Ideal Sector and Role Aligned to Your Goals by accessing the data that suits your skills and profile.
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <span className="bg-card-round d-flex justify-content-center align-items-center">
                        <img src="./arrow-right.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex my-card">
                    <div className="">
                      <h4>Build Your Professional Presence</h4>
                      <p className="small m-0">
                        Strengthen Your CV, Cover Letter & LinkedIn for Success. Personalised Strategies and data of companies to Increase Your Profile Visibility and Attract Interview Calls
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <span className="bg-card-round d-flex justify-content-center align-items-center">
                        <img src="./arrow-right.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex my-card">
                    <div className="">
                      <h4>Upskill for specific roles</h4>
                      <p className="small m-0">
                        Get job ready skills for us the get the specific role you are applying for to get relevant experience with project based experience and portfolio to impress the targeted employer.
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <span className="bg-card-round d-flex justify-content-center align-items-center">
                        <img src="./arrow-right.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex my-card">
                    <div className="">
                      <h4>Secure Your Future</h4>
                      <p className="small m-0">
                        By getting certified and access to interview call scheduled by us with your potential employer and Ace the Interview and Land Your Dream Job.
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <span className="bg-card-round d-flex justify-content-center align-items-center">
                        <img src="./arrow-right.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid bg-light py-5">
        <TimelineSection />
      </div>
    </>
  );
};

export default Homepage;
