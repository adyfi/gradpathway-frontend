import React, { useEffect, useState } from 'react';
import { sendRecommendationRequest } from '../../api/api';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Tooltip } from 'bootstrap';
import { Mentor } from './Mentor';
import MentorForm from '../../components/MentorForm';

const AssesmentForm = () => {

    return <>

        <div className="container-fluid g-0 pt-4">
            <img style={{ maxHeight: "500px", objectFit: "cover" }} className="img-fluid w-100 min-vh-25 min-vh-md-50 mb-n7 mt-5" src={"./assessment2.jpg"} srcset="" sizes="" width="" height="" alt="Photo by Irene Dávila" />
        </div>

        <div className="col-md-10 shadow-sm border mb-5 offset-md-1 p-5 bg-body mt-md-n6 position-relative rounded" style={{ marginTop: '-100px' }}>
            <div className="row">
                <div className="col-md-12 text-center align-self-center">
                    <div className="lc-block border-lg-end border-2 ">
                        <div editable="rich">
                            <p className="display-4 text-primary fw-bolder">Mentor Registration</p>
                        </div>
                    </div>
                </div>
                    <MentorForm />
            </div>
        </div>
    </>
};

export default AssesmentForm;
