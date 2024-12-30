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
                      Featured
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                
              </div>
              <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                      Featured
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
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
