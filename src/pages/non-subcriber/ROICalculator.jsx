import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
const COLORS = ['#0088FE', '#00C49F'];

const calculateSliderBackground = (value, min, max) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #0d6efd ${percentage}%, #dee2e6 ${percentage}%)`;
};

const calculateROI = (totalCost, annualIncome, expensesPerYear, jobDuration) => {
    console.log("totalCost:", totalCost)
    console.log("annualIncome:", annualIncome)
    console.log("expensesPerYear:", expensesPerYear)
    console.log("jobDuration:", jobDuration)
    // Total earnings from the job
    const totalIncome = annualIncome * jobDuration;
    console.log("totalIncome:", totalIncome)

    // Total expenses during the job
    const totalExpenses = parseInt(expensesPerYear * jobDuration) + parseInt(totalCost);
    console.log("totalExpenses:", totalExpenses)

    // console.log("totalExpenses:",totalExpenses)
    // console.log("totalIncome:",totalExpenses)
    // Net earnings
    const netEarnings = totalIncome - totalExpenses;
    console.log("netEarnings:", netEarnings)

    // ROI calculation
    const roi = (netEarnings / totalExpenses) * 100;

    return parseInt(roi);
};


const ROICalculator = () => {
    const [educationCost, setEducationCost] = useState(50000);
    const [loanInterest, setLoanInterest] = useState(10);
    const [expectedSalary, setExpectedSalary] = useState(30000);
    const [jobSearchDuration, setJobSearchDuration] = useState(12);
    const [courseDuration, setCouseDuration] = useState(1);
    const [jobDuration, setJobDuration] = useState(5);
    const [expenses, setExpenses] = useState(1000)

    // Calculate Loss per Month (LPM)
    const lossPerMonth = (expectedSalary / 12).toFixed(2);

    // Calculate Total Loss Due to Unemployment (JSD * LPM)
    const totalLossDueToUnemployment = (expectedSalary / 12) * jobSearchDuration;

    // Calculate Total Costs (TC)
    // const totalCosts = educationCost +( (educationCost * loanInterest) / 100);
    const totalCosts = (educationCost * Math.pow((1 + loanInterest / 100), courseDuration)).toFixed(2);


    // Handle zero salary case to prevent division by zero
    const recoveryTime = expectedSalary > 0 ? totalCosts / expectedSalary : 0;

    // Calculate Total Salary Earned in Recovery Time
    const totalSalaryEarnedInRecoveryTime = parseFloat((expectedSalary * recoveryTime).toFixed(2));
    
    // const roi = calculateROI(educationCost, expectedSalary, expenses, jobDuration);
    const totalIncome = totalCosts * jobDuration;
    const totalExpenses = parseInt(expenses * 12 * jobDuration) + parseInt(totalCosts);
    const netEarnings = totalIncome - totalExpenses;
    const finalRoiInPercent = calculateROI(totalCosts, expectedSalary, expenses * 12, jobDuration)

    const pieData = [
        { name: 'Net Earnings', value: netEarnings },
        { name: 'Total Expenses', value: totalExpenses },
    ];

    return (
        <div className="container" style={{ marginTop: '20vh' }}>
            <div className="row border shadow-sm p-4 rounded mb-5">
                <div className="col-md-6 p-4">
                    <h3 className='text-primary-2 m-0'>GradPathway Smart ROI Tool</h3>
                    <small>ROI Calculator for Higher Studies and Work</small>

                    <div className="container mt-5">

                        <div className="col-md-12">
                            <div className="form-group  mb-4">
                                <label htmlFor="courseDuration" className="form-label">Course Duration - {courseDuration} year{courseDuration > 1 && 's'}</label>
                                <input
                                    type="range"
                                    className="custome-range col-12"
                                    id="courseDuration"
                                    min="1"
                                    max="10"
                                    step="1"
                                    value={courseDuration}
                                    onChange={(e) => setCouseDuration(parseInt(e.target.value))}
                                    style={{
                                        height: '3px',
                                        background: calculateSliderBackground(courseDuration, 1, 10),
                                    }}
                                />
                            </div>

                            <div className="form-group  mb-4">
                                <label htmlFor="educationCost" className="form-label">Education Cost (EC) - £{educationCost}/-</label>
                                <input
                                    type="range"
                                    className="custome-range"
                                    id="educationCost"
                                    min="0"
                                    max="100000"
                                    step="1000"
                                    value={educationCost}
                                    onChange={(e) => setEducationCost(parseInt(e.target.value))}
                                    style={{
                                        height: '3px',
                                        background: calculateSliderBackground(educationCost, 0, 100000),
                                    }}
                                />
                            </div>

                            <div className="form-group  mb-4">
                                <label htmlFor="loanInterest" className="form-label">Loan Interest (LI) - {loanInterest}% per year</label>
                                <input
                                    type="range"
                                    className="custome-range"
                                    id="loanInterest"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={loanInterest}
                                    onChange={(e) => setLoanInterest(parseInt(e.target.value))}
                                    style={{
                                        height: '3px',
                                        background: calculateSliderBackground(loanInterest, 0, 100),
                                    }}
                                />
                            </div>

                            <p className='d-flex justify-content-between mb-5 mt-3 h5'>
                                <span className='text-secondary'> Total Costs (TC): </span>
                                <span className='fw-bolder text-primary-2'>£ {totalCosts}</span>
                            </p>

                            <div className="form-group  mb-4">
                                <label htmlFor="expectedSalary" className="form-label">Expected Salary (ES) - £{expectedSalary}/- per year</label>
                                <input
                                    type="range"
                                    className="custome-range"
                                    id="expectedSalary"
                                    min="1000"
                                    max="50000"
                                    step="500"
                                    value={expectedSalary}
                                    onChange={(e) => setExpectedSalary(parseInt(e.target.value))}
                                    style={{
                                        height: '3px',
                                        background: calculateSliderBackground(expectedSalary, 100, 50000),
                                    }}
                                />
                            </div>

                            <div className="form-group  mb-4">
                                <label htmlFor="jobSearchDuration" className="form-label">Job Search Duration (JSD) - {jobSearchDuration} month{jobSearchDuration>1?'s':''}</label>
                                <input
                                    type="range"
                                    className="custome-range"
                                    id="jobSearchDuration"
                                    min="1"
                                    max="120"
                                    step="1"
                                    value={jobSearchDuration}
                                    onChange={(e) => setJobSearchDuration(parseInt(e.target.value))}
                                    style={{
                                        height: '3px',
                                        background: calculateSliderBackground(jobSearchDuration, 1, 120),
                                    }}
                                />
                            </div>

                            <p className='d-flex justify-content-between mb-3 h5'>
                                <span className='text-secondary'>Loss per Month (LPM): </span>
                                <span className='fw-bolder text-danger'>£ {lossPerMonth} /month</span>
                            </p>

                            <p className='d-flex justify-content-between mb-3 h5'>
                                <span className='text-secondary'>Total Loss Due to Unemployment:</span>
                                <span className='fw-bolder text-danger'>£ {totalLossDueToUnemployment}</span>
                            </p>

                            <p className='d-flex justify-content-between mb-3 h5'>
                                <span className='text-secondary'>Recovery Time (RT): </span>
                                <span className='fw-bolder text-success'>£ {recoveryTime > 0 ? recoveryTime.toFixed(1) : 'N/A'} /month</span>
                            </p>


                            {/* <div className="results mt-4">
                                <h4>Calculated Results</h4>
                                <table className="table">
                                    <tbody>
                                        <tr >
                                            <td>Loss per Month (LPM):</td>
                                            <td className='text-danger'>{lossPerMonth} USD Per month</td>
                                        </tr>
                                        <tr >
                                            <td>Total Loss Due to Unemployment:</td>
                                            <td className='text-danger'>{totalLossDueToUnemployment} USD</td>
                                        </tr>

                                        <tr>
                                            <td>Recovery Time (RT):</td>
                                            <td>{recoveryTime > 0 ? recoveryTime.toFixed(1) : 'N/A'} year</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div> */}
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <h3 className='text-primary-2 m-0 mt-3'>ROI Considering Your Total Expenses and Education Cost</h3>
                    <small></small>

                    <div className="container mt-5">
                        <div className="form-group  mb-4">
                            <label htmlFor="jobDuration" className="form-label">Job Duration - {jobDuration} year{jobDuration > 1 && 's'}</label>
                            <input
                                type="range"
                                className="custome-range"
                                id="jobDuration"
                                min="1"
                                max="10"
                                step="1"
                                value={jobDuration}
                                onChange={(e) => setJobDuration(parseInt(e.target.value))}
                                style={{
                                    height: '3px',
                                    background: calculateSliderBackground(jobDuration, 1, 10),
                                }}
                            />
                        </div>

                        <div className="form-group  mb-4">
                            <label htmlFor="expenses" className="form-label">Expenses - £ {expenses}/- per month</label>
                            <input
                                type="range"
                                className="custome-range"
                                id="expenses"
                                min="1000"
                                max="100000"
                                step="1000"
                                value={expenses}
                                onChange={(e) => setExpenses(parseInt(e.target.value))}
                                style={{
                                    height: '3px',
                                    background: calculateSliderBackground(expenses, 1000, 100000),
                                }}
                            />
                        </div>

                        <h3 className='text-primary-2 d-flex justify-content-between p-2 border rounded bg-light'> <span>ROI :</span> <span className={`${finalRoiInPercent > 0 ? 'text-success': 'text-danger'} fw-bolder`}>{finalRoiInPercent}%</span></h3>
                    </div>
                    <h3 className='col-12 mt-5 mb-4 text-primary-2'>ROI Breakdown: Net Earnings vs Total Expenses</h3>
                    <div className="col-md-12 d-flex justify-content-center align-items-center flex-row">
                        <PieChart width={500} height={400}>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                outerRadius={150}
                                fill="#8884d8"
                                label={({ name, value }) => `${name}: ${value.toFixed(2)}%`}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
