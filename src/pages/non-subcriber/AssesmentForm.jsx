import React, { useState } from 'react';
import { sendRecommendationRequest } from '../../api/api';

const AssesmentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        linkedin_profile: "",
        current_course: "",
        highest_education: "",
        work_experience_home_country: "",
        psw_visa_status: "",
        visa_expiry_months: null,
        applications_submitted: null,
        interviews_received: null,
        confidence_level: "",
        work_experience_uk_relevance: "",
        uk_job_search_started: "",
        uk_experience: "",
        target_industry: "",
        identified_companies: "",
        current_search_methods: "",
        visa_awareness: "",
        explored_visa_options: "",
        support_received: "",
        additional_resources_needed: "",
        job_search_barriers: "",
        immediate_job_search_steps: "",
        backup_plan: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [ recommendation, setRecommendation] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const numericFields = ["visa_expiry_months", "applications_submitted", "interviews_received"];
        const isNumericField = numericFields.includes(name);

        setFormData({
            ...formData,
            [name]: isNumericField && value !== "" ? parseInt(value, 10) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await sendRecommendationRequest(formData);
            if (response?.status === 200 || response?.status === 201) {
                setSuccess(response.data || 'Form submitted successfully!');
                setRecommendation(recommendation)
            } else {
                setError('Internal Server Error. Try after sometime');
            }
        } catch (err) {
            setError(err); // Display error message
        } finally {
            setLoading(false);
        }
    };

    return <div>
        <div className="assesment-wrapper">
            <div className="container">
                <div className="assesment-form-wrapper">
                    <div className="form-heading">
                        <h1>Assessment</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="form-control"
                                    id="phone_number"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="linkedin_profile" className="form-label">LinkedIn Profile URL</label>
                                <input
                                    type="text"
                                    placeholder="Enter your LinkedIn profile URL"
                                    className="form-control"
                                    id="linkedin_profile"
                                    name="linkedin_profile"
                                    value={formData.linkedin_profile}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="current_course" className="form-label">Current Course</label>
                                <input
                                    type="text"
                                    placeholder="Enter your Current Course"
                                    className="form-control"
                                    id="current_course"
                                    name="current_course"
                                    value={formData.current_course}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="highest_education" className="form-label">Highest Education</label>
                                <input
                                    type="text"
                                    placeholder="Enter your Highest Education"
                                    className="form-control"
                                    id="highest_education"
                                    name="highest_education"
                                    value={formData.highest_education}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="work_experience_home_country" className="form-label">Years of Work Experience in Home Country</label>
                                <input
                                    type="text"
                                    placeholder="Enter your work experience"
                                    className="form-control"
                                    id="work_experience_home_country"
                                    name="work_experience_home_country"
                                    value={formData.work_experience_home_country}
                                    onChange={handleChange}
                                />
                            </div>
                             <div className="col-md-6">
                                <label htmlFor="work_experience_uk_relevance" className="form-label">Relevance of UK Work Experience to Desired Career Path</label>
                                <input
                                    type="text"
                                    placeholder="Relevance of UK Work Experience to Desired Career Path"
                                    className="form-control"
                                    id="work_experience_uk_relevance"
                                    name="work_experience_uk_relevance"
                                    value={formData.work_experience_uk_relevance}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="psw_visa_status" className="form-label">Do you hold a Post -Study Work (PSW)</label>
                                <input
                                    type="text"
                                    placeholder="Do you hold a Post -Study Work (PSW)"
                                    className="form-control"
                                    id="psw_visa_status"
                                    name="psw_visa_status"
                                    value={formData.psw_visa_status}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="visa_expiry_months" className="form-label">Months Remaining on Current Visa</label>
                                <input
                                    type="number"
                                    placeholder="Months Remaining on Current Visa"
                                    className="form-control"
                                    id="visa_expiry_months"
                                    name="visa_expiry_months"
                                    value={formData.visa_expiry_months}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="applications_submitted" className="form-label">Number of Job Applications Submitted in the UK</label>
                                <input
                                    type="number"
                                    placeholder="Number of Job Applications Submitted in the UK"
                                    className="form-control"
                                    id="applications_submitted"
                                    name="applications_submitted"
                                    value={formData.applications_submitted}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="interviews_received" className="form-label">Number of Interviews Received in the UK</label>
                                <input
                                    type="number"
                                    placeholder="Number of Interviews Received in the UK"
                                    className="form-control"
                                    id="interviews_received"
                                    name="interviews_received"
                                    value={formData.interviews_received}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="confidence_level" className="form-label">Confidence Level in Job Search Stategy</label>
                                <input
                                    type="text"
                                    placeholder="Confidence Level in Job Search Stategy"
                                    className="form-control"
                                    id="confidence_level"
                                    name="confidence_level"
                                    value={formData.confidence_level}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-12">
                                <label>Have you started applying for jobs in the UK?</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="uk_job_search_started"
                                        id="uk_job_search_yes"
                                        value="Yes"
                                        checked={formData.uk_job_search_started === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="uk_job_search_yes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="uk_job_search_started"
                                        id="uk_job_search_no"
                                        value="No"
                                        checked={formData.uk_job_search_started === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="uk_job_search_no">
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="uk_experience" className="form-label">Relevance of UK Work Experience to Desired Career path</label>
                                <input
                                    type="text"
                                    placeholder="Relevance of UK Work Experience to Desired Career path"
                                    className="form-control"
                                    id="uk_experience"
                                    name="uk_experience"
                                    value={formData.uk_experience}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="target_industry" className="form-label">Target job or industry in the UK</label>
                                <input
                                    type="text"
                                    placeholder="Target job or industry in the UK"
                                    className="form-control"
                                    id="target_industry"
                                    name="target_industry"
                                    value={formData.target_industry}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="identified_companies" className="form-label">List any identified companies orrganizations in the UK where you'd like to work (optional)</label>
                                <input
                                    type="text"
                                    placeholder="List any identified companies orrganizations in the UK where you'd like to work (optional)"
                                    className="form-control"
                                    id="identified_companies"
                                    name="identified_companies"
                                    value={formData.identified_companies}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="current_search_methods" className="form-label">Current Job Search Methode</label>
                                <input
                                    type="text"
                                    placeholder="(e.g. online platform, networking, university support)"
                                    className="form-control"
                                    id="current_search_methods"
                                    name="current_search_methods"
                                    value={formData.current_search_methods}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-12">
                                <label>Are you aware of the visa requirements for working in the UK after PSW visa expiration?</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="visa_awareness"
                                        id="visa_awareness_yes"
                                        value="Yes"
                                        checked={formData.visa_awareness === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="uk_job_search_yes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="visa_awareness"
                                        id="visa_awareness_no"
                                        value="No"
                                        checked={formData.visa_awareness === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="uk_job_search_no">
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label>Have you explored visa options to stay in the UK beyond your current visa?</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="explored_visa_options"
                                        id="explored_visa_options_yes"
                                        value="Yes"
                                        checked={formData.explored_visa_options === "Yes"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="uk_job_search_yes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="explored_visa_options"
                                        id="explored_visa_options_no"
                                        value="No"
                                        checked={formData.visa_awareness === "No"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="uk_job_search_no">
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="support_received" className="form-label">Are you reveived any job search support from your university or organizations? Describe if applicable.</label>
                                <input
                                    type="text"
                                    placeholder="Are you reveived any job search support from your university or organizations? Describe if applicable."
                                    className="form-control"
                                    id="support_received"
                                    name="support_received"
                                    value={formData.support_received}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="additional_resources_needed" className="form-label">Additional Resources or Support Needed for Job Search.</label>
                                <input
                                    type="text"
                                    placeholder="Additional Resources or Support Needed for Job Search."
                                    className="form-control"
                                    id="additional_resources_needed"
                                    name="additional_resources_needed"
                                    value={formData.additional_resources_needed}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="job_search_barriers" className="form-label">Perceived Barriers to Finding a Job in the Uk.</label>
                                <input
                                    type="text"
                                    placeholder="Perceived Barriers to Finding a Job in the Uk."
                                    className="form-control"
                                    id="job_search_barriers"
                                    name="job_search_barriers"
                                    value={formData.job_search_barriers}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="immediate_job_search_steps" className="form-label">Immediate Next Steps in Your Job.</label>
                                <input
                                    type="text"
                                    placeholder="Immediate Next Steps in Your Job."
                                    className="form-control"
                                    id="immediate_job_search_steps"
                                    name="immediate_job_search_steps"
                                    value={formData.immediate_job_search_steps}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="backup_plan" className="form-label">Plan if Unable to Secure a Job Before Visa Expiration(Optional).</label>
                                <input
                                    type="text"
                                    placeholder="Plan if Unable to Secure a Job Before Visa Expiration(Optional)."
                                    className="form-control"
                                    id="backup_plan"
                                    name="backup_plan"
                                    value={formData.backup_plan}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        <div className="col-12 mt-5">
                            <button className='btn btn-primary' type="submit" disabled={loading || success}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                        {error && <div className="alert alert-danger mt-3">Error: {error}</div>}
                        {success && <div className="alert alert-success mt-3">Form submitted successfully!</div>}

                    </form>

                    <p>
                        {recommendation && recommendation}
                    </p>
                    {/* 
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
                </div> */}
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
