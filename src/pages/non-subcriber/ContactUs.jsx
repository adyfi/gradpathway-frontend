import React from 'react';

const ContactUs = () => {
  return <>
    <div className="container-fluid g-0 pt-4">
      <img style={{ maxHeight: "500px", objectFit: "cover" }} className="img-fluid w-100 min-vh-25 min-vh-md-50 mb-n7 mt-5" src={"./assessment2.jpg"} srcset="" sizes="" width="" height="" alt="Photo by Irene Dávila" />
    </div>
    <div className="col-md-10 shadow-sm border mb-5 offset-md-1 bg-body mt-md-n6 position-relative rounded" style={{ marginTop: '-400px' }}>
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-md-12">
            <div className="lc-block overflow-hidden">
              <div style={{ maxHeight: "40vh" }} className="ratio ratio-1x1" lc-helper="gmap-embed">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988735857!2d-0.2664052115712018!3d51.528739804848485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1733371858688!5m2!1sen!2sin" width="600"></iframe>
              </div>
            </div>
          </div>

          <h1 className="display-4 text-primary fw-bolder text-center mt-5">Contact Us</h1>
          <p className='col-md-8 offset-md-2 text-center'>
            We're here to help! Reach out to us with your questions, feedback, or inquiries, and our team will ensure you get the support you need for your journey with GradPathWay.
          </p>
          <div class="container py-5">
            <div class="row min-vh-25 align-items-start text-center">
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="lc-block mb-4">
                  <div editable="rich">

                    <h2 class="fw-bolder">Address</h2>
                  </div>
                </div>
                <div class="lc-block">
                  <div editable="rich">
                    <p class="lead">49 Featherstone Street <br /> London TN - ABCD<br />Zip 123 456</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="lc-block mb-4">
                  <div editable="rich">

                    <h2 class="fw-bolder">Phone</h2>
                  </div>
                </div>
                <div class="lc-block">
                  <div editable="rich">

                    <p class="lead">Tel: 123-456-4321<br />Mobile 02-406-7690<br />Mail: info@gradpathway.com</p>

                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="lc-block mb-4">
                  <div editable="rich">

                    <h2 class="fw-bolder">Hour</h2>
                  </div>
                </div>
                <div class="lc-block">
                  <div editable="rich">
                    <p class="lead">Check in: 08:00<br />Check out: 21:00<br />Support 7/24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default ContactUs;
