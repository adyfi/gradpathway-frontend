import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CountryFooter = () => {
    const navigate = useNavigate();

    const handleCountryClick = (country) => {
        console.log(`Selected country: ${country}`);
        country === "UK" ? navigate("/home") : navigate("/launching");
    };

    return (<>
       <div className="container-fluid bg-primary-2 m-0 py-3 d-flex align-items-center justify-content-center text-light">
       Copyright © Gradpathway 2024
       </div>
    </>)
}
    ;
export default CountryFooter;