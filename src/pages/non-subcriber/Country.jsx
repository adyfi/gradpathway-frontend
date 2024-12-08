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
        <div className="container mt-15vh">
            <div className="d-flex justify-content-center">
                <div className="col-md-5 py-4 d-flex pt-5">
                    <h1 className="text-primary-2 fw-bolder pt-5">
                        Empowering Your Global Career Journey
                    </h1>
                </div>
                <div className="col-md-7">
                    <img src={"./world-map-big.jpg"} width={"100%"} />
                </div>
            </div>
        </div>


        <div className="containeer-fluid mt-5 p-2 py-5 bg-edf7fa">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <h1 className="text-primary-2 fw-bolder">
                            Why Choose GradPathway?
                        </h1>
                        <p className="text-secondary">
                            Navigating today's global job market is complex, especially for international students who need
                            support aligning their skills with employer expectations. GradPathway is more than just an
                            ed-tech platform - we're a career catalyst. Our approach combines advanced AI tools and a
                            powerful ROI calculator to help you measure and maximize the impact of your academic
                            investment. By focusing on project-based learning, tailored career services, and digital
                            skill-building, we're committed to your long-term success. Join GradPathway and unlock your
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
                <h1 className="text-primary-2 col-md-8 offset-md-2 text-center fw-bolder mb-5 display-5" data-aos="fade-up">Connecting Potentials to Professionals</h1>
            </div>
            <div className="row my-5 p-3 border bg-F8FDFF" data-aos="fade-left" data-aos-delay="500">
                <div className="col-md-7 ps-4 py-3">
                    <h1 className="text-primary-2 fw-bolder">GradPathWay UK</h1>
                    <p className="h4">London</p>
                    {/* <p className="h4">5-6 November 2024</p> */}
                    <a href="/home" className="btn btn-primary rounded-pill mt-4 px-5">Explore</a>
                </div>
                <div className="col-md-5">
                    <img src="./expo/uk.webp" className="rounded shadow-sm" width={"100%"} alt="usa" />
                </div>
            </div>
            <div className="row my-5 p-3 border bg-F8FDFF" data-aos="fade-right" data-aos-delay="500">
                <div className="col-md-5">
                    <img src="./expo/usa.webp" className="rounded shadow-sm" width={"100%"} alt="usa" />
                </div>
                <div className="col-md-7 ps-4 py-3">
                    <h1 className="text-primary-2 fw-bolder">GradPathWay USA</h1>
                    <p className="h4">Washington DC</p>
                    {/* <p className="h4">7-9 October 2024</p> */}
                    <a href="/launching" className="btn btn-primary rounded-pill mt-4 px-5">Explore</a>
                </div>
            </div>
            <div className="row my-5 p-3 border bg-F8FDFF" data-aos="fade-left" data-aos-delay="500">
                <div className="col-md-7 ps-4 py-3">
                    <h1 className="text-primary-2 fw-bolder">GradPathWay UAE</h1>
                    <p className="h4">Dubai</p>
                    {/* <p className="h4">18-19 February 2025</p> */}
                    <a href="/launching" className="btn btn-primary rounded-pill mt-4 px-5">Explore</a>
                </div>
                <div className="col-md-5">
                    <img src="./expo/uae.webp" className="rounded shadow-sm" width={"100%"} alt="usa" />
                </div>
            </div>
            <div className="row my-5 p-3 border bg-F8FDFF" data-aos="fade-right" data-aos-delay="500">
                <div className="col-md-5">
                    <img src="./expo/aus.webp" className="rounded shadow-sm" width={"100%"} alt="usa" />
                </div>
                <div className="col-md-7 ps-4 py-3">
                    <h1 className="text-primary-2 fw-bolder">GradPathWay Australia</h1>
                    <p className="h4">Melbourne</p>
                    {/* <p className="h4">26-27 November 2024</p> */}
                    <a href="/launching" className="btn btn-primary rounded-pill mt-4 px-5">Explore</a>
                </div>
            </div>

            <div className="row py-5 border bg-light">
                <h1 className="text-primary-2 text-center display-3 fw-bolder">Need more information?</h1>
                <div className="text-center">
                    <a href="/contact" className="px-5 btn btn-primary rounded-pill shadow-sm">Schedule a Call</a>
                </div>
            </div>
        </div>

    </>
};

export default CountryHome;
