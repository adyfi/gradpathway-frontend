import React from 'react';

const AssesmentForm = () => {
  return <div>
   <div class="assesment-wrapper">
        <div class="container">
            <div class="assesment-form-wrapper">
                <div class="form-heading">
                    <h1>Assesment</h1>
                </div>
                <form>
                    <div class="row g-4">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Full Name</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Email Address</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputPassword4"/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Phone Number</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Linkedin Profile Url</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputPassword4"/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Current Course of study in the UK</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Highest Level of Education Completed</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputPassword4"/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Years of Work Experience in Home Country</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Do you hold a Post -Study Work (PSW)
                                visa?(Yes/No)</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputPassword4"/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Months Remaining on Current Visa</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Number of Job Applications Submitted in the
                                UK</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputPassword4"/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Number of Interviews Received in the UK</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Confidence Level in Job Search Stategy</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputPassword4"/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Relevance of UK Work Experience to Desired Career
                                Path</label>
                            <input type="text" class="form-control" id="inputEmail4"
                                placeholder="Highly Relevant"/>
                        </div>
                        <div class="col-md-12">
                            <label for="">
                                Have you started applying for jobs in the UK?
                            </label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2"/>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Describe any UK-based work
                                ecperiance (e.g., internships, pasrt-time jobs)</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">Target job or industry in the UK</label>
                            <input type="text" placeholder="input text" class="form-control" id="inputEmail4"/>
                        </div>

                        <div class="col-md-12">
                            <label for="exampleFormControlTextarea1" class="form-label">List any identified companies or
                                organizations in the UK where you'd like to work (optional)</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="col-md-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Current Job Search Methode (e.g.,
                                online platform, networking, university support)</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="col-md-12">
                            <label for="">
                                Are you aware of the visa requirements for working in the UK after PSW visa expiration?
                            </label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2"/>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <label for="">
                                Have you explored visa options to stay in the UK beyond your current visa?
                            </label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2"/>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Are you reveiving any job search
                                support from your university or organizations?Describe if applicable</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="col-md-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Additional Resources od Support
                                Needed for Job Search</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="col-md-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Perceived Barriers to Finding a Job
                                in the Uk</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="col-md-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Immediate Next Steps in Your Job
                                Search</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="col-md-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Plan if Unable to Secure a Job
                                Before Visa Expiration(Optional)</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="col">
                            <a href="" class="btn btn-outline-primary">Get Recommended Packege</a>
                        </div>
                    </div>
                </form>

                <div class="tips">
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
                {/* <div class="chart-wrapper">
                    <h4>Likelihood Assessment:</h4>
                    <div class="chart-canvas">
                        <canvas id="myChart" style="width:100%;max-width:800px"></canvas>
                    </div>
                </div> */}
            </div>
        </div>


    </div>
  </div>
};

export default AssesmentForm;
