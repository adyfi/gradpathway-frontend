import React, { useEffect, useState } from 'react';
import { sendRecommendationRequest } from '../../api/api';
import { AssessmentAnalytics } from './AssessmentAnalytics';

const AssesmentForm = () => {
    const [formData, setFormData] = useState({
        name: "Enter Name",
        email: "example.email@gmail.com",
        phone_number: "+44 1234567890",
        linkedin_profile: "https://linkedin.com/",
        current_course: "Master's in Computer Science",
        highest_education: "Bachelor's in IT",
        work_experience_home_country: "2 years in software development",
        psw_visa_status: "Valid",
        visa_expiry_months: "Less than 3 months",
        applications_submitted: '0-5',
        interviews_received: '0',
        confidence_level: "High",
        work_experience_uk_relevance: "SW Developer",
        uk_job_search_started: "Yes",
        uk_experience: "6 months internship in IT",
        target_industry: "IT & Software",
        identified_companies: "IBM, Microsoft, Google",
        current_search_methods: "Online job portals, referrals",
        visa_awareness: "Yes",
        explored_visa_options: "Yes",
        support_received: "Career counseling sessions",
        additional_resources_needed: "More networking opportunities",
        job_search_barriers: "Limited networking in UK",
        immediate_job_search_steps: "Attend career fairs, tailor CV",
        backup_plan: "Pursue further certifications",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [recommendation, setRecommendation] = useState(null);
    const [recommendedPackage, setRecommendedPackage] = useState(null);
    const [reasoning, setReasoning] = useState('');
    const [likelihoods, setLikelihoods] = useState();
    const [improvementTips, setImprovementTips] = useState([]);
    const [showAnalytics, setShowAnalytics] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const numericFields = [];
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
            console.log("response?.status ")
            console.log(response?.status)
            if (response?.status === 200 || response?.status === 201) {
                const recommendationData = response.data?.recommendation;
                console.log("response.data?.recommendation")
                console.log(response.data?.recommendation)

                if (recommendationData) {
                    setSuccess('Form submitted successfully!');
                    setRecommendation(recommendationData);
                    setRecommendedPackage(recommendationData.recommended_package);
                    setReasoning(recommendationData.reasoning);
                    setImprovementTips(recommendationData['job_search_improvement_tips']);
                    console.log("recommendationData")
                    console.log(recommendationData.likelihoods)
                    const chartData = Object.entries(recommendationData.likelihoods).map(([name, value]) => ({
                        name,
                        value: parseFloat(value.replace("%", "")),
                    }));
                    setLikelihoods(chartData)
                    setShowAnalytics(true)

                } else {
                    setError('Unexpected response format. Please try again later.');
                }
            } else {
                setError('Internal Server Error. Try again later.');
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        console.log("Updated likelihoods state:", likelihoods);
    }, [likelihoods]);

    useEffect(() => {
        console.log("{ showAnalytics, likelihoods, recommendedPackage, reasoning, improvementTips }");
        console.log({ showAnalytics, likelihoods, recommendedPackage, reasoning, improvementTips });
    }, [showAnalytics])

    if (showAnalytics) {
        console.log("{ likelihoods, recommendedPackage, reasoning, improvementTips }");
        console.log({ likelihoods, recommendedPackage, reasoning, improvementTips });
        return (
            <AssessmentAnalytics
                likelihoods={likelihoods}
                recommendedPackage={recommendedPackage}
                reasoning={reasoning}
                improvementTips={improvementTips}
                setShowAnalytics={setShowAnalytics}
            />
        )
    }

    return (<>

        <div className="container-fluid g-0 pt-4">
            <img style={{ maxHeight: "500px", objectFit: "cover" }} className="img-fluid w-100 min-vh-25 min-vh-md-50 mb-n7 mt-5" src={"./assessment2.jpg"} srcSet="" sizes="" width="" height="" alt="Photo by Irene Dávila" />
        </div>

        <div className="col-md-10 shadow-sm border mb-5 offset-md-1 p-5 bg-body mt-md-n6 position-relative rounded" style={{ marginTop: '-100px' }}>
            <div className="row">
                <div className="col-md-12 text-center align-self-center">
                    <div className="lc-block border-lg-end border-2 ">
                        <div editable="rich">
                            <p className="display-4 text-primary fw-bolder">Personalized Career Assessment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 offset-md-1 mb-5">
                    <div className="lc-block">
                        <div editable="rich">
                            <p className="lead text-secondary text-center"> Take our personalized career assessment to discover your strengths, align your interests, and unlock your career potential. Share your details, and let us guide you toward the right path with expert insights and tailored plans.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="row border bg-light rounded pb-4">
                        <h3 className='text-light bg-primary-2 p-2 mb-4'>Contact Details Section</h3>
                        <div className="p-3 pt-1 col-md-6">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="p-3 pt-1 col-md-6">
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
                        <div className="p-3 pt-1 col-md-6">
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
                        <div className="p-3 pt-1 col-md-6">
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
                    </div>

                    <div className="row border bg-light rounded pb-4 mt-5">
                        <h3 className='text-light bg-primary-2 p-2 mb-4'> Job Search Assessment Questions  </h3>
                        <div className="p-3 pt-1 col-md-6">
                            <label htmlFor="current_course" className="form-label">What is your current course of study in the UK?</label>
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
                        <div className="p-3 pt-1 col-md-6">
                            <label htmlFor="highest_education" className="form-label">What is your highest level of education completed prior to this course?
                            </label>
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
                        <div className="p-3 pt-1 col-md-6">
                            <label htmlFor="work_experience_home_country" className="form-label">How many years of work experience do you have in your home country?</label>
                            <input
                                type="text"
                                placeholder="Enter your work experience in home country"
                                className="form-control"
                                id="work_experience_home_country"
                                name="work_experience_home_country"
                                value={formData.work_experience_home_country}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row border bg-light rounded pb-4 mt-5">
                        <h3 className='text-light bg-primary-2 p-2 mb-4'>Job Search Progress  </h3>
                        <div className="p-3 pt-1 col-md-6 py-4">
                            <label>Have you started applying for jobs in the UK?</label>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="uk_job_search_started"
                                    id="uk_job_search_yes"
                                    value="Yes"
                                    checked={formData.uk_job_search_started === "Yes"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-2" htmlFor="uk_job_search_yes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="uk_job_search_started"
                                    id="uk_job_search_no"
                                    value="No"
                                    checked={formData.uk_job_search_started === "No"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-2" htmlFor="uk_job_search_no">
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="p-3 pt-1 col-md-6 py-4">
                            <label>If yes, how many job applications have you submitted so far? </label>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="applications_submitted"
                                    id="applications_submitted_0_5"
                                    value="0-5"
                                    checked={formData.applications_submitted === "0-5"}
                                    onChange={handleChange}
                                />
                                <label className="ms-3 form-check-label" htmlFor="applications_submitted_0_5">
                                    0-5
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="applications_submitted"
                                    id="applications_submitted_6_10"
                                    value="6-10"
                                    checked={formData.applications_submitted === "6-10"}
                                    onChange={handleChange}
                                />
                                <label className="ms-3 form-check-label" htmlFor="applications_submitted_6_10">
                                    6-5
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="applications_submitted"
                                    id="applications_submitted_11_20"
                                    value="11-20"
                                    checked={formData.applications_submitted === "11-20"}
                                    onChange={handleChange}
                                />
                                <label className="ms-3 form-check-label" htmlFor="applications_submitted_11_20">
                                    11-20
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="applications_submitted"
                                    id="applications_submitted_20+"
                                    value="20+"
                                    checked={formData.applications_submitted === "20+"}
                                    onChange={handleChange}
                                />
                                <label className="ms-2 form-check-label" htmlFor="applications_submitted_20+">
                                    20+
                                </label>
                            </div>

                        </div>

                        <div className="p-3 pt-1 col-md-6 py-4">
                            <label>How many interviews have you been invited to in the UK? </label>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="interviews_received"
                                    id="interviews_received_0"
                                    value="0"
                                    checked={formData.interviews_received === "0"}
                                    onChange={handleChange}
                                />
                                <label className="ms-3 form-check-label" htmlFor="interviews_received_0">
                                    0
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="interviews_received"
                                    id="interviews_received_1_2"
                                    value="1-2"
                                    checked={formData.interviews_received === "1-2"}
                                    onChange={handleChange}
                                />
                                <label className="ms-3 form-check-label" htmlFor="interviews_received_1_2">
                                    1-2
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="interviews_received"
                                    id="interviews_received_3_5"
                                    value="3-5"
                                    checked={formData.interviews_received === "3-5"}
                                    onChange={handleChange}
                                />
                                <label className="ms-3 form-check-label" htmlFor="interviews_received_3_5">
                                    3-5
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="interviews_received"
                                    id="interviews_received_6+"
                                    value="6+"
                                    checked={formData.interviews_received === "6+"}
                                    onChange={handleChange}
                                />
                                <label className="ms-2 form-check-label" htmlFor="interviews_received_6+">
                                    6+
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className="row border bg-light rounded pb-4 mt-5">
                        <h3 className='text-light bg-primary-2 p-2 mb-4'>Work Experience in the UK </h3>
                        <div className="p-3 pt-1 col-md-6 py-4">
                            <label>Have you gained any work experience in the UK (internships, part-time jobs, etc.)? </label>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="work_exp_in_uk"
                                    id="uk_job_search_yes"
                                    value="Yes"
                                // checked={formData.work_exp_in_uk === "Yes"}
                                // onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="uk_job_search_yes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="work_exp_in_uk"
                                    id="uk_job_search_no"
                                    value="No"
                                // checked={formData.work_exp_in_uk === "No"}
                                // onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="uk_job_search_no">
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="p-3 pt-1 col-md-6">
                            <label htmlFor="work_experience_uk_relevance" className="form-label">If yes, please describe the type of work experience you have gained in the UK.  </label>
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
                        <div className="p-3 pt-1 col-md-6 py-4">
                            <label>How relevant is this experience to your desired career path?
                            </label>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="rel_work_exp_in_uk"
                                    id="uk_job_search_hr"
                                    value="Yes"
                                // cherel_cked={formData.work_exp_in_uk === "Yes"}
                                // onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="uk_job_search_hr">
                                    Highly Relevant
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="rel_work_exp_in_uk"
                                    id="rel_uk_job_search_sr"
                                    value="No"
                                // cherel_cked={formData.work_exp_in_uk === "No"}
                                // onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="uk_job_search_sr">
                                    Somewhat Relevant
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="rel_work_exp_in_uk"
                                    id="uk_job_search_nr"
                                    value="No"
                                // checked={formData.rel_work_exp_in_uk === "No"}
                                // onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="uk_job_search_nr">
                                    Not Relevant
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row border bg-light rounded pb-4 mt-5">
                        <h3 className='text-light bg-primary-2 p-2 mb-4'>Post-Study Work (PSW) Visa Status</h3>

                        <div className="p-3 pt-1 col-md-6 py-4">
                            <label>Have you gained any work experience in the UK (internships, part-time jobs, etc.)? </label>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="psw_visa_status"
                                    id="psw_visa_status_yes"
                                    value="Yes"
                                    checked={formData.psw_visa_status === "Yes"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="psw_visa_status_yes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="psw_visa_status"
                                    id="psw_visa_status_yes"
                                    value="No"
                                    checked={formData.psw_visa_status === "No"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="psw_visa_status_no">
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="p-3 pt-1 col-md-6 py-4">
                            <label>If yes, when does your PSW visa expire?  </label>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="visa_expiry_months"
                                    id="visa_expiry_months_Less_than_3_months"
                                    value="Less than 3 months"
                                    checked={formData.visa_expiry_months === "Less than 3 months"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="visa_expiry_months_Less_than_3_months">
                                    Less than 3 months
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="visa_expiry_months"
                                    id="visa_expiry_months_Less_than_3_6_months"
                                    value="3-6 months"
                                    checked={formData.visa_expiry_months === "3-6 months"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="visa_expiry_months_Less_than_3_6_months">
                                    3-6 months
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="visa_expiry_months"
                                    id="visa_expiry_months_Less_than_7_12_months"
                                    value="7-12 months"
                                    checked={formData.visa_expiry_months === "7-12 months"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="visa_expiry_months_Less_than_7_12_months">
                                    7-12 months
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="visa_expiry_months"
                                    id="visa_expiry_months_More_than_12_months"
                                    value="More than 12 months"
                                    checked={formData.visa_expiry_months === "More than 12 months"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="visa_expiry_months_More_than_12_months">
                                    More than 12 months
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row border bg-light rounded pb-4 mt-5">
                        <h3 className='text-light bg-primary-2 p-2 mb-4'>Career Goals</h3>

                        <div className="p-3 pt-1 col-md-6">
                            <label htmlFor="target_industry" className="form-label">What type of job or industry are you targeting in the UK?                              </label>
                            <input
                                type="text"
                                placeholder="Enter Target job or industry in the UK"
                                className="form-control"
                                id="target_industry"
                                name="target_industry"
                                value={formData.target_industry}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="p-3 pt-1 col-md-6 py-4">
                            <label>Have you identified companies or organizations in the UK where you would like to work?</label>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="identified_preferd_companies"
                                    id="identified_preferd_companies_yes"
                                    value="Yes"
                                // checked={formData.identified_preferd_companies === "Yes"}
                                // onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="identified_preferd_companies_yes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="identified_preferd_companies"
                                    id="identified_preferd_companies_yes"
                                    value="No"
                                // checked={formData.identified_preferd_companies === "No"}
                                // onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="identified_preferd_companies_no">
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="p-3 pt-1 col-md-6">
                            <label htmlFor="identified_companies" className="form-label"> Please list the top three companies or organizations.</label>
                            <input
                                type="text"
                                placeholder=" please list the top three companies or organizations."
                                className="form-control"
                                id="identified_companies"
                                name="identified_companies"
                                value={formData.identified_companies}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="row border bg-light rounded pb-4 mt-5">
                        <h3 className='text-light bg-primary-2 p-2 mb-4'>Career Goals</h3>

                        <div className="p-3 pt-1 col-md-6">
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

                        <div className="p-3 pt-1 col-md-6 py-4">
                            <label>How confident are you in your job search strategy?
                            </label>

                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="confidence_level"
                                    id="Very_Confident"
                                    value="Very Confident"
                                    checked={formData.confidence_level === "Very Confident"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="Very_Confident">
                                    Very Confident
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="confidence_level"
                                    id="Confident"
                                    value="Confident"
                                    checked={formData.confidence_level === "Confident"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="Confident">
                                    Confident
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="confidence_level"
                                    id="Neutral"
                                    value="Neutral"
                                    checked={formData.confidence_level === "Neutral"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="Neutral">
                                    Neutral
                                </label>
                            </div>
                            <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="confidence_level"
                                    id="Not_Confident"
                                    value="Not Confident"
                                    checked={formData.confidence_level === "Not Confident"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-3" htmlFor="Not_Confident">
                                    Not Confident
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="row border bg-light rounded pb-4 mt-5">
                        <h3 className='text-light bg-primary-2 p-2 mb-4'>Visa Considerations</h3>
                        
                        <div className="p-3 pt-1 col-md-12">
                            <label>Are you aware of the visa requirements for working in the UK after PSW visa expiration?</label>
                            <div className="form-check form-check-inline ms-4">
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

                        <div className="p-3 pt-1 col-md-12">
                            <label>Have you explored visa options to stay in the UK beyond your current visa?</label>
                            <div className="form-check form-check-inline ms-4">
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
                                    checked={formData.explored_visa_options === "No"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="uk_job_search_no">
                                    No
                                </label>
                            </div>
                        </div>

                        {/* <div className="p-3 pt-1 col-md-6">
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
                        </div> */}
                        
                      
                        <div className="p-3 pt-1 col-md-6">
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
                        <div className="p-3 pt-1 col-md-6">
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
                        <div className="p-3 pt-1 col-md-6">
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
                        <div className="p-3 pt-1 col-md-6">
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
                        <div className="p-3 pt-1 col-md-6">
                            <label htmlFor="backup_plan" className="form-label">Plan if Unable to Secure a Job Before Visa Expiration.</label>
                            <input
                                type="text"
                                placeholder="Plan if Unable to Secure a Job Before Visa Expiration."
                                className="form-control"
                                id="backup_plan"
                                name="backup_plan"
                                value={formData.backup_plan}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="col-12 mt-4">
                        <button className='btn btn-primary px-4' type="submit" disabled={loading}>
                            {loading ? 'Submitting...' : success ? 'Re-Take' : 'Submit'}
                        </button>
                        {
                            likelihoods && likelihoods?.length > 0 &&
                            <button className='btn btn-primary px-4 ms-4' type="button" onClick={() => setShowAnalytics(true)}>
                                Show Analytics
                            </button>
                        }
                    </div>
                    {error && <div className="alert alert-danger mt-3">Error: {error}</div>}
                    {success && <div className="alert alert-success mt-3">Assessment submitted successfully!</div>}

                </form>
            </div >
        </div >

    </>)
};

export default AssesmentForm;
