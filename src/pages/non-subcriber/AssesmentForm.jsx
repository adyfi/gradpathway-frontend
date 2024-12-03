import React from 'react';

const AssesmentForm = () => {
  return <div>
   <div className="assesment-wrapper">
        <div className="container">
            <div className="assesment-form-wrapper">
                <div className="form-heading">
                    <h1>Assesment</h1>
                </div>
                <form>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Full Name</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Email Address</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputPassword4"/>
                        </div>

                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Phone Number</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Linkedin Profile Url</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputPassword4"/>
                        </div>

                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Current Course of study in the UK</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Highest Level of Education Completed</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputPassword4"/>
                        </div>

                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Years of Work Experience in Home Country</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Do you hold a Post -Study Work (PSW)
                                visa?(Yes/No)</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputPassword4"/>
                        </div>

                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Months Remaining on Current Visa</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Number of Job Applications Submitted in the
                                UK</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputPassword4"/>
                        </div>

                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Number of Interviews Received in the UK</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Confidence Level in Job Search Stategy</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputPassword4"/>
                        </div>

                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Relevance of UK Work Experience to Desired Career
                                Path</label>
                            <input type="text" className="form-control" id="inputEmail4"
                                placeholder="Highly Relevant"/>
                        </div>
                        <div className="col-md-12">
                            <label for="">
                                Have you started applying for jobs in the UK?
                            </label>
                            <br/>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1"/>
                                <label className="form-check-label" for="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">No</label>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">Describe any UK-based work
                                ecperiance (e.g., internships, pasrt-time jobs)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="col-md-12">
                            <label for="inputEmail4" className="form-label">Target job or industry in the UK</label>
                            <input type="text" placeholder="input text" className="form-control" id="inputEmail4"/>
                        </div>

                        <div className="col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">List any identified companies or
                                organizations in the UK where you'd like to work (optional)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">Current Job Search Methode (e.g.,
                                online platform, networking, university support)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="col-md-12">
                            <label for="">
                                Are you aware of the visa requirements for working in the UK after PSW visa expiration?
                            </label>
                            <br/>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1"/>
                                <label className="form-check-label" for="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">No</label>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label for="">
                                Have you explored visa options to stay in the UK beyond your current visa?
                            </label>
                            <br/>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1"/>
                                <label className="form-check-label" for="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">No</label>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">Are you reveiving any job search
                                support from your university or organizations?Describe if applicable</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">Additional Resources od Support
                                Needed for Job Search</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">Perceived Barriers to Finding a Job
                                in the Uk</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">Immediate Next Steps in Your Job
                                Search</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">Plan if Unable to Secure a Job
                                Before Visa Expiration(Optional)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col">
                            <a href="" className="btn btn-outline-primary">Get Recommended Packege</a>
                        </div>
                    </div>
                </form>

                <div className="tips">
                    <h2>Package Name for £149: Advanced Package</h2>
                    <p><b>Reasoning:</b></p>
                    <ul>
                        <li>Saurabh Dhakne has submitted 2 applications, falling within the criteria range of 0-5 applications for
                            the Foundation Package and 6-10 applications for the Advanced Package. The Advanced Package
                            aligns better with his current search activity.
                        </li>
                        <li>
                            His confidence in his job search strategy is not high, making the personalized interview answers and weekly job subscription in the Advanced Package beneficial for boosting his confidence.
                        </li>
                        <li>
                            With 2 applications submitted, he may need more support in enhancing his application success and interview performance, which the Advanced Package covers with personalized services.
                        </li>
                    </ul>
                    <p><b>Job Search Improvement Tips:</b></p>
                    <ul>
                        <li>Consider tailoring your applications to each job posting to highlight relevant experience and skills.</li>
                        <li>Practice common interview questions and consider seeking feedback from friends or mentors to
                            improve your performance.</li>
                        <li>
                            Stay consistent in your job search efforts and make use of resources like professional networking sites to expand your opportunities.
                        </li>
                    </ul>
                </div>
                {/* <div className="chart-wrapper">
                    <h4>Likelihood Assessment:</h4>
                    <div className="chart-canvas">
                        <canvas id="myChart" style="width:100%;max-width:800px"></canvas>
                    </div>
                </div> */}
            </div>
        </div>


    </div>
  </div>
};

export default AssesmentForm;
