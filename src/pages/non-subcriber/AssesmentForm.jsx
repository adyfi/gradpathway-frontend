import React, { useEffect, useState } from 'react';
import { sendRecommendationRequest } from '../../api/api';
import "./animationForm.css"
import Loader from '../../components/loader';
import { AssessmentAnalytics } from './AssessmentAnalytics';

const AssesmentForm = () => {
    const [personalDetails, setPersonalDetails] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        uk_job_search_started:"Yes",
        phone_number: "+44 1234567890",
        linkedin_profile: "https://www.linkedin.com/",
        current_course: "Master's in Computer Science",
        highest_education: "Bachelor's in IT",
        work_experience_home_country: "2 years in software development",
        psw_visa_status: "Yes",
        psw_visa_expiry_months: "Less than 3 months",
        visa_expiry_months: "Less than 3 months",
        applications_submitted: '0-5',
        interviews_received: '0',
        confidence_level: "High",
        work_experience_uk_relevance: "SW Developer",

        k_job_search_started: "Yes",
        uk_experience: "6 months internship in IT",
        target_industry: "IT & Software",
        identified_companies: "IBM, Microsoft, Google",
        current_search_methods: "Online job portals, referrals",
        visa_awareness: "Yes",
        explored_visa_options: "Yes",
        is_support_received: "Yes",
        support_received: "Career counseling sessions",
        additional_resources_needed: "More networking opportunities",
        job_search_barriers: "Limited networking in UK",
        immediate_job_search_steps: "Attend career fairs, tailor CV",
        is_backup_plan: 'Yes',
        backup_plan: "Pursue further certifications",
        cvFile: null,
        graduation_year: 2024,
        rel_work_exp: 'Not Relevant',
        work_exp_in_uk: 'Yes',
        identified_preferd_companies: "Yes"
    });
    // const [formData,setFormData] = useState({})
    const [currentSection, setCurrentSection] = useState(0);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [recommendation, setRecommendation] = useState(null);
    const [recommendedPackage, setRecommendedPackage] = useState(null);
    const [reasoning, setReasoning] = useState('');
    const [likelihoods, setLikelihoods] = useState();
    const [improvementTips, setImprovementTips] = useState([]);
    const [showAnalytics, setShowAnalytics] = useState(false);
    const [cvFile, setCVFile] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        const numericFields = [];
        const isNumericField = numericFields.includes(name);

        setFormData({
            ...formData,
            [name]: isNumericField && value !== "" ? parseInt(value, 10) : value,
        });

        console.log(formData);

    };





    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            setPersonalDetails({
                name: formData.name,
                email: formData.email,
                phone: formData.phone_number,
                linkedIn: formData.linkedin_profile,
            })
            const response = await sendRecommendationRequest(formData);
            // alert("recommendation Successfully");
            // console.log("response?.status ") 
            // console.log(response?.status)
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
                    setShowAnalytics(true);

                } else {
                    setError('Unexpected response format. Please try again later.');
                }
            }
            else {
                setError('Internal Server Error. Try again later.');
            }
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    };

    const handleNext = () => {
        setCurrentSection((prev) => prev + 1);
    };

    const handleBack = () => {
        setCurrentSection((prev) => prev - 1);
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
                personalDetails={personalDetails}
            />
        )
    }
    return (<>

        {loading && <Loader />}
        <div className="container-fluid aform-container">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="container mb-5 mt-15vh max-w-form">
                <div className="row p-3">
                    <div className="col-md-4 pe-4">
                        <div className="d-flex align-items-center">
                            {/* <img src="./gp-logo.svg" width={20} alt="" /> */}
                            {/* <img src="./gp-logo-white.svg" width={20} alt="" /> */}
                            <h4 className='text-primary-form fw-bolder mt-2'>
                                Assessment Form
                            </h4>
                        </div>
                        <p style={{ lineHeight: '1em', fontSize: '.9em', textAlign: 'justify' }}>
                            <small className='text-secondary-form'>
                                Take our personalized career assessment to discover your strengths, align your interests, and unlock your career potential. Share your details, and let us guide you toward the right path with expert insights and tailored plans.
                            </small>
                        </p>
                        <a href="./Assessment-example.pdf" className='my-5 text-dark'>Click here to Download Example Report</a>
                        <h5 className="col-md-12 bg-primary-2 text-light p-2 rounded  fw-bolder mt-3">
                            Question Sections
                        </h5>
                        <ul className='ps-0 mt-'>
                            <li className={` ${currentSection === 0 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Personal and Educational Background</li>
                            <li className={` ${currentSection === 1 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Work Experience </li>
                            <li className={` ${currentSection === 2 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Skills and Competencies </li>
                            <li className={` ${currentSection === 3 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Career Goals and Preferences</li>
                            <li className={` ${currentSection === 4 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Cultural Fit and Soft Skills </li>
                            {/* <li className={` ${currentSection === 10 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Next Steps </li> */}

                        </ul>
                    </div>

                    <div className="col-md-8 form-right rounded assessment-form-new">
                        <form onSubmit={handleSubmit}>
                            {currentSection === 0 && (
                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className="text-primary-form p-2 fw-bolder"><b>Assessment Questions for Grad Students</b></h3>
                                    <div className="mb-3 ms-1">
                                        <span className="rounded col h5">Personal and Educational Background</span>
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="name" className="form-label">Full Name <span className='text-danger'>*</span></label>
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
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="email" className="form-label">Email Address <span className='text-danger'>*</span></label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="phone_number" className="form-label">Phone Number <span className='text-danger'>*</span></label>
                                        <input
                                            type="text"
                                            placeholder="Enter your phone number"
                                            className="form-control"
                                            id="phone_number"
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="p-3 pt-1 col-md-12">
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

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="cv_upload" className="form-label">Upload Your CV for Review</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="cv_upload"
                                            name="cv_upload"
                                            onChange={(e) => setCVFile(e.target.files[0])}
                                            accept=".pdf,.docx"
                                        />
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="highest_education" className="form-label">1. What is your highest level of education completed? <span className='text-danger'>*</span></label>
                                        <select
                                            className="form-select"
                                            id="highest_education"
                                            name="highest_education"
                                            value={formData.highest_education}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Open this select menu</option>
                                            <option value="1">Bachelor's</option>
                                            <option value="2">Master's</option>
                                            <option value="3">Ph.D</option>
                                            <option value="4">Others</option>
                                        </select>
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="field_of_study" className="form-label">2. What is your major or field of study? <span className='text-danger'>*</span></label>
                                        <select
                                            className="form-select"
                                            id="field_of_study"
                                            name="field_of_study"
                                            value={formData.field_of_study}
                                            onChange={handleChange}
                                        >
                                            <option value="">Open this select menu</option>
                                            <option value="Computer Science">Computer Science</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Mathematics">Mathematics</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="graduation_year" className="form-label">3. What year did you graduate or expect to graduate? <span className='text-danger'>*</span></label>
                                        {/* <input
                                            type="text"
                                            placeholder="Enter the graduation year"
                                            className="form-control"
                                            id="graduation_year"
                                            name="graduation_year"
                                            value={formData.graduation_year}
                                            onChange={handleChange}
                                        /> */}
                                        <select
                                            className="form-control"
                                            id="graduation_year"
                                            name="graduation_year"
                                            value={formData.graduation_year}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select year</option>
                                            {Array.from({ length: 31 }, (_, index) => {
                                                const year = 2000 + index; // Generate years from 2000 to 2030
                                                return (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>

                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label>4. Do you have any additional certifications or qualifications?</label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="additional_certifications_started"
                                                id="additional_certifications_yes"
                                                value="Yes"
                                                checked={formData.additional_certifications_started === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="additional_certifications_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="additional_certifications_started"
                                                id="additional_certifications_no"
                                                value="No"
                                                checked={formData.additional_certifications_started === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="additional_certifications_no">
                                                No
                                            </label>
                                        </div>
                                        {formData.additional_certifications_started === "Yes" && (
                                            <>
                                                <label htmlFor="certifications_list" className="form-label">If yes, list them</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter certifications"
                                                    className="form-control"
                                                    id="certifications_list"
                                                    name="certifications_list"
                                                    value={formData.certifications_list}
                                                    onChange={handleChange}
                                                />
                                            </>
                                        )}
                                    </div>

                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label>5. Are you currently enrolled in any skill-development programs or bootcamps?</label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="enrolled_in_bootcamps_started"
                                                id="enrolled_in_bootcamps_yes"
                                                value="Yes"
                                                checked={formData.enrolled_in_bootcamps_started === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="enrolled_in_bootcamps_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="enrolled_in_bootcamps_started"
                                                id="enrolled_in_bootcamps_no"
                                                value="No"
                                                checked={formData.enrolled_in_bootcamps_started === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="enrolled_in_bootcamps_no">
                                                No
                                            </label>
                                        </div>
                                        {formData.enrolled_in_bootcamps_started === "Yes" && (
                                            <>
                                                <label htmlFor="bootcamp_details" className="form-label">If yes, specify.</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter the program name"
                                                    className="form-control"
                                                    id="bootcamp_details"
                                                    name="bootcamp_details"
                                                    value={formData.bootcamp_details}
                                                    onChange={handleChange}
                                                />
                                            </>
                                        )}
                                    </div>

                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-dark text-white mt-3" onClick={handleNext} disabled={!formData.name || !formData.email || !formData.phone_number} > Continue </button>
                                    </div>
                                </div>
                            )}


                            {currentSection === 1 && (

                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'> Work Experience  </h3>

                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label className='form-label'>
                                            1. Do you have any work experience related to your field of study?
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="has_work_experience_in_field"
                                                id="work_experience_yes"
                                                value="Yes"
                                                checked={formData.has_work_experience_in_field === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="work_experience_yes">Yes</label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="has_work_experience_in_field"
                                                id="work_experience_no"
                                                value="No"
                                                checked={formData.has_work_experience_in_field === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="work_experience_no">No</label>
                                        </div>

                                        {/* Conditional Section for "Yes" */}
                                        {formData.has_work_experience_in_field === "Yes" && (
                                            <div className='if-yes-div'>
                                                <div>
                                                    <span className='rounded col h6'>If yes, provide details related to your field of study</span>
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="job_title_in_field" className="form-label">Job Title in Your Field</label>
                                                    <select
                                                        className="form-select"
                                                        id="job_title_in_field"
                                                        name="job_title_in_field"
                                                        value={formData.job_title_in_field}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select a job title</option>
                                                        <option value="Software Engineer">Software Engineer</option>
                                                        <option value="Data Scientist">Data Scientist</option>
                                                        <option value="Product Manager">Product Manager</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="work_duration_in_field" className="form-label">Duration of Work in Your Field</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="work_duration_in_field"
                                                        name="work_duration_in_field"
                                                        value={formData.work_duration_in_field}
                                                        onChange={handleChange}
                                                        placeholder="Enter duration (e.g., 6 months)"
                                                    />
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="field_related_responsibilities" className="form-label">Responsibilities in Your Field</label>
                                                    <select
                                                        className="form-select"
                                                        id="field_related_responsibilities"
                                                        name="field_related_responsibilities"
                                                        multiple
                                                        value={formData.field_related_responsibilities}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="Coding">Coding</option>
                                                        <option value="Testing">Testing</option>
                                                        <option value="Team Collaboration">Team Collaboration</option>
                                                        <option value="Client Communication">Client Communication</option>
                                                        <option value="Project Management">Project Management</option>
                                                    </select>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="internship_status" className="form-label">
                                            2. Have you undertaken any internships?
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="internship_status"
                                                id="internship_yes"
                                                value="Yes"
                                                checked={formData.internship_status === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="internship_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="internship_status"
                                                id="internship_no"
                                                value="No"
                                                checked={formData.internship_status === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="internship_no">
                                                No
                                            </label>
                                        </div>

                                        {/* Conditional Section for "Yes" */}
                                        {formData.internship_status === "Yes" && (
                                            <div className="if-yes-div">
                                                <div>
                                                    <span className="rounded col h6">If yes, provide details of your internship</span>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="internship_organization" className="form-label">Organization</label>
                                                    <select
                                                        className="form-select"
                                                        id="internship_organization"
                                                        name="internship_organization"
                                                        value={formData.internship_organization}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select an organization</option>
                                                        <option value="Company A">Company A</option>
                                                        <option value="Company B">Company B</option>
                                                        <option value="Startup X">Startup X</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="internship_role" className="form-label">Role</label>
                                                    <select
                                                        className="form-select"
                                                        id="internship_role"
                                                        name="internship_role"
                                                        value={formData.internship_role}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select a role</option>
                                                        <option value="Intern">Intern</option>
                                                        <option value="Research Assistant">Research Assistant</option>
                                                        <option value="Software Developer Intern">Software Developer Intern</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="internship_duration" className="form-label">Duration</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="internship_duration"
                                                        name="internship_duration"
                                                        value={formData.internship_duration}
                                                        onChange={handleChange}
                                                        placeholder="Enter duration (e.g., 3 months)"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="freelance_project_status" className="form-label">
                                            3. Have you worked on any freelance, consulting, or part-time projects?
                                        </label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="freelance_project_status"
                                                id="freelance_project_yes"
                                                value="Yes"
                                                checked={formData.freelance_project_status === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="freelance_project_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="freelance_project_status"
                                                id="freelance_project_no"
                                                value="No"
                                                checked={formData.freelance_project_status === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="freelance_project_no">
                                                No
                                            </label>
                                        </div>

                                        {/* Show if freelance project status is "Yes" */}
                                        {formData.freelance_project_status === "Yes" && (
                                            <div className="if-yes-div">
                                                <div className="">
                                                    <span className="rounded col h6">If yes, provide details </span>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="organization" className="form-label">Organization</label>
                                                    <select
                                                        className="form-select"
                                                        id="organization"
                                                        name="organization"
                                                        value={formData.organization}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select an organization</option>
                                                        <option value="Company A">Company A</option>
                                                        <option value="Company B">Company B</option>
                                                        <option value="Startup X">Startup X</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="role" className="form-label">Role</label>
                                                    <select
                                                        className="form-select"
                                                        id="role"
                                                        name="role"
                                                        value={formData.role}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select a role</option>
                                                        <option value="Freelancer">Freelancer</option>
                                                        <option value="Consultant">Consultant</option>
                                                        <option value="Part-Time Developer">Part-Time Developer</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="duration" className="form-label">Duration</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="duration"
                                                        name="duration"
                                                        value={formData.duration}
                                                        onChange={handleChange}
                                                        placeholder="Enter duration (e.g., 6 months)"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="research_project_status" className="form-label">
                                            4. Have you been involved in any research projects or academic publications?
                                        </label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="research_project_status"
                                                id="research_project_yes"
                                                value="Yes"
                                                checked={formData.research_project_status === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="research_project_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="research_project_status"
                                                id="research_project_no"
                                                value="No"
                                                checked={formData.research_project_status === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="research_project_no">
                                                No
                                            </label>
                                        </div>

                                        {/* Show if research project status is "Yes" */}
                                        {formData.research_project_status === "Yes" && (
                                            <div className="if-yes-div">
                                                <div>
                                                    <span className="rounded col h6">If yes, provide details </span>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="organization" className="form-label">Organization</label>
                                                    <select
                                                        className="form-select"
                                                        id="organization"
                                                        name="organization"
                                                        value={formData.organization}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select an organization</option>
                                                        <option value="University A">University A</option>
                                                        <option value="Institute B">Institute B</option>
                                                        <option value="Research Lab X">Research Lab X</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="role" className="form-label">Role</label>
                                                    <select
                                                        className="form-select"
                                                        id="role"
                                                        name="role"
                                                        value={formData.role}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select a role</option>
                                                        <option value="Research Assistant">Research Assistant</option>
                                                        <option value="Lead Researcher">Lead Researcher</option>
                                                        <option value="Contributor">Contributor</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="duration" className="form-label">Duration</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="duration"
                                                        name="duration"
                                                        value={formData.duration}
                                                        onChange={handleChange}
                                                        placeholder="Enter duration (e.g., 1 year)"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="experience_level_status" className="form-label">
                                            5. What is your experience level with industry tools or software relevant to your field?
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="experience_level_status"
                                                id="experience_level_yes"
                                                value="Yes"
                                                checked={formData.experience_level_status === "Yes"}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-check-label ms-2" htmlFor="experience_level_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="experience_level_status"
                                                id="experience_level_no"
                                                value="No"
                                                checked={formData.experience_level_status === "No"}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-check-label ms-2" htmlFor="experience_level_no">
                                                No
                                            </label>
                                        </div>

                                        {/* Show if experience level status is "Yes" */}
                                        {formData.experience_level_status === "Yes" && (
                                            <div className="if-yes-div">
                                                <div>
                                                    <span className="rounded col h6">If yes, provide details (Beginner, Intermediate, Advanced; specify tools/software used).</span>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="tools_experience" className="form-label">Experience Level</label>
                                                    <select
                                                        className="form-select"
                                                        id="tools_experience"
                                                        name="tools_experience"
                                                        value={formData.tools_experience}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select Experience Level</option>
                                                        <option value="Beginner">Beginner</option>
                                                        <option value="Intermediate">Intermediate</option>
                                                        <option value="Advanced">Advanced</option>
                                                        <option value="No Experience">No Experience</option>
                                                    </select>
                                                </div>
                                                {(formData.tools_experience === "Beginner" || formData.tools_experience === "Intermediate" || formData.tools_experience === "Advanced") && (
                                                    <div>
                                                        <div className="mb-3">
                                                            <label htmlFor="tools_used" className="form-label">Tools/Software Used</label>
                                                            <textarea
                                                                className="form-control"
                                                                id="tools_used"
                                                                name="tools_used"
                                                                value={formData.tools_used}
                                                                onChange={handleChange}
                                                                placeholder="List the tools/software you have experience with"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="tools_duration" className="form-label">Duration of Use</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="tools_duration"
                                                                name="tools_duration"
                                                                value={formData.tools_duration}
                                                                onChange={handleChange}
                                                                placeholder="Enter duration (e.g., 6 months, 2 years)"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>


                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button type="button"
                                            disabled={!formData.has_work_experience_in_field && !formData.experience_level_status && !formData.tools_experience && !formData.tools_used && !formData.tools_duration && !formData.internship_status}
                                            className="btn text-white bg-black mt-3" onClick={handleNext}>
                                            Continue
                                        </button>
                                    </div>

                                </div>
                            )}

                            {currentSection === 2 && (
                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className="text-primary-form p-2 fw-bolder">Skills and Competencies</h3>

                                    {/* Question 1: Skills Rating */}
                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <div className="mb-2">
                                            <span className="rounded col h6">
                                                1. Rate your proficiency in the following skills on a scale of 1–5:
                                                <span className="text-danger">*</span>
                                            </span>
                                        </div>
                                        <div className="row">
                                            {[
                                                { skill: "Communication Skills", name: "communication_rating" },
                                                { skill: "Analytical Thinking", name: "analytical_rating" },
                                                { skill: "Team Collaboration", name: "collaboration_rating" },
                                                { skill: "Leadership Skills", name: "leadership_rating" },
                                                { skill: "Technical Skills (specific to field)", name: "technical_rating" },
                                                { skill: "Problem-Solving Skills", name: "problem_solving_rating" },
                                            ].map(({ skill, name }, index) => (
                                                <div className="col-md-6 mb-3" key={index}>
                                                    <label className="form-label">{skill}</label>
                                                    <div className="number-rating d-flex align-items-center gap-2">
                                                        {[1, 2, 3, 4, 5].map((value) => (
                                                            <React.Fragment key={value}>
                                                                <input
                                                                    type="radio"
                                                                    id={`${name}_rate${value}`}
                                                                    name={name}
                                                                    value={value}
                                                                    checked={formData[name] === String(value)}
                                                                    onChange={handleChange}
                                                                    className="me-1"
                                                                    required
                                                                />
                                                                <label htmlFor={`${name}_rate${value}`}>{value}</label>
                                                            </React.Fragment>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Question 2: Programming Languages */}
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="technical_tools" className="form-label">
                                            2. Which programming languages or technical tools are you proficient in?
                                            <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            id="technical_tools"
                                            className="form-select"
                                            value={formData.technical_tools}
                                            name="technical_tools"
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Select your proficiency</option>
                                            <option value="JavaScript">JavaScript</option>
                                            <option value="Python">Python</option>
                                            <option value="Java">Java</option>
                                            <option value="C++">C++</option>
                                            <option value="SQL">SQL</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        {formData.technical_tools === "Others" && (
                                            <div className="mt-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your proficiency"
                                                    name='technical_tools'
                                                    value={formData.other_proficiency}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 3: Familiarity with Trends */}
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="current_trends" className="form-label">
                                            3. Are you familiar with modern trends or technologies in your field?
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-check ms-4 mt-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="current_trends_yes"
                                                name="current_trends_familiarity"
                                                value="Yes"
                                                checked={formData.current_trends_familiarity === "Yes"}
                                                onChange={(e) => handleChange(e, "current_trends_familiarity")}
                                                required
                                            />
                                            <label className="form-check-label ms-2" htmlFor="current_trends_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check ms-4 mt-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="current_trends_no"
                                                name="current_trends_familiarity"
                                                value="No"
                                                checked={formData.current_trends_familiarity === "No"}
                                                onChange={(e) => handleChange(e, "current_trends_familiarity")}
                                                required
                                            />
                                            <label className="form-check-label ms-2" htmlFor="current_trends_no">
                                                No
                                            </label>
                                        </div>
                                        {formData.current_trends_familiarity === "Yes" && (
                                            <div className="mt-3">
                                                <label htmlFor="current_trends_description" className="form-label">
                                                    Describe
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Briefly describe the modern trends or technologies you are familiar with"
                                                    className="form-control"
                                                    id="current_trends_description"
                                                    name="current_trends_description"
                                                    value={formData.current_trends_description}
                                                    onChange={(e) => handleChange(e, "current_trends_description")}
                                                    required
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 4: Hackathons Participation */}
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="hackathon_participation" className="form-label">
                                            4. Have you participated in hackathons, competitions, or other extracurricular activities showcasing your skills?
                                        </label>
                                        <div className="form-check ms-4 mt-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="hackathon_yes"
                                                name="hackathon_participation"
                                                value="Yes"
                                                checked={formData.hackathon_participation === "Yes"}
                                                onChange={(e) => handleChange(e, "hackathon_participation")}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="hackathon_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check ms-4 mt-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="hackathon_no"
                                                name="hackathon_participation"
                                                value="No"
                                                checked={formData.hackathon_participation === "No"}
                                                onChange={(e) => handleChange(e, "hackathon_participation")}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="hackathon_no">
                                                No
                                            </label>
                                        </div>
                                        {formData.hackathon_participation === "Yes" && (
                                            <div className="mt-3">
                                                <input
                                                    type="text"
                                                    placeholder="Details of hackathons, competitions, or activities"
                                                    className="form-control"
                                                    id="hackathon_details"
                                                    name="hackathon_details"
                                                    value={formData.hackathon_details}
                                                    onChange={(e) => handleChange(e, "hackathon_details")}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 5: Remote Work */}
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="remote_work" className="form-label">
                                            5. Are you comfortable with remote/hybrid working models?
                                        </label>
                                        <div className="form-check ms-4 mt-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="remote_yes"
                                                name="remote_work"
                                                value="Yes"
                                                checked={formData.remote_work === "Yes"}
                                                onChange={(e) => handleChange(e, "remote_work")}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="remote_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check ms-4 mt-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="remote_no"
                                                name="remote_work"
                                                value="No"
                                                checked={formData.remote_work === "No"}
                                                onChange={(e) => handleChange(e, "remote_work")}
                                            />
                                            <label className="form-check-label ms-2" htmlFor="remote_no">
                                                No
                                            </label>
                                        </div>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            className="btn text-white bg-black mt-3"
                                            onClick={handleNext}
                                            disabled={
                                                !formData.technical_tools ||
                                                !formData.current_trends_familiarity ||
                                                !formData.communication_rating ||
                                                !formData.analytical_rating ||
                                                !formData.collaboration_rating ||
                                                !formData.leadership_rating ||
                                                !formData.technical_rating ||
                                                !formData.problem_solving_rating
                                            }
                                        >
                                            Continue
                                        </button>

                                    </div>
                                </div>
                            )}


                            {currentSection === 3 && (

                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className="text-primary-form p-2 fw-bolder">Career Goals and Preferences</h3>

                                    {/* Question 1 */}
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="career_industries" className="form-label">
                                            1. What industries or roles are you targeting for your career?
                                            <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className="form-select"
                                            id="career_industries"
                                            name="career_industries"
                                            value={formData.career_industries}
                                            onChange={handleChange}
                                            aria-label="Select targeted industries or roles"
                                        >
                                            <option value="" disabled selected>
                                                Select your targeted industry/role
                                            </option>
                                            <option value="IT">Information Technology</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Healthcare">Healthcare</option>
                                            <option value="Education">Education</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {/* Question 2 */}
                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label className="form-label">
                                            2. Are you open to relocating for job opportunities?
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="relocation_preference"
                                                id="relocation_yes"
                                                value="Yes"
                                                checked={formData.relocation_preference === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="relocation_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="relocation_preference"
                                                id="relocation_no"
                                                value="No"
                                                checked={formData.relocation_preference === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="relocation_no">
                                                No
                                            </label>
                                        </div>
                                    </div>

                                    {/* Question 3 */}
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="employment_type" className="form-label">
                                            3. What type of employment are you looking for?
                                            <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className="form-select"
                                            id="employment_type"
                                            name="employment_type"
                                            value={formData.employment_type || []} // Ensure `formData.employment_type` is an array
                                            onChange={(e) =>
                                                handleChange({
                                                    target: {
                                                        name: "employment_type",
                                                        value: Array.from(e.target.selectedOptions, (option) => option.value),
                                                    },
                                                })
                                            }
                                            aria-label="Select type of employment"
                                            multiple
                                        >
                                            <option value="Full-Time">Full-Time</option>
                                            <option value="Part-Time">Part-Time</option>
                                            <option value="Internship">Internship</option>
                                            <option value="Freelance">Freelance</option>
                                        </select>
                                    </div>


                                    {/* Question 4 */}
                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label htmlFor="long_term_goals" className="form-label">
                                            4. What are your long-term career goals?
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Describe your long-term career aspirations"
                                            className="form-control"
                                            id="long_term_goals"
                                            name="long_term_goals"
                                            value={formData.long_term_goals}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}
                                            disabled={
                                                !formData.career_industries ||
                                                !formData.relocation_preference ||
                                                !formData.employment_type ||
                                                !formData.long_term_goals
                                            }>
                                            Continue
                                        </button>
                                    </div>
                                </div>


                            )}

                            {currentSection === 4 && (

                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className="text-primary-form p-2 fw-bolder">Cultural Fit and Soft Skills</h3>

                                    {/* Question 1 */}
                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label className="form-label" htmlFor="job_motivation">
                                            1. What motivates you most in a job?
                                            <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className="form-select"
                                            id="job_motivation"
                                            name="job_motivation"
                                            value={formData.job_motivation || []}
                                            onChange={(e) =>
                                                handleChange({
                                                    target: {
                                                        name: "job_motivation",
                                                        value: Array.from(e.target.selectedOptions, (option) => option.value),
                                                    },
                                                })
                                            }
                                            aria-label="Select what motivates you most in a job"
                                            multiple
                                        >
                                            <option value="Growth Opportunities">Growth Opportunities</option>
                                            <option value="Work-Life Balance">Work-Life Balance</option>
                                            <option value="Challenging Projects">Challenging Projects</option>
                                            <option value="Team Collaboration">Team Collaboration</option>
                                        </select>
                                    </div>

                                    {/* Question 2 */}
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="feedback_handling" className="form-label">
                                            2. How do you handle feedback and criticism?
                                        </label>
                                        <textarea
                                            placeholder="Describe how you handle feedback and criticism"
                                            className="form-control"
                                            id="feedback_handling"
                                            name="feedback_handling"
                                            value={formData.feedback_handling}
                                            onChange={handleChange}
                                            rows="4"
                                            required
                                        />
                                    </div>

                                    {/* Question 3 */}
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="learning_approach" className="form-label">
                                            3. What is your approach to learning new skills on the job?
                                        </label>
                                        <textarea
                                            placeholder="Explain your approach to learning new skills"
                                            className="form-control"
                                            id="learning_approach"
                                            name="learning_approach"
                                            value={formData.learning_approach}
                                            onChange={handleChange}
                                            rows="4"
                                            required
                                        />
                                    </div>

                                    {/* Question 4 */}
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="team_challenge" className="form-label">
                                            4. Describe a time when you overcame a challenge in a team setting.
                                        </label>
                                        <textarea
                                            placeholder="Share your experience"
                                            className="form-control"
                                            id="team_challenge"
                                            name="team_challenge"
                                            value={formData.team_challenge}
                                            onChange={handleChange}
                                            rows="4"
                                            required
                                        />
                                    </div>

                                    {/* Question 5 */}
                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label className="form-label" htmlFor="diverse_team">
                                            5. Are you comfortable working in diverse, multicultural teams?
                                        </label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="diverse_team"
                                                id="diverse_team_yes"
                                                value="Yes"
                                                checked={formData.diverse_team === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="diverse_team_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="diverse_team"
                                                id="diverse_team_no"
                                                value="No"
                                                checked={formData.diverse_team === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="diverse_team_no">
                                                No
                                            </label>
                                        </div>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn text-white bg-success mt-3"
                                            onClick={handleSubmit}
                                            disabled={
                                                !formData.job_motivation
                                            }>
                                            Submit
                                        </button>


                                    </div>
                                </div>



                            )}

                            {loading && <loadingScreen />}

                            {error && <div className="alert alert-danger mt-3">Error: {error}</div>}
                            {success && <div className="alert alert-success mt-3">Assessment submitted successfully!</div>}

                        </form>
                    </div>
                </div>
            </div>

        </div>
    </>)
};

export default AssesmentForm;
