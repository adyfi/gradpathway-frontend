import React from 'react';

const Mentors = () => {
  return <div>
  <div className="inner-page-wrapper"> 
        <div className="vision-mission-wrapper">
            <div className="img-wrapper">
                <img src="/img/business-concept-with-team-close-up.webp" alt="" />
            </div>
            <div className="vision-mission-content">
                <h2>The ultimate monetisation tool for mentors</h2>
                <p>We believe that your international education journey should culminate in a rewarding career. Our AI-powered platform is designed to elevate your job search experience, ensuring you’re not just ready but equipped to stand out in competitive job markets worldwide.</p>
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
                        <h2><span>At </span> Mentors</h2>
                        <p>We believe that your international education journey should culminate in a rewarding career. Our AI-powered platform is designed to elevate your job search experience, ensuring you’re not just ready but equipped to stand out in competitive job markets worldwide.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='mentors-form'>
            <div className='container'>
                <form>
                    <div className='row'>
                        <div className='col-md-8 mx-auto'>
                            <div className="row g-4">
                                <div className="col-12"><h4>Personal Details:</h4></div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Full Name</label>
                                    <input type="text" placeholder="Full Name" className="form-control" id="inputEmail4"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Email Address</label>
                                    <input type="text" placeholder="Email Address" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Phone Number</label>
                                    <input type="text" placeholder="Phone Number" className="form-control" id="inputPassword4"/>
                                </div>

                                <div className="col-12"><h4>Professional Details:</h4></div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Highest Qualification</label>
                                    <input type="text" placeholder="Highest Qualification" className="form-control" id="inputEmail4"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Primary Expertise/Subjects</label>
                                    <input type="text" placeholder="Primary Expertise/Subjects" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">What technology you work with.
                                    </label>
                                    <input type="text" placeholder="Technology" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Years of Experience</label>
                                    <input type="text" placeholder="Highest Qualification" className="form-control" id="inputEmail4"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">LinkedIn Profile (Optional)</label>
                                    <input type="text" placeholder="LinkedIn Profile (Optional)" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Upload CV (Optional)</label>
                                    <input type="text" placeholder="Upload CV Optional) " className="form-control" id="inputPassword4"/>
                                </div>

                                <div className="col-12"><h4>Availability:</h4></div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Weekly Availability (hours per week or specific slots)</label>
                                    <input type="text" placeholder="Weekly Availability" className="form-control" id="inputEmail4"/>
                                </div>

                                <div className="col-12"><h4>Account Setup:</h4></div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Username</label>
                                    <input type="text" placeholder="Username" className="form-control" id="inputEmail4"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Password</label>
                                    <input type="text" placeholder="Password" className="form-control" id="inputEmail4"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Confirm Password</label>
                                    <input type="text" placeholder="Confirm Password" className="form-control" id="inputEmail4"/>
                                </div>

                                <div className="col-12"><h4>Agreement:</h4></div>
                                <div className="col-md-6">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Terms and conditions and privacy policy. 
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <section className="opportunities-wrapper">
            <div className="opportunities-content">
              <h2>Unlock new career opportunities 
                with us</h2>
                <a href="#" className="btn btn-secondary">Get In Touch</a>
            </div>
          </section>
    
    </div>
  </div>
};

export default Mentors;
