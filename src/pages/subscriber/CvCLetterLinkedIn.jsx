import React from "react";
import "./dashboard-pages.scss"

const CvCLetterLinkedIn = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <h5 className="card-title fw-semibold mb-4">CV, Cover Letter LinkedIn Review</h5>
          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="row">
              {/* <div className="col-12">
                <div className="card w-100">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-semibold mb-4">CV, Cover Letter LinkedIn Review</h5>
                  </div>
                </div>
              </div> */}
              <div className="col-12">
                <div className="card mb-3 horizontal-card" >
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img src="./demo-image.webp" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title">LinkedIn Profile Review</h5>
                        <p className="card-text">Enhance your LinkedIn profile with targeted improvements for headlines, summaries, and networking strategies to improve visibility and engagement.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 10 minutes ago</small></p>
                        <button type="button" class="btn btn-primary">Download LinkedIn Review <i class="ti ti-download"></i></button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3 horizontal-card" >
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img src="./demo-image.webp" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title">Cover Letter Service</h5>
                        <p className="card-text">Craft a personalized, compelling cover letter that highlights your achievements and fits the role you're applying for.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 1 day ago</small></p>
                        <button type="button" class="btn btn-primary">Download Cover Letter <i class="ti ti-download"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex align-items-stretch">
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
                            <span className="badge bg-secondary rounded-3 fw-semibold">Cover Letter</span>
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
 
      </div>
    </>
  );
};

export default CvCLetterLinkedIn;
