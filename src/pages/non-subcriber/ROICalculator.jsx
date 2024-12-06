import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ROICalculator = () => {
    const [educationCost, setEducationCost] = useState(50000);
    const [loanInterest, setLoanInterest] = useState(10000);
    const [expectedSalary, setExpectedSalary] = useState(3000);
    const [jobSearchDuration, setJobSearchDuration] = useState(12);

    // Calculate Loss per Month (LPM)
    const lossPerMonth = expectedSalary;

    // Calculate Total Loss Due to Unemployment (JSD * LPM)
    const totalLossDueToUnemployment = jobSearchDuration * lossPerMonth;

    // Calculate Total Costs (TC)
    const totalCosts = educationCost + loanInterest;

    // Handle zero salary case to prevent division by zero
    const recoveryTime = expectedSalary > 0 ? totalCosts / expectedSalary : 0;

    // Calculate Total Salary Earned in Recovery Time
    const totalSalaryEarnedInRecoveryTime = parseFloat((expectedSalary * jobSearchDuration).toFixed(2));

    // Calculate ROI in Percentage
    const roiPercentage = expectedSalary > 0
        ? ((totalSalaryEarnedInRecoveryTime - totalCosts) / totalCosts) * 100
        : 0;

    // Calculate ROI in USD per month
    const roiDollarsPerMonth = recoveryTime > 0
        ? (totalSalaryEarnedInRecoveryTime - totalCosts) / recoveryTime
        : 0;


    return (
        <div className="container" style={{ marginTop: '20vh' }}>
            <div className="row border shadow-sm p-4 rounded mb-5">
                <div className="col-md-6">
                    <h3 className='text-primary-2 m-0'>GradPathway Smart ROI Tool</h3>
                    <small>ROI Calculator for Higher Studies and Work</small>

                    <div className="container mt-5">

                        <div className="form-group">
                            <label htmlFor="educationCost" className="form-label">Education Cost (EC) - ${educationCost}</label>
                            <input
                                type="range"
                                className="form-range"
                                id="educationCost"
                                min="0"
                                max="100000"
                                step="1000"
                                value={educationCost}
                                onChange={(e) => setEducationCost(parseInt(e.target.value))}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="loanInterest" className="form-label">Loan Interest (LI) - ${loanInterest}</label>
                            <input
                                type="range"
                                className="form-range"
                                id="loanInterest"
                                min="0"
                                max="50000"
                                step="500"
                                value={loanInterest}
                                onChange={(e) => setLoanInterest(parseInt(e.target.value))}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="expectedSalary" className="form-label">Expected Salary (ES) - ${expectedSalary}</label>
                            <input
                                type="range"
                                className="form-range"
                                id="expectedSalary"
                                min="1000"
                                max="50000"
                                step="500"
                                value={expectedSalary}
                                onChange={(e) => setExpectedSalary(parseInt(e.target.value))}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="jobSearchDuration" className="form-label">Job Search Duration (JSD) - {jobSearchDuration} months</label>
                            <input
                                type="range"
                                className="form-range"
                                id="jobSearchDuration"
                                min="1"
                                max="120"
                                step="1"
                                value={jobSearchDuration}
                                onChange={(e) => setJobSearchDuration(parseInt(e.target.value))}
                            />
                        </div>

                        <div className="results mt-4">
                            <h4>Calculated Results</h4>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Loss per Month (LPM):</td>
                                        <td>{lossPerMonth}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Loss Due to Unemployment:</td>
                                        <td>{totalLossDueToUnemployment}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Costs (TC):</td>
                                        <td>{totalCosts}</td>
                                    </tr>
                                    <tr>
                                        <td>Recovery Time (RT):</td>
                                        <td>{recoveryTime > 0 ? recoveryTime.toFixed(2) : 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Salary Earned in Recovery Time:</td>
                                        <td>{totalSalaryEarnedInRecoveryTime}</td>
                                    </tr>
                                    <tr>
                                        <td>ROI (Percentage):</td>
                                        <td>{roiPercentage.toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td>ROI (USD per month):</td>
                                        <td>${roiDollarsPerMonth.toFixed(2)} per month</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
