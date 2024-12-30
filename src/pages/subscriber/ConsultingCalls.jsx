import React from "react";
import "./dashboard-pages.scss"

const ConsultingCalls = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h5 className="card-title fw-semibold mb-4">Consulting Calls</h5>
          <div className="col-12">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    2025-12-28 15:00
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Resume Review Discussion</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-success">Completed</a>
                    <a href="#" className="btn btn-primary ms-3">View Notes</a>
                  </div>
                </div>

              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    2025-01-28 11:00
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">LinkedIn Profile Optimization</h5>
                    <p className="card-text">Discuss strategies to improve LinkedIn visibility and attract recruiters.</p>
                    <a href="#" className="btn btn-warning text-light">Scheduled</a>
                    <a href="#" className="btn btn-primary ms-3">Join The Call</a>
                  </div>
                </div>

              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    2025-1-30 10:00
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Career Growth Discussion</h5>
                    <p className="card-text">Explore career opportunities and personalized strategies for success.</p>
                    <a href="#" className="btn btn-warning text-light">Scheduled</a>
                    <a href="#" className="btn btn-primary ms-3">Join The Call</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    2024-12-22 15:30
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Resume Feedback Session</h5>
                    <p className="card-text">The call for reviewing and improving your resume was missed.</p>
                    <a href="#" className="btn btn-danger text-light">Missed</a>
                    <a href="#" className="btn btn-primary ms-3">Reschedule</a>
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

export default ConsultingCalls;
