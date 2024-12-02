import React from 'react';

const ContactUs = () => {
  return <div>
  <div class="inner-page-wrapper">

        <div class="inner-text-image-banner">
            <div class="image-wrapper">
                <img src="/img/books-with.webp" alt=""/>
            </div>
            <div class="text-banner-content">
                <h2>Our Blogs</h2>
                <p>Stay updated with expert insights, industry news, and creative innovations</p>
            </div>
        </div>

        <section class="contact-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-6 m-auto">
                        <h1>Contact Us</h1>
                        <div class="contact-form">
                            <div class="mb-3">
                                <label for="formGroupExampleInput" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Jonh Doe"/>
                              </div>
                              <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label">Email Id</label>
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="example@gmail.com"/>
                              </div>
                              <div class="mb-5">
                                <label for="formGroupExampleInput2" class="form-label">Contact No</label>
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="9876543210"/>
                              </div>
                              <div class="col-12">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="opportunities-wrapper">
            <div class="opportunities-content">
              <h2>Unlock new career opportunities 
                with us</h2>
                <a href="#" class="btn btn-secondary">Get In Touch</a>
            </div>
          </section>
          
         
        
    </div>
  </div>
};

export default ContactUs;
