import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid p-0">
      <div className="dashboard-main-content">
        <div className="container-fluid">
          <div className="row">
            <div>
              <div className="shadow-border top-bar mb-4">
                <div className="dropdown">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="./profile-icon.webp" alt="" />
                    <span>Jonh Cena</span>
                  </a>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>  
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <div className="dashboard">
                  <div className="welcome-test mb-4">
                    <h2>Hello <span>John Cena</span></h2>
                    <h3>Welcome to Your Hub: Stay Connected, Stay Informed, Stay Ahead!</h3>
                  </div>
                  <div className=" main-dashboard-content ">
                    {/* <div className="buttons-wrapper mb-4 shadow-border">
                      <button type="button" className="btn btn-outline-primary">Primary</button>
                      <button type="button" className="btn btn-outline-secondary">Secondary</button>
                      <button type="button" className="btn btn-outline-success">Success</button>
                      <button type="button" className="btn btn-outline-danger">Danger</button>
                      <button type="button" className="btn btn-outline-warning">Warning</button>
                      <button type="button" className="btn btn-outline-info">Info</button>
                      <button type="button" className="btn btn-outline-dark">Dark</button>
                    </div> */}
                    <div className="dashboard-boxs-wrapper">
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <h3><span><img src="./resume.webp" alt="resue"/></span>CV, Cover Letter, and LinkedIn Review</h3>
                            <p>Professional enhancement of your
                              CV, cover
                              letter, and LinkedIn profile, including a customized LinkedIn banner and
                              profile content to increase your digital presence. </p>
                          </div>
                        </div>

                        <div className="col-md-4 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <h3><span><img src="./customer-service.webp" alt="resue"/></span>One Free Consulting Call</h3>
                            <p>A personalized consultation to discuss your
                              career goals
                              and the best strategies to achieve them.
                            </p>
                          </div>
                        </div>

                        <div className="col-md-4 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <h3><span><img src="./mail.webp" alt="resue"/></span>3 ATSFriendly Resumes and Cover Letters:</h3>
                            <p>Professional enhancement of your
                              CV, cover
                              letter, and LinkedIn profile, including a customized LinkedIn banner and
                              profile content to increase your digital presence. </p>
                          </div>
                        </div>

                        <div className="col-md-4 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <h3><span><img src="./resume.webp" alt="resue"/></span>Personalized Interview Question Answers</h3>
                            <p>Crafted based on your work
                              experience, education, and projects to ensure youre prepared for any
                              interview.</p>
                          </div>
                        </div>
 
                        <div className="col-md-4 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <h3><span><img src="./customer-service.webp" alt="resue"/></span>Weekly Job Subscription</h3>
                            <p> A weekly subscription delivering the latest jobs specific to your profile.
                            </p>
                          </div>
                        </div>

                        <div className="col-md-4 mb-4">
                          <div className="shadow-border dashboard-box " >
                            <h3><span><img src="./mail.webp" alt="resue"/></span>Subscription Bundle</h3>
                            <p>Access to essential resources</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <div className="cv-resume-wrapper shadow-border">
                  <div className="resume-list">
                      <div className="resume-box mb-4">
                        <div className="resume-image">
                          <img src="./profile-icon.webp" alt="" />
                        </div>
                        <div className="resume-text-content">
                          <h3>Title</h3>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                          <div className="">
                            <ul>
                              <li><span>Created At</span><span>21/12/2024</span></li>
                              <li><span>Updated At</span><span>21/12/2024</span></li>
                              <li><span>File Size</span><span>10mb</span></li>
                              <li><span>File Type</span><span>pdf</span></li>
                            </ul>
                          </div>
                          {/* <label for="formFile" className="form-label">Default file input example</label> */}
                          <input className="form-control" type="file" id="formFile"/>
                        </div>
                      </div>

                      <div className="resume-box mb-4">
                        <div className="resume-image">
                          <img src="./profile-icon.webp" alt="" />
                        </div>
                        <div className="resume-text-content">
                          <form>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label"><b>Title</b></label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputPassword1" className="form-label"><b>Description </b></label>
                              <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                              <label for="formFile" className="form-label"><b>Select CV</b></label>
                              <input className="form-control" type="file" id="formFile"/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                          
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                <div className="cv-resume-wrapper shadow-border">
                  <div className="resume-list">
                      <div className="resume-box mb-4">
                        <div className="resume-image">
                          <img src="./icons8-google-meet-480.png" alt="" />
                        </div>
                        <div className="resume-text-content">
                          <h3>Call Details</h3>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                          <div className="">
                            <ul>
                              <li><span>Call Date</span><span>21/12/2024</span></li>
                              <li><span>Call Time</span><span>05:30 PM</span></li>
                            </ul>
                          </div>
                          <button className="btn btn-primary">Call</button>
                        </div>
                      </div>

                      <div className="resume-box mb-4 call-box">
                        <div className="resume-image">
                          <img src="./profile-icon.webp" alt="" />
                        </div>
                        <div className="resume-text-content">
                          <form>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label"><b>Call Details</b></label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputPassword1" className="form-label"><b>Description </b></label>
                              <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                              <label for="birthdaytime" className="form-label">Select (date and time):</label>
                              <input type="datetime-local" id="birthdaytime" name="birthdaytime" className="form-control"/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                          
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="contact-tab-pane2" role="tabpanel" aria-labelledby="contact-tab2" tabindex="0">..reyewrh.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
