import React from 'react';

const ContactUs = () => {
  return <div>
  <div className="inner-page-wrapper">

        <div className="inner-text-image-banner">
            <div className="image-wrapper">
                <img src="/img/books-with.webp" alt=""/>
            </div>
            <div className="text-banner-content">
                <h2>Contact Us</h2>
                <p>Get in Touch – We're Here to Help!</p>
            </div>
        </div>

        <section className="contact-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-6 m-auto">
                        <h1>Contact Us</h1>
                        <div className="contact-form">
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Jonh Doe"/>
                              </div>
                              <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Email Id</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="example@gmail.com"/>
                              </div>
                              <div className="mb-5">
                                <label for="formGroupExampleInput2" className="form-label">Contact No</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="9876543210"/>
                              </div>
                              <div className="col-12">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    </div>
  </div>
};

export default ContactUs;
