import React from 'react'
import { Tooltip, Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export const AssessmentAnalytics = ({ likelihoods, recommendedPackage, reasoning, improvementTips, setShowAnalytics }) => {

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
        return <p className='text-center' style={{marginTop:'20vh'}}>Invalid data provided for analytics. Please check after sometime.</p>;
    }


    return (
        <div className="col-md-10 offset-md-1 shadow-sm p-5 border mb-5" style={{marginTop:"20vh"}}>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-left text-primary-2 fw-bold">Assessment Results</h2>
                    <hr />
                </div>
                <div className="col-md-7">
                    <h3>Job Search Improvement Tips:</h3>
                    <ul>
                        {improvementTips?.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                    <hr />
                    <h4 className='mt-2'>Recommended Package: {recommendedPackage}</h4>
                    <p>{reasoning}</p>

                    <div className="d-md-flex mt-4">
                        <a className="btn btn-outline-primary px-4 rounded-pill mt-3 me-2" href="#">Send Email</a>
                        <a className="btn btn-primary px-4 rounded-pill mt-3 me-2" href="#">Checkout</a>
                        <button className="btn btn-primary px-4 rounded-pill mt-3" onClick={handleShowAnalytics}>Re-Take assessment</button>
                    </div>
                </div>
                <div className="col-md-5 py-2 d-flex bg-danger justify-content-center">
                <h4 className="text-left mb-3">Package Suitability</h4>

                    {
                        likelihoods?.length > 0 ? 
                        <PieChart width={400} height={400}>
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
                        </PieChart> : ( <p>No data available for the pie chart.</p> )
                    }

                </div>
            </div>
        </div>
    )
}
