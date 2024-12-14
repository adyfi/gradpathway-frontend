import React, { useEffect, useState } from 'react';
import { sendRecommendationRequest } from '../../api/api';
import { AssessmentAnalytics } from './AssessmentAnalytics';
import "./animationForm.css"

const AssesmentForm = () => {
    const [personalDetails, setPersonalDetails] = useState(null)
    const [formData, setFormData] = useState({
        name: "Enter Name",
        email: "example.email@gmail.com",
        phone_number: "+44 1234567890",
        linkedin_profile: "https://linkedin.com/",
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
        uk_job_search_started: "Yes",
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

        rel_work_exp: 'Not Relevant',
        work_exp_in_uk: 'Yes',
        identified_preferd_companies: "Yes"
    });

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
                            <li className={` ${currentSection === 0 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Contact Details Section</li>
                            <li className={` ${currentSection === 1 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Job Search Assessment Questions </li>
                            <li className={` ${currentSection === 2 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Job Search Progress </li>
                            <li className={` ${currentSection === 3 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Work Experience in the UK </li>
                            <li className={` ${currentSection === 4 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Post-Study Work (PSW) Visa Status </li>
                            <li className={` ${currentSection === 5 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Career Goals </li>
                            <li className={` ${currentSection === 6 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Job search methods </li>
                            <li className={` ${currentSection === 7 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Visa Considerations </li>
                            <li className={` ${currentSection === 8 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Support and Resources </li>
                            <li className={` ${currentSection === 9 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Barriers and Challenges </li>
                            <li className={` ${currentSection === 10 ? 'bg-ptitle-form text-primary-2 fw-bolder' : ''} mb-0 py-1 px-2 rounded small`}> Next Steps </li>
                        </ul>
                    </div>

                    <div className="col-md-8 form-right rounded">
                        <form onSubmit={handleSubmit}>

                            {currentSection === 0 && (

                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'>Contact Details Section</h3>
                                    <div className="p-3 pt-1 col-md-12">
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
                                    <div className="p-3 pt-1 col-md-12">
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
                                    <div className="p-3 pt-1 col-md-12">
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
                                        <label htmlFor="linkedin_profile" className="form-label">Upload Your CV for Review  </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="linkedin_profile"
                                            name="linkedin_profile"
                                            // value={formData.linkedin_profile}
                                            onChange={(e) => setCVFile(e.target.files[0])}
                                        />
                                    </div>

                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}>
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}
                            {currentSection === 1 && (

                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'> Job Search Assessment Questions  </h3>
                                    <div className='mb-3 ms-1'>
                                        <span className='rounded col h5'>  Personal and Academic Background </span>
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
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
                                    <div className="p-3 pt-1 col-md-12">
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
                                    <div className="p-3 pt-1 col-md-12">
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

                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}>
                                            Continue
                                        </button>
                                    </div>

                                </div>
                            )}
                            {currentSection === 2 && (

                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'>Job Search Progress  </h3>
                                    <div className="p-3 pt-1 col-md-12 py-4">
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

                                    <div className="p-3 pt-1 col-md-12 py-4">
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

                                    <div className="p-3 pt-1 col-md-12 py-4">
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

                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}>
                                            Continue
                                        </button>
                                    </div>
                                </div>

                            )}

                            {currentSection === 3 && (

                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'>Work Experience in the UK </h3>
                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label>Have you gained any work experience in the UK (internships, part-time jobs, etc.)? </label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="work_exp_in_uk"
                                                id="work_exp_in_uk_yes"
                                                value="Yes"
                                                checked={formData.work_exp_in_uk === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="work_exp_in_uk_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="work_exp_in_uk"
                                                id="work_exp_in_uk_no"
                                                value="No"
                                                checked={formData.work_exp_in_uk === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="work_exp_in_uk_no">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-3 pt-1 col-md-12">
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
                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label>How relevant is this experience to your desired career path?
                                        </label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="rel_work_exp"
                                                id="rel_work_exp_1"
                                                value="Highly Relevant"
                                                cherel_cked={formData.rel_work_exp === "Highly Relevant"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="rel_work_exp_1">
                                                Highly Relevant
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="rel_work_exp"
                                                id="rel_work_exp_2"
                                                value="Somewhat Relevant"
                                                cherel_cked={formData.rel_work_exp === "Somewhat Relevant"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="rel_work_exp_2">
                                                Somewhat Relevant
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="rel_work_exp"
                                                id="rel_work_exp_3"
                                                value="Not Relevant"
                                                checked={formData.rel_work_exp === "Not Relevant"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="rel_work_exp_3">
                                                Not Relevant
                                            </label>
                                        </div>
                                    </div>

                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}>
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}
                            {currentSection === 4 && (
                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'>Post-Study Work (PSW) Visa Status</h3>

                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label>Do you currently hold a Post-Study Work (PSW) visa?</label>
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
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="psw_visa_status"
                                                id="psw_visa_status_will_apply"
                                                value="Will apply in 3 months"
                                                checked={formData.psw_visa_status === "Will apply in 3 months"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="psw_visa_status_will_apply">
                                                Will apply in 3 months
                                            </label>
                                        </div>
                                    </div>

                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label>If yes, when does your PSW visa expire?  </label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="psw_visa_expiry_months"
                                                id="psw_visa_expiry_months_Less_than_3_months"
                                                value="Less than 3 months"
                                                checked={formData.psw_visa_expiry_months === "Less than 3 months"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="psw_visa_expiry_months_Less_than_3_months">
                                                Less than 3 months
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="psw_visa_expiry_months"
                                                id="psw_visa_expiry_months_Less_than_3_6_months"
                                                value="3-6 months"
                                                checked={formData.psw_visa_expiry_months === "3-6 months"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="psw_visa_expiry_months_Less_than_3_6_months">
                                                3-6 months
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="psw_visa_expiry_months"
                                                id="psw_visa_expiry_months_Less_than_7_12_months"
                                                value="7-12 months"
                                                checked={formData.psw_visa_expiry_months === "7-12 months"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="psw_visa_expiry_months_Less_than_7_12_months">
                                                7-12 months
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="psw_visa_expiry_months"
                                                id="psw_visa_expiry_months_More_than_12_months"
                                                value="More than 12 months"
                                                checked={formData.psw_visa_expiry_months === "More than 12 months"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="psw_visa_expiry_months_More_than_12_months">
                                                More than 12 months
                                            </label>
                                        </div>
                                    </div>

                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}>
                                            Continue
                                        </button>
                                    </div>
                                </div>

                            )}
                            {currentSection === 5 && (
                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'>Career Goals</h3>

                                    <div className="p-3 pt-1 col-md-12">
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

                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label>Have you identified companies or organizations in the UK where you would like to work?</label>
                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="identified_preferd_companies"
                                                id="identified_preferd_companies_yes"
                                                value="Yes"
                                                checked={formData.identified_preferd_companies === "Yes"}
                                                onChange={handleChange}
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
                                                id="identified_preferd_companies_no"
                                                value="No"
                                                checked={formData.identified_preferd_companies === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="identified_preferd_companies_no">
                                                No
                                            </label>
                                        </div>
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
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

                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}>
                                            Continue
                                        </button>
                                    </div>

                                </div>

                            )}
                            {currentSection === 6 && (
                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'>Career Goals</h3>

                                    <div className="p-3 pt-1 col-md-12">
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

                                    <div className="p-3 pt-1 col-md-12 py-4">
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

                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}>
                                            Continue
                                        </button>
                                    </div>
                                </div>

                            )}
                            {currentSection === 7 && (
                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'>Visa Considerations</h3>

                                    <div className="p-3 pt-1 col-md-12 py-4">
                                        <label>How many months are left on your current visa before it expires? </label>
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

                                    <div className="p-3 pt-1 col-md-12 flex-row">
                                        <label>Are you aware of the visa requirements for working in the UK after your PSW visa expires?</label>
                                        <div className="form-check ms-4 flex-row mt-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="visa_awareness"
                                                id="visa_awareness_yes"
                                                value="Yes"
                                                checked={formData.visa_awareness === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="ms-2 form-check-label" htmlFor="visa_awareness_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check flex-row ms-4 mt-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="visa_awareness"
                                                id="visa_awareness_no"
                                                value="No"
                                                checked={formData.visa_awareness === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="ms-2 form-check-label" htmlFor="visa_awareness_no">
                                                No
                                            </label>
                                        </div>
                                    </div>

                                    <div className="p-3 pt-1 col-md-12 flex-row">
                                        <label>Have you started exploring visa options for staying in the UK beyond your current visa?</label>
                                        <div className="form-check ms-4 flex-row mt-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="explored_visa_options"
                                                id="explored_visa_options_yes"
                                                value="Yes"
                                                checked={formData.explored_visa_options === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="ms-2 form-check-label" htmlFor="explored_visa_options_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check flex-row ms-4 mt-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="explored_visa_options"
                                                id="explored_visa_options_no"
                                                value="No"
                                                checked={formData.explored_visa_options === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="ms-2 form-check-label" htmlFor="explored_visa_options_no">
                                                No
                                            </label>
                                        </div>
                                    </div>

                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}>
                                            Continue
                                        </button>
                                    </div>
                                </div>

                            )}
                            {currentSection === 8 && (
                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'>Support and Resources</h3>
                                    <div className="p-3 pt-1 col-md-12 flex-row">
                                        <label>Are you receiving any support for your job search from your university or other organizations? </label>
                                        <div className="form-check ms-4 flex-row mt-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="is_support_received"
                                                id="is_support_received_yes"
                                                value="Yes"
                                                checked={formData.is_support_received === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="ms-2 form-check-label" htmlFor="is_support_received_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check flex-row ms-4 mt-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="is_support_received"
                                                id="is_support_received_no"
                                                value="No"
                                                checked={formData.is_support_received === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="ms-2 form-check-label" htmlFor="is_support_received_no">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="support_received" className="form-label">If yes, what kind of support are you receiving? </label>
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
                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="additional_resources_needed" className="form-label">What additional resources or support do you think would help you in your job search?                               </label>
                                        <input
                                            type="text"
                                            placeholder="What additional resources or support do you think would help you in your job search?"
                                            className="form-control"
                                            id="additional_resources_needed"
                                            name="additional_resources_needed"
                                            value={formData.additional_resources_needed}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="d-md-flex justify-content-end">
                                        <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}>
                                            Continue
                                        </button>
                                    </div>
                                </div>

                            )}
                            {currentSection === 9 && (
                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'>Barriers and Challenges:</h3>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="job_search_barriers" className="form-label">What do you perceive as the biggest barriers to finding a job in the UK?</label>

                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="job_search_barriers"
                                                id="job_search_barriers_1"
                                                value="Lack of relevant work experience"
                                                checked={formData.job_search_barriers === "Lack of relevant work experience"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="job_search_barriers_1">
                                                Lack of relevant work experience
                                            </label>
                                        </div>

                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="job_search_barriers"
                                                id="job_search_barriers_2"
                                                value="Visa restrictions"
                                                checked={formData.job_search_barriers === "Visa restrictions"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="job_search_barriers_2">
                                                Visa restrictions
                                            </label>
                                        </div>

                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="job_search_barriers"
                                                id="job_search_barriers_3"
                                                value="Competition in the job market"
                                                checked={formData.job_search_barriers === "Competition in the job market"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="job_search_barriers_3">
                                                Competition in the job market
                                            </label>
                                        </div>

                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="job_search_barriers"
                                                id="job_search_barriers_4"
                                                value="Lack of networking opportunities"
                                                checked={formData.job_search_barriers === "Lack of networking opportunities"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="job_search_barriers_4">
                                                Lack of networking opportunities
                                            </label>
                                        </div>

                                        <div className="form-check form-check-inline ms-4 mt-2 d-flex flex-row">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="job_search_barriers"
                                                id="job_search_barriers_5"
                                                value="Other"
                                                checked={formData.job_search_barriers === "Other"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label ms-3" htmlFor="job_search_barriers_5">
                                                Other
                                            </label>
                                        </div>

                                        <div className="d-md-flex justify-content-end">
                                            <button type="button" className="btn btn-light mt-3 me-3" onClick={handleBack}>
                                                Back
                                            </button>
                                            <button type="button" className="btn text-white bg-black mt-3" onClick={handleNext}>
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            )}
                            {currentSection === 10 && (
                                <div className="row pb-2 pt-3 px-3">
                                    <h3 className='text-primary-form p-2 fw-bolder'>Next Steps:</h3>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="immediate_job_search_steps" className="form-label">What are your immediate next steps in your job search?</label>
                                        <input
                                            type="text"
                                            placeholder="What are your immediate next steps in your job search?"
                                            className="form-control"
                                            id="immediate_job_search_steps"
                                            name="immediate_job_search_steps"
                                            value={formData.immediate_job_search_steps}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="p-3 pt-1 col-md-12 flex-row">
                                        <label>Do you have a plan if you are unable to secure a job before your visa expires?</label>
                                        <div className="form-check ms-4 flex-row mt-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="is_backup_plan"
                                                id="is_backup_plan_yes"
                                                value="Yes"
                                                checked={formData.is_backup_plan === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <label className="ms-2 form-check-label" htmlFor="is_backup_plan_yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check flex-row ms-4 mt-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="is_backup_plan"
                                                id="is_backup_plan_no"
                                                value="No"
                                                checked={formData.is_backup_plan === "No"}
                                                onChange={handleChange}
                                            />
                                            <label className="ms-2 form-check-label" htmlFor="is_backup_plan_no">
                                                No
                                            </label>
                                        </div>
                                    </div>

                                    <div className="p-3 pt-1 col-md-12">
                                        <label htmlFor="backup_plan" className="form-label">If yes, what is your backup plan?                              </label>
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

                                    <div className="col-12 mt-4 ">
                                        <button type="button" className="btn btn-light me-3" onClick={handleBack}>
                                            Back
                                        </button>
                                        <button className='btn btn-success px-4' type="submit" disabled={loading}>
                                            {loading ? 'Submitting...' : success ? 'Re-Take' : 'Submit'}
                                        </button>
                                        {
                                            likelihoods && likelihoods?.length > 0 &&
                                            <button className='btn btn-primary px-4 ms-3' type="button" onClick={() => setShowAnalytics(true)}>
                                                Show Analytics
                                            </button>
                                        }
                                    </div>
                                </div>
                            )}

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
