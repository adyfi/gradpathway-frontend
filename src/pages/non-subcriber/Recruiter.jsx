import React from 'react';

const Recruiter = () => {
    return <>
        <div className="container" style={{ marginTop: "12vh" }}>
            <div className="row">
                <div className="col-md-7" style={{ marginTop: "10vh" }}>
                    <h1 className='display-4 fw-bolder text-primary'>
                        Hire Tech Talent Ready to Deploy in Just 2 Weeks!
                    </h1>
                    <p className='text-secondary mt-3' style={{ fontSize: '1.4rem' }}>
                        Why wait weeks to hire? Access skilled, pre-vetted tech talent ready to contribute from day one in just hours.
                    </p>
                    <div className="banner-button">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Register Now</a>
                    </div>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                    <img src="ab-banner.png" width={"90%"} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row" style={{marginTop:"20vh"}}>
                <h1 className='text-center fw-bolder display-4'> 
                    Recruit <span className='text-primary'>Top Talent</span> for These<br /> 
                    <span className='text-primary'>In-Demand</span> Tech Roles
                </h1>

                <div className="col-md-12 d-flex justify-content-center flex-wrap gap-2 mt-3 mb-5">
                    <button className="btn btn-info text-white"> Business Analyst</button>
                    <button className="btn btn-info text-white"> Backend Developer</button>
                    <button className="btn btn-info text-white"> Frontend Developer</button>
                    <button className="btn btn-info text-white"> Tech Lead</button>
                    <button className="btn btn-info text-white"> Data Analyst</button>
                    <button className="btn btn-info text-white"> Gen AI Developer</button>
                    <button className="btn btn-info text-white"> ReactJS Develoepr</button>
                    <button className="btn btn-info text-white"> Python Developer</button>
                    <button className="btn btn-info text-white"> SDTE</button>
                    <button className="btn btn-info text-white"> .NET Developer</button>
                </div>
                <div className="banner-button text-center mb-5">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Register Now</a>
                    </div>
            </div>
        </div>

        {/* registernow-form */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Register Now</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='registernow-form'>
                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Location <span className='asterisk'>*</span></label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Location" />
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Full Name <span className='asterisk'>*</span></label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Jonh Doe" />
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Company <span className='asterisk'>*</span></label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Company Name" />
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Email Id <span className='asterisk'>*</span></label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="example@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Phone Number <span className='asterisk'>*</span></label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        
    </>

};

export default Recruiter;