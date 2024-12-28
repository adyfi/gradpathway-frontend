import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid p-0">
      <div className="dashboard-main-content">
        <div className="container-fluid">
          <div className="row">
            <div>
              <div className="shadow-border top-bar mb-4 d-flex justify-content-between">
                <div className="div-left-header">
                  <div className="search-box">
                    <div class="input-group">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Search..." 
                            aria-label="Search"
                            aria-describedby="search-button" />
                        <button class="btn btn-primary" type="button" id="search-button">
                          <i class="bi bi-search"></i>
                        </button>
                    </div>
                  </div>
                </div>
                <div className="div-right-header d-flex">
                  <div className="country-flag">
                    <img src="./united-kingdom.webp" alt="India" />
                  </div>  
                  <div className="country-flag">
                    <img src="./notification.webp" alt="India" />
                  </div>  
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
          </div>
          <div className="row">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <div className="dashboard">
                  <div className="welcome-test mb-4">
                    <h3>Hello <span>John Cena</span></h3>
                    <h5>Welcome to Your Hub: Stay Connected, Stay Informed, Stay Ahead!</h5>
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
                            <h3 className="mb-3">CV, Cover Letter, and LinkedIn Review</h3>
                            <div className="table-responsive">
                              <table className="table m-0">
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
                                      <div className="">
                                        <h6 className="text-subtitle-1 fw-bold m-0">Jonh Cena</h6>
                                        <div className="text-subtitle-2 text-muted "><small>Web Designer</small></div>
                                      </div>
                                    </td>
                                    <td>
                                      <h6 className="text-body-1 text-muted"><small>CV</small></h6>
                                    </td>
                                    <td><h6 className="text-body-1 text-muted"><small>PDF</small></h6></td>
                                    <td>
                                      <h6 className="text-body-1 text-muted"><small><span>27 Dec</span> <span>02:55</span></small></h6>
                                    </td>
                                    <td>
                                      <div>
                                        <a href="#"><i className="bi bi-folder-symlink"></i> </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>
                                      <div className="">
                                        <h6 className="text-subtitle-1 fw-bold m-0">Jonh Cena</h6>
                                        <div className="text-subtitle-2 text-muted"><small>Web Designer</small></div>
                                      </div>
                                    </td>
                                    <td>
                                      <h6 className="text-body-1 text-muted"><small>Resume</small></h6>
                                    </td>
                                    <td><h6 className="text-body-1 text-muted"><small>PDF</small></h6></td>
                                    <td>
                                      <h6 className="text-body-1 text-muted"><small><span>27 Dec</span> <span>02:55</span></small></h6>
                                    </td>
                                    <td>
                                      <div>
                                        <a href="#"><i className="bi bi-folder-symlink"></i> </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>
                                      <div className="">
                                        <h6 className="text-subtitle-1 fw-bold m-0">Jonh Cena</h6>
                                        <div className="text-subtitle-2 text-muted"><small>Web Designer</small></div>
                                      </div>
                                    </td>
                                    <td>
                                      <h6 className="text-body-1 text-muted"><small>Cover Letter</small></h6>
                                    </td>
                                    <td><h6 className="text-body-1 text-muted"><small>PDF</small></h6></td>
                                    <td>
                                      <h6 className="text-body-1 text-muted"><small><span>27 Dec</span> <span>02:55</span></small></h6>
                                    </td>
                                    <td>
                                      <div>
                                        <a href="#"><i className="bi bi-folder-symlink"></i> </a>
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
                            <h3 className="mb-4">Analytics</h3>
                            <div className="graph-wrap">
                              <img src="./donut-chart.webp" alt="" />
                            </div>
                          </div>
                        </div>                          

                        <div className="col-md-4 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <h3 className="mb-3">Upcoming Schedules</h3>
                            <div className="upcoming-schedules">
                              <div className="call-list d-flex">
                                <div className="left-time d-flex align-start">
                                  <h6 className="text-body-1 textSecondary text-nowrap">09:30 am</h6>
                                </div>
                                <div className="center-icon text-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle text-primary" width="13px" height="13px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>   <circle cx="12" cy="12" r="9"></circle> </svg>
                                  <div className="line mx-auto bg-borderColor"></div>
                                </div>
                                <div className="right-time">
                                  <h6 className="text-body-1 textSecondary">Scheduled call with John Harrison</h6>
                                </div>
                              </div>

                              <div className="call-list d-flex">
                                <div className="left-time d-flex align-start">
                                  <h6 className="text-body-1 textSecondary text-nowrap">09:30 am</h6>
                                </div>
                                <div className="center-icon text-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle text-primary" width="13px" height="13px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>   <circle cx="12" cy="12" r="9"></circle> </svg>
                                  <div className="line mx-auto bg-borderColor"></div>
                                </div>
                                <div className="right-time">
                                  <h6 className="text-body-1 textSecondary"> Scheduled call with John Doe </h6>
                                </div>
                              </div>

                              <div className="call-list d-flex">
                                <div className="left-time d-flex align-start">
                                  <h6 className="text-body-1 textSecondary text-nowrap">09:30 am</h6>
                                </div>
                                <div className="center-icon text-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle text-primary" width="13px" height="13px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>   <circle cx="12" cy="12" r="9"></circle> </svg>
                                  <div className="line mx-auto bg-borderColor"></div>
                                </div>
                                <div className="right-time">
                                  <h6 className="text-body-1 textSecondary">Scheduled call with William Carter</h6>
                                </div>
                              </div>
                              <div className="btn-wrapper text-center">
                                <a href="#" className="btn btn-primary">Scheduled call <i class="bi bi-telephone"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-8 mb-4">
                          <div className="shadow-border dashboard-box" >
                            <h3 className="mb-3">Subscription Bundle</h3>
                            <div className="row">
                              <div className="col-md-6 mb-3">
                                <div className="simple-box d-flex">
                                  <div className="img-box me-3">
                                    <img src="./world-wide-web.webp" alt="" />
                                  </div>
                                  <div className="text-box">
                                    <h6>Top Websites for Job Search</h6>
                                    <p><small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small></p>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6 mb-3">
                                <div className="simple-box d-flex two">
                                  <div className="img-box me-3">
                                    <img src="./internet.webp" alt="" />
                                  </div>
                                  <div className="text-box">
                                    <h6>Must-Know Websites</h6>
                                    <p><small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small></p>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6 mb-3">
                                <div className="simple-box d-flex three">
                                  <div className="img-box me-3">
                                    <img src="./graduation-cap.webp" alt="" />
                                  </div>
                                  <div className="text-box">
                                    <h6>Top 25 Graduate Employers</h6>
                                    <p><small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small></p>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6 mb-3">
                                <div className="simple-box d-flex four">
                                  <div className="img-box me-3">
                                    <img src="./graduation-cap.webp" alt="" />
                                  </div>
                                  <div className="text-box">
                                    <h6>Graduate Salaries Degree Specific</h6>
                                    <p><small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small></p>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                              <li className="d-flex"><i className="bi bi-calendar-week"></i><span className="me-1">Last Updated: </span><span className="fw-bold"> Nov 10</span></li>
                              {/* <li><i className="bi bi-gear"></i><span>Dec 12</span></li> */}
                              <li className="d-flex"><i className="bi bi-file-earmark-richtext"></i><span className="me-1">max Size:</span><span className="fw-bold">10mb</span></li>
                              <li className="d-flex"><i className="bi bi-file-earmark-medical"></i><span className="me-1">File Type:</span><span className="fw-bold">pdf</span></li>
                            </ul>
                          </div>
                          <button type="button" className="btn btn-outline-primary">Download Resume <i className="bi bi-download"></i>
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
                              <li><span className="fw-bold me-1">Schedule Call:</span><span><a className=""><i className="bi bi-telephone"></i> Call</a>
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
                          <button type="button" className="btn btn-outline-primary">Download</button>
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
