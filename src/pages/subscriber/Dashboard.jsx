import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-strech">
            <div className="card w-100">
              <div className="card-body">
                <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title fw-semibold">Profile Overview</h5>
                  </div>
                  <div>
                    {/* <select className="form-select">
                      <option value="1">March 2023</option>
                      <option value="2">April 2023</option>
                      <option value="3">May 2023</option>
                      <option value="4">June 2023</option>
                    </select> */}
                  </div>
                </div>
                <div id="chart"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body p-4">
                <div className="mb-4">
                  <h5 className="card-title fw-semibold">Recent Activities</h5>
                </div>
                <ul className="timeline-widget mb-0 position-relative mb-n5">
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">09:30</div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-primary flex-shrink-0 my-8"></span>
                      <span className="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div className="timeline-desc text-dark mt-n1">schedule call by William Carter
                    </div>
                  </li>
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">10:00 am</div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-info flex-shrink-0 my-8"></span>
                      <span className="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div className="timeline-desc text-dark mt-n1">Resume Updated At 04:15
                    </div>
                  </li>
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">12:00 am</div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span>
                      <span className="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div className="timeline-desc text-dark mt-n1">Payment was made of $64.95 to Michael</div>
                  </li>
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">09:30 am</div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-warning flex-shrink-0 my-8"></span>
                      <span className="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div className="timeline-desc text-dark mt-n1 fw-semibold">New sale recorded <a
                      href="javascript:void(0)" className="text-primary d-block fw-normal">#ML-3467</a>
                    </div>
                  </li>
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">09:30 am</div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-danger flex-shrink-0 my-8"></span>
                      <span className="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div className="timeline-desc text-dark mt-n1 fw-semibold">New arrival recorded
                    </div>
                  </li>
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">12:00 am</div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span>
                    </div>
                    <div className="timeline-desc text-dark mt-n1">Payment Done</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="card overflow-hidden">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-9 fw-semibold">Active Plan</h5>
                    <div className="row align-items-center">
                      <div className="col-12">
                        <div className="active-plan-wrapper">
                          <ul className="mb-3">
                            <li className="mb-2">
                              <span className="me-2">Name:</span>
                              <span className="fw-semibold">John Harrison</span>
                            </li>
                            <li className="mb-2">
                              <span className="me-2">Plan title:</span>
                              <span className="fw-semibold d-flex">Foundation Package</span>
                              {/* <span><small>Students looking </small></span> */}
                            </li>
                            <li className="mb-2">
                              <span className="me-2">Country:</span>
                              <span className="fw-semibold">UK</span>
                            </li>
                            <li className="mb-2">
                              <span className="me-2">Date of Expiry:</span>
                              <span className="fw-semibold">30/12/2025</span>
                            </li>
                          </ul>
                          <button type="button" class="btn btn-primary">Upgrade Plan</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row alig n-items-start">
                      <div className="col-8">
                        <h5 className="card-title mb-9 fw-semibold">ATS Friendly Resume</h5>
                        <h4 className="fw-semibold mb-3">2 Received</h4>
                        <div className="d-flex align-items-center pb-1">
                          <span
                            className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                            <i className="ti ti-arrow-down-right text-danger"></i>
                            
                          </span>
                          <p className="text-dark me-1 fs-3 mb-0">1 Remaining</p>
                          {/* <p className="fs-3 mb-0">last year</p> */}
                        </div>
                        <button type="button" class="btn btn-primary">Explore</button>

                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div
                            className="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                            <i className="ti ti-file-cv fs-6"></i>
                            <i class="ti ti-notes"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="earning"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold mb-4">CV, Cover Letter LinkedIn Review</h5>
                <div className="table-responsive">
                  <table className="table text-nowrap mb-0 align-middle">
                    <thead className="text-dark fs-4">
                      <tr>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Id</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Assigned</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Name</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Type</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Action</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-bottom-0"><h6 className="fw-semibold mb-0">1</h6></td>
                        <td className="border-bottom-0">
                          <h6 className="fw-semibold mb-1">Sunil Joshi</h6>
                          <span className="fw-normal">Web Designer</span>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">Elite Admin</p>
                        </td>
                        <td className="border-bottom-0">
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-primary rounded-3 fw-semibold">Resume</span>
                          </div>
                        </td>
                        <td className="border-bottom-0">
                          <a href="#" className="fs-3"><i class="ti ti-external-link"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-bottom-0"><h6 className="fw-semibold mb-0">2</h6></td>
                        <td className="border-bottom-0">
                          <h6 className="fw-semibold mb-1">Andrew McDownland</h6>
                          <span className="fw-normal">Project Manager</span>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">Real Homes WP Theme</p>
                        </td>
                        <td className="border-bottom-0">
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-success rounded-3 fw-semibold">Cover Letter</span>
                          </div>
                        </td>
                        <td className="border-bottom-0">
                          <a href="#" className="fs-3"><i class="ti ti-external-link"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-bottom-0"><h6 className="fw-semibold mb-0">3</h6></td>
                        <td className="border-bottom-0">
                          <h6 className="fw-semibold mb-1">Christopher Jamil</h6>
                          <span className="fw-normal">Project Manager</span>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">MedicalPro WP Theme</p>
                        </td>
                        <td className="border-bottom-0">
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-danger rounded-3 fw-semibold">CV</span>
                          </div>
                        </td>
                        <td className="border-bottom-0">
                          <a href="#" className="fs-3"><i class="ti ti-external-link"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-bottom-0"><h6 className="fw-semibold mb-0">4</h6></td>
                        <td className="border-bottom-0">
                          <h6 className="fw-semibold mb-1">Nirav Joshi</h6>
                          <span className="fw-normal">Frontend Engineer</span>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">Hosting Press HTML</p>
                        </td>
                        <td className="border-bottom-0">
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-success rounded-3 fw-semibold">Cover Letter</span>
                          </div>
                        </td>
                        <td className="border-bottom-0">
                          <a href="#" className="fs-3"><i class="ti ti-external-link"></i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5 class="card-title fw-semibold mb-4">Subscription bundle</h5>
          </div>
          <div className="col-sm-6 col-xl-3 mb-3">
            <div className="card overflow-hidden rounded-2 h-100">
              <div className="position-relative">
                <a href="javascript:void(0)"><img src="./assets/images/products/s4.jpg" className="card-img-top rounded-0" alt="..." /></a>
                                      </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold">Top Websites for Job Search</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 mb-3">
            <div className="card overflow-hidden rounded-2 h-100">
              <div className="position-relative">
                <a href="javascript:void(0)"><img src="./assets/images/products/s5.jpg" className="card-img-top rounded-0" alt="..." /></a>
                                      </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold">Must-Know Websites</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 mb-3">
            <div className="card overflow-hidden rounded-2 h-100">
              <div className="position-relative">
                <a href="javascript:void(0)"><img src="./assets/images/products/s7.jpg" className="card-img-top rounded-0" alt="..." /></a>
                                      </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold">Top 25 Graduate Employers</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 mb-3">
            <div className="card overflow-hidden rounded-2 h-100">
              <div className="position-relative">
                <a href="javascript:void(0)"><img src="./assets/images/products/s11.jpg" className="card-img-top rounded-0" alt="..." /></a>
                                      </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold">Graduate Salaries Degree Specific</h6>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center mt-4">
            <button type="button" class="btn btn-primary">Explore All</button>
          </div>
        </div>
        {/* <div className="py-6 px-6 text-center">
          <p className="mb-0 fs-4">Design and Developed by <a href="https://adminmart.com/" target="_blank" className="pe-1 text-primary text-decoration-underline">AdminMart.com</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a></p>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
