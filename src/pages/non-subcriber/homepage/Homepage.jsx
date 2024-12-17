import React from "react";
import './_homepage.scss';

const Homepage = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid hero">
          <div className="row">
            
            <div className="data-hero m-auto text-center">
              <h1>Elevate Your Career</h1>
              <p>
                Discover tailored coaching and proven methods to transform your job search and achieve career success.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-p d-flex align-items-center ">
                  <span className="m-0">
                    Take a Free Asessment
                  </span>
                  <img src="./bi_stars.svg" className="icon-stars" alt="" />
                </button>
                <button className="btn btn-p-2 text-dark d-flex align-items-center">
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
            <div className="d-flex col-md-8 offset-md-2 mt-5">
              <img src="./dashboard-big.webp" width="100%" className="dashboard-img" alt="bg svg" />
            </div>
          </div>
        </div>
        <div className="container services">
          
            <div className="row">
              <div className="col-md-6">
                <div className="image-wrapper">
                  <img src="./GP.webp" alt="" className="img-fluid"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex my-card">
                      <div className="">
                        <h4>Discover Your Path</h4>
                        <p className="small m-0">
                          Identify the Ideal Sector and Role Aligned to Your Goals by accessing the data that suits your skills
                          and
                          profile.
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
                        <h4>Professional Presence</h4>
                        <p className="small m-0">
                          Personalised Strategies and data of companies
                          to
                          Increase Your Profile Visibility and Attract Interview Calls.
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
                          By getting certified and access to interview call scheduled by us with your potential employer and Ace
                          the
                          Interview.
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
                          By getting certified and access to interview call scheduled by us with your potential employer and Ace
                          the
                          Interview.
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
    </>
  );
};

export default Homepage;
