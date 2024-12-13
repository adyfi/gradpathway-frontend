import React from 'react'
import { Tooltip, Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export const AssessmentAnalytics = ({ likelihoods, recommendedPackage, reasoning, improvementTips = [], setShowAnalytics, personalDetails }) => {

    const handleShowAnalytics = () => setShowAnalytics(false);

    if (
        !Array.isArray(likelihoods) ||
        !likelihoods.every(item => item.name && typeof item.value === "number") ||
        typeof recommendedPackage !== "string" ||
        typeof reasoning !== "string" ||
        !Array.isArray(improvementTips)
    ) {
        console.error("Invalid props passed to AssessmentAnalytics", {
            likelihoods,
            recommendedPackage,
            reasoning,
            improvementTips,
        });
        return <p className='text-center' style={{ marginTop: '20vh' }}>Invalid data provided for analytics. Please check after sometime.</p>;
    }

    const formatDate = (date) => {
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0'); const yyyy = date.getFullYear(); return `${mm}-${dd}-${yyyy}`;
    };

    const downloadPDF = () => { 
        const input = document.getElementById('report'); 
        html2canvas(input) .then((canvas) => { 
            const imgData = canvas.toDataURL('image/png'); 
            const pdf = new jsPDF(); pdf.addImage(imgData, 'PNG', 0, 0); 
            pdf.save('download.pdf'); 
        }).catch((error) => { 
            console.error('Error creating PDF:', error); 
        });
    };

    return (
        <>
        <div className="container shadow-sm p-5 border mb-5" id='report' style={{ marginTop: "15vh", maxWidth: '750px' }}>
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    {/* <h2 className="text-left text-primary-2 fw-bold">GradPathway</h2> */}
                    <img src="/img/grandpathway-logo.svg" alt="grandpathwayLogo" height="50px"></img>
                    <span className='text-primary-2'>
                        Date: {formatDate(new Date())}
                    </span>
                </div>
                <h1 className='display-4 fw-bolder text-secondary-2'>
                    AI-Generated
                    Assessment Report
                </h1>
                <hr />
                <div className="col-12 mb-3">
                    <h2 className='text-primary-2 fw-bolder mt-3'>Personal Details</h2>
                    <div className="d-flex ps-3 m-0">
                        <p className='m-0 fw-bolder'> Name:</p> <p className='mb-1 m-0 ps-2'> {personalDetails.name}</p>
                    </div>
                    <div className="d-flex ps-3 m-0">
                        <p className='m-0 fw-bolder'> Email:</p> <p className='mb-1 m-0 ps-2'> {personalDetails.email}</p>
                    </div>
                    <div className="d-flex ps-3 m-0">
                        <p className='m-0 fw-bolder'> Phone:</p> <p className='mb-1 m-0 ps-2'> {personalDetails.phone}</p>
                    </div>
                    <div className="d-flex ps-3 m-0">
                        <p className='m-0 fw-bolder'> LinkedIn:</p> <p className='mb-1 m-0 ps-2'> {personalDetails.linkedIn}</p>
                    </div>
                </div>
                <div className="col-md-12">
                    <h3 className='text-primary-2 fw-bolder mt-3'>Tips for Enhancing Your Job Search:</h3>
                    <div className='ps-3 mt-4'>
                        {improvementTips?.map((tip, index) => (
                            <>
                                <p className='mb-0 text-primary-2 h5'>{tip.title} </p>
                                <p>{tip.description}</p>
                            </>
                        ))}
                    </div>
                    <hr />
                </div>
                <div className="col-12">
                    <h3 className='text-primary-2 fw-bolder mt-3'>Recommended Package</h3>
                    <p className='mt-2 text-primary-2 h5'>{recommendedPackage}</p>
                    <p>{reasoning}</p>
                </div>
                <div className="col-md-12 py-2 d-flex justify-content-center">
                    {
                        likelihoods?.length > 0 ?
                            <PieChart width={500} height={400}>
                                <Pie
                                    data={likelihoods}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    fill="#8884d8"
                                    label={({ name, value, percent }) => `${(percent * 100).toFixed(1)}%`}
                                >
                                    {likelihoods.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart> : (<p>No data available for the pie chart.</p>)
                    }

                </div>
                <hr />
                <div className="col-md-12">
                    <h3 className='text-primary-2 fw-bolder mt-3'>
                        GradPathway: Explore Our Additional Resources
                    </h3>
                </div>
                <div className="col-md-12 mt-3">
                    <h5 className='text-primary-2 fw-bolder'>
                        1. ROI Tools
                    </h5>
                    <p className=''>
                        At GradPathway, we help you calculate key financial metrics like Total Costs, Total Loss Due to
                        Unemployment, and Recovery Time. These calculations provide insight into your job search's
                        financial impact and help you plan for a quicker return on investment once employed.
                    </p>
                    <a href='http://44.204.79.35:3000/roi' className='cursor-primary py-1'> <small>Calculate Your ROI Now</small> </a>

                    <h5 className='text-primary-2 fw-bolder mt-5'>
                        2. FAQ
                    </h5>
                    <p className=''>
                        Got questions? Our FAQ section provides clear answers to common inquiries about
                        GradPathway's services, tools, and career guidance. Find the information you need to make the
                        most of your job search.
                    </p>
                    <a href='http://44.204.79.35:3000/faq' className='cursor-primary py-1'> <small>Have Questions? Browse Our FAQs</small> </a>


                    <h5 className='text-primary-2 fw-bolder mt-5'>
                        3. CONTACT
                    </h5>
                    <p className=''>
                        Have any questions or need assistance? Reach out to GradPathway through our Contact page.
                        Our team is here to help and ensure you get the support you need throughout your career
                        journey.
                    </p>
                    <a href='http://44.204.79.35:3000/contact' className='cursor-primary py-1'> <small>Have Questions? Browse Our FAQs</small> </a>

                </div>
                <div className="col-12 mt-3">
                    <hr />
                    <p className='small'>
                        Thank you for choosing GradPathway. We're committed to supporting you in your career journey.
                    </p>
                    <div className="col-12 mt-3">
                        <p className='m-0'>© GradPathway</p> 
                        <p className='m-0'>London, United Kingdom.</p> 
                    </div>
                </div>
            </div>
        </div>
        
        <div className="d-md-flex justify-content-center mb-5 mt-4">
            {/* <button className="btn btn-outline-primary-2 px-4 rounded-pill mt-3 me-3" onClick={downloadPDF}>Send Email</button> */}
            <a className="btn btn-primary px-4 rounded-pill mt-3 me-2" href="#">Checkout</a>
            <button className="btn btn-primary px-4 rounded-pill mt-3" onClick={handleShowAnalytics}>Re-Take assessment</button>
        </div>
        
    </>
    )
}
