import React from "react";
import "./dashboard-pages.scss"

const AtsFriendlyResumes  = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="card-title fw-semibold mb-4">ATS Friendly Resumes</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="./resume-1.webp" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Resume One</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the
                                        card's content.</p>
                                    <a href="#" className="btn btn-primary">Download</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src="./resume-2.webp" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Resume Two</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the
                                        card's content.</p>
                                    <a href="#" className="btn btn-primary">Download</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src="./resume-3.webp" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Resume Three</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the
                                        card's content.</p>
                                    <a href="#" className="btn btn-primary">Download</a>
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

export default AtsFriendlyResumes;
