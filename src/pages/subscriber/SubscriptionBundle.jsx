import React from "react";
import "./dashboard-pages.scss"

const SubscriptionBundle  = () => {
  return (
    <>
        <div className="container-fluid subscription-bundle">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="card-title fw-semibold mb-4">Subscription Bundle</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 card-list">
                            <div className="card">
                                <div className="card-image">
                                    <img src="./resume-1.webp" className="card-img-top" alt="..." />
                                </div>
                             
                                <div className="card-body">
                                    <h5 className="card-title">Top Websites for Job Search</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the
                                        card's content.</p>
                                    <a href="#" className="btn btn-primary">Download</a>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image">
                                    <img src="./resume-2.webp" className="card-img-top" alt="..." />
                                </div>
                             
                                <div className="card-body">
                                    <h5 className="card-title">Must-Know Websites</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the
                                        card's content.</p>
                                    <a href="#" className="btn btn-primary">Download</a>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image">
                                    <img src="./resume-3.webp" className="card-img-top" alt="..." />
                                </div>
                             
                                <div className="card-body">
                                    <h5 className="card-title">Top 25 Graduate Employers</h5>
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

export default SubscriptionBundle;
