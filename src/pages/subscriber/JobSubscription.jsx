import React from "react";
import "./dashboard-pages.scss"

const JobSubscription  = () => {
  return (
    <>
        <div className="container-fluid job-subscription">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="card-title fw-semibold mb-4">Job Subscription</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 job-list">
                            <div className="job-box mb-4">
                                <div className="job-top d-flex">
                                    <div className="company-logo me-3 d-flex">
                                        <img src="./gp-logo.svg" alt="" />
                                    </div>
                                    <div className="company-details">
                                        <h4 className="m-0">Front-End Developer</h4>
                                        <p className="mb-2"><small>Specializes in the visual and interactive aspects of websites and applications. Uses technologies like HTML, CSS, and JavaScript to create user interfaces.</small></p>
                                        <div className="detail-list d-flex mb-2">
                                            <span className="me-3"><i class="ti ti-briefcase me-2 brand-color"></i><small>Grad Pathway</small></span>
                                            <span className="me-3"><i class="ti ti-map-pin me-2 brand-color"></i><small>London TN</small></span>
                                            <span className="me-3"><i class="ti ti-award me-2 brand-color"></i><small>Competitive</small></span>
                                        </div>
                                        <div className="bottom d-flex">
                                            <span className="me-3">Today</span>
                                            <span className="brand-color">New</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="job-box mb-4">
                                <div className="job-top d-flex">
                                    <div className="company-logo me-3 d-flex">
                                        <img src="./gp-logo.svg" alt="" />
                                    </div>
                                    <div className="company-details">
                                        <h4 className="m-0">Front-End Developer</h4>
                                        <p className="mb-2"><small>Specializes in the visual and interactive aspects of websites and applications. Uses technologies like HTML, CSS, and JavaScript to create user interfaces.</small></p>
                                        <div className="detail-list d-flex mb-2">
                                            <span className="me-3"><i class="ti ti-briefcase me-2 brand-color"></i><small>Grad Pathway</small></span>
                                            <span className="me-3"><i class="ti ti-map-pin me-2 brand-color"></i><small>London TN</small></span>
                                            <span className="me-3"><i class="ti ti-award me-2 brand-color"></i><small>Competitive</small></span>
                                        </div>
                                        <div className="bottom d-flex">
                                            <span className="me-3">Today</span>
                                            <span className="brand-color">New</span>
                                        </div>
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

export default JobSubscription;
