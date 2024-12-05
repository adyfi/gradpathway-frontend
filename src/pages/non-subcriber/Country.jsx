import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate();

    const handleCountryClick = (country) => {
        console.log(`Selected country: ${country}`);
        navigate("/home");
    };

    return <>
        <div className="container-fluid mt-5 pt-5">
            <h1 className="text-center text-primary-2 mt-4">Which Country Are you planning for ?</h1>
            <div className="d-flex justify-content-center my-4">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Country
                    </button>
                    <ul className="dropdown-menu">
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
                                onClick={() => handleCountryClick("UAE")}
                            >
                                UAE
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
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <img src={"./world-map-big.jpg"} width={"80%"} />
        </div>
    </>
};

export default ContactUs;
