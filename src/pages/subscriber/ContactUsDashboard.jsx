import React from "react";
import "./dashboard-pages.scss"

const ContactUsDashboard  = () => {
  return (
    <>
        <div className="container-fluid">
        <div className="card">
          <h1 className="display-4 brand-color fw-bolder text-center mt-5">Contact Us</h1>
          <p className='col-md-8 offset-md-2 text-center'>
            We're here to help! Reach out to us with your questions, feedback, or inquiries, and our team will ensure you get the support you need for your journey with GradPathWay.
          </p>
          <div className="container py-5">
            <div className="row min-vh-25 align-items-start text-center">
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="lc-block mb-4">
                  <div editable="rich">

                    <h2 className="fw-bolder">Address</h2>
                  </div>
                </div>
                <div className="lc-block">
                  <div editable="rich">
                    <p className="lead">49 Featherstone Street <br /> London TN - ABCD<br />Zip 123 456</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="lc-block mb-4">
                  <div editable="rich">

                    <h2 className="fw-bolder">Phone</h2>
                  </div>
                </div>
                <div className="lc-block">
                  <div editable="rich">

                    <p className="lead">Tel: 123-456-4321<br />Mobile 02-406-7690<br />Mail: info@gradpathway.com</p>

                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="lc-block mb-4">
                  <div editable="rich">

                    <h2 className="fw-bolder">Hour</h2>
                  </div>
                </div>
                <div className="lc-block">
                  <div editable="rich">
                    <p className="lead">Check in: 08:00<br />Check out: 21:00<br />Support 7/24</p>
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

export default ContactUsDashboard;
