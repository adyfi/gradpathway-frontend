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
                        <div className="col-md-8 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <div class="table-responsive">
                              <table class="table m-0">
                                <thead>
                                  <tr>
                                    <th scope="col" className="fw-bold">Id</th>
                                    <th scope="col" className="fw-bold">Name</th>
                                    <th scope="col" className="fw-bold">Title</th>
                                    <th scope="col" className="fw-bold">Type</th>
                                    <th scope="col" className="fw-bold">Last Updated</th>
                                    <th scope="col" className="fw-bold">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>
                                      <div class="">
                                        <h6 class="text-subtitle-1 fw-bold m-0">Jonh Cena</h6>
                                        <div class="text-subtitle-2 mt-1 text-muted">Web Designer</div>
                                      </div>
                                    </td>
                                    <td>
                                      <h6 class="text-body-1 text-muted">CV</h6>
                                    </td>
                                    <td><h6 class="text-body-1 text-muted">PDF</h6></td>
                                    <td>
                                      <h6 class="text-body-1 text-muted"><span>27 Dec</span> <span>02:55</span></h6>
                                    </td>
                                    <td className="text-center">
                                      <div>
                                        <a href="#"><i class="bi bi-folder-symlink"></i> </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>
                                      <div class="">
                                        <h6 class="text-subtitle-1 fw-bold m-0">Jonh Cena</h6>
                                        <div class="text-subtitle-2 mt-1 text-muted">Web Designer</div>
                                      </div>
                                    </td>
                                    <td>
                                      <h6 class="text-body-1 text-muted">Resume</h6>
                                    </td>
                                    <td><h6 class="text-body-1 text-muted">PDF</h6></td>
                                    <td>
                                      <h6 class="text-body-1 text-muted"><span>27 Dec</span> <span>02:55</span></h6>
                                    </td>
                                    <td className="text-center">
                                      <div>
                                        <a href="#"><i class="bi bi-folder-symlink"></i> </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>
                                      <div class="">
                                        <h6 class="text-subtitle-1 fw-bold m-0">Jonh Cena</h6>
                                        <div class="text-subtitle-2 mt-1 text-muted">Web Designer</div>
                                      </div>
                                    </td>
                                    <td>
                                      <h6 class="text-body-1 text-muted">Cover Letter</h6>
                                    </td>
                                    <td><h6 class="text-body-1 text-muted">PDF</h6></td>
                                    <td>
                                      <h6 class="text-body-1 text-muted"><span>27 Dec</span> <span>02:55</span></h6>
                                    </td>
                                    <td className="text-center">
                                      <div>
                                        <a href="#"><i class="bi bi-folder-symlink"></i> </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <h3><span><img src="./customer-service.webp" alt="resue"/></span>Jone Cena</h3>
                            <p className="mb-2"><b className="fw-bold">Title: </b>A personalized consultation to discuss your
                              career goals.
                            </p>
                            <div className="d-flex mb-2">
                              
                              <h6 className="fw-bold me-1 mb-0">Schedule Call: </h6>
                              <a href="#"><i class="bi bi-telephone"></i> Call Now</a>
                            </div>
                            <div className="d-flex">
                              <h6 className="fw-bold me-1">Time & Date:</h6>
                              <h6> 27 Dec / <span>5:00PM</span></h6>
                            </div>
                            <div className="d-flex">
                              <h6 className="fw-bold me-1">Status:</h6>
                              <h6>Pending</h6>
                            </div>
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

                        <div className="col-md-8 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <h3><span><img src="./resume.webp" alt="resue"/></span>Personalized Interview Question Answers</h3>
                            <p>Crafted based on your work
                              experience, education, and projects to ensure youre prepared for any
                              interview.</p>
                              <div className="">
                                <ul>
                                  <li><span className="fw-bold">Technical Questions:</span><p>Role-specific technical queries.</p></li>
                                  <li><span className="fw-bold">Behavioral Questions:</span><p>Focus on soft skills and situational responses (e.g., STAR method).</p></li>
                                  <li><span className="fw-bold">Industry-Specific Questions:</span><p>Tailored for the user’s selected industry.</p></li>
                                  <li><span className="fw-bold">Common Questions:</span><p>General questions like "Tell me about yourself" or "What are your strengths?"</p></li>
                                </ul>
                              </div>
                          </div>
                        </div>
 
                        <div className="col-md-8 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <h3><span><img src="./customer-service.webp" alt="resue"/></span>Weekly Job Subscription</h3>
                            <p> A weekly subscription delivering the latest jobs specific to your profile.
                            </p>
                            <div className="">
                                <ul>
                                  <li><span className="fw-bold">Job Preferences:</span><p>Desired job roles or titles. Experience level (entry-level, mid-level, senior).
                                  </p></li>
                                  <li><span className="fw-bold">Personalization:</span><p>Keywords or skills the user provides. User’s resume (if uploaded).</p></li>
                                  <li><span className="fw-bold">Featured Jobs:</span><p>Highlight top or trending jobs for the week.</p></li>
                                  <li><span className="fw-bold">Value Proposition:</span><p>Access to curated job opportunities.</p></li>
                                </ul>
                              </div>
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
                          <h4 className="fw-bold"><span className="fw-bold">Title: </span>Jonh Cena</h4>
                          <h5><span className="fw-bold">Type: </span> In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</h5>
                          <p><span className="fw-bold">Assigned Reviewer:</span> James Anderson</p>
                          <p><span className="fw-bold">Additional Comments:</span> In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                          <div className="">
                            <ul>
                              <li className="d-flex"><i class="bi bi-calendar-week"></i><span className="me-1">Last Updated: </span><span className="fw-bold"> Nov 10</span></li>
                              {/* <li><i class="bi bi-gear"></i><span>Dec 12</span></li> */}
                              <li className="d-flex"><i class="bi bi-file-earmark-richtext"></i><span className="me-1">max Size:</span><span className="fw-bold">10mb</span></li>
                              <li className="d-flex"><i class="bi bi-file-earmark-medical"></i><span className="me-1">File Type:</span><span className="fw-bold">pdf</span></li>
                            </ul>
                          </div>
                          <button type="button" class="btn btn-outline-primary">Download Resume <i class="bi bi-download"></i>
                          </button>
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
                          <h6 className="fw-bold"><span className="fw-bold me-1">Name:</span>William Carter</h6>
                          <p><span className="fw-bold me-1">Title/Purpose:</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                          <div className="">
                            <ul className="d-flex flex-column">
                              <li><span className="fw-bold me-1">Call Date:</span><span>21/12/2024</span></li>
                              <li><span className="fw-bold me-1">Call Time:</span><span>05:30 PM</span></li>
                              <li><span className="fw-bold me-1">Schedule Call:</span><span><a className=""><i class="bi bi-telephone"></i> Call</a>
                              </span></li>
                            </ul>
                          </div>
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
              <div className="tab-pane fade" id="contact-tab-pane2" role="tabpanel" aria-labelledby="contact-tab2" tabindex="0">
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
                          <input className="form-control mb-4" type="file" id="formFile"/>
                          <button type="button" class="btn btn-outline-primary">Download</button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
