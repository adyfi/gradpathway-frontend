import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import { useEffect } from "react";

const CountryHome = () => {
    const navigate = useNavigate();

    const handleCountryClick = (country) => {
        console.log(`Selected country: ${country}`);
        country === "UK" ? navigate("/home") : navigate("/launching");
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

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
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <img src={"./world-map-big.jpg"} width={"80%"} />
        </div>

        <div className="containeer-fluid mt-5 p-2 py-5 bg-edf7fa">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <h1 className="text-primary-2 fw-bolder">
                            Why Project Controls Expo?
                        </h1>
                        <p className="text-secondary">
                            Join the most comprehensive project controls event of the year and gain a competitive edge with the latest insights, best practices, and strategies for successful project delivery. Connect with like-minded professionals, network with industry leaders, and explore innovative tools and solutions that will help you drive project success. Don't miss out on this opportunity to enhance your skills, boost your career, and take your projects to the next level.
                        </p>
                    </div>
                    <div className="col-md-6 text-center" data-aos="fade-left">
                        <iframe width="500px" height="300" src="https://www.youtube.com/embed/UQtwRZ56AjE" title="Project Control Expo UK highlight video 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

        <div className="containeer-fluid mt-5 p-2 py-5 px-md-5 px-2">
            <div className="container mb-5">
                <h1 className="text-primary-2 col-md-8 offset-md-2 text-center fw-bolder mb-5 display-5" data-aos="fade-up">Connecting the Project Controls Community with its Global Presence.</h1>
            </div>
            <div className="row my-5" data-aos="fade-right" data-aos-delay="500">
                <div className="col-md-5">
                    <img src="./expo/usa.webp" className="rounded shadow-sm" width={"100%"} alt="usa" />
                </div>
                <div className="col-md-7 ps-4 py-3">
                    <h1 className="text-primary-2 fw-bolder">Project Controls Expo USA</h1>
                    <p className="h4">Nationals Park, Washington DC</p>
                    <p className="h4">7-9 October 2024</p>
                    <button className="btn btn-primary rounded-pill mt-4 px-5">Explore</button>
                </div>
            </div>
            <div className="row my-5" data-aos="fade-left" data-aos-delay="500">
                <div className="col-md-7 ps-4 py-3">
                    <h1 className="text-primary-2 fw-bolder">Project Controls Expo UK</h1>
                    <p className="h4">Wembley Stadium, London</p>
                    <p className="h4">5-6 November 2024</p>
                    <button className="btn btn-primary rounded-pill mt-4 px-5">Explore</button>
                </div>
                <div className="col-md-5">
                    <img src="./expo/uk.webp" className="rounded shadow-sm" width={"100%"} alt="usa" />
                </div>
            </div>
            <div className="row my-5" data-aos="fade-right" data-aos-delay="500">
                <div className="col-md-5">
                    <img src="./expo/aus.webp" className="rounded shadow-sm" width={"100%"} alt="usa" />
                </div>
                <div className="col-md-7 ps-4 py-3">
                    <h1 className="text-primary-2 fw-bolder">Project Controls Expo AUS</h1>
                    <p className="h4">Melbourne Cricket Ground</p>
                    <p className="h4">26-27 November 2024</p>
                    <button className="btn btn-primary rounded-pill mt-4 px-5">Explore</button>
                </div>
            </div>
            <div className="row my-5" data-aos="fade-left" data-aos-delay="500">
                <div className="col-md-7 ps-4 py-3">
                    <h1 className="text-primary-2 fw-bolder">Project Controls Expo UAE</h1>
                    <p className="h4">Jafza One Convention Centre</p>
                    <p className="h4">18-19 February 2025</p>
                    <button className="btn btn-primary rounded-pill mt-4 px-5">Explore</button>
                </div>
                <div className="col-md-5">
                    <img src="./expo/uae.webp" className="rounded shadow-sm" width={"100%"} alt="usa" />
                </div>
            </div>
            <div className="row py-5 border bg-light">
                <h1 className="text-primary-2 text-center display-3 fw-bolder">Need more information?</h1>
                <div className="text-center">
                <button className="px-5 btn btn-primary rounded-pill shadow-sm">Click here</button>
                </div>
            </div>
        </div>

    </>
};

export default CountryHome;
