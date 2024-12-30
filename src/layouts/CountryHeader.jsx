import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CountryHeader = () => {
    const navigate = useNavigate();

    const handleCountryClick = (country) => {
        console.log(`Selected country: ${country}`);
        country === "UK" ? navigate("/home") : navigate("/launching");
    };

    return (<>
        <div className="container-fluid position-fixed top-0 bg-white shadow-sm country-header">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <span className="d-flex align-items-center">
                        <img src="/img/grandpathway-logo.svg" alt="grandpathwayLogo" height={"50px"} />
                        <div className="dropdown ms-4">
                            <button className="btn btn-primary bg-primary-2 dropdown-toggle px-4 country-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Country
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleCountryClick("Australia")}
                                    >
                                        Australia
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleCountryClick("US")}
                                    >
                                        US
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleCountryClick("India")}
                                    >
                                        India
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleCountryClick("UK")}
                                    >
                                        UK
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </span>
                    <span className='fw-bolder'>
                        Welcome to GradPathway
                    </span>
                </div>
            </div>
        </div>
    </>)
}
    ;
export default CountryHeader;