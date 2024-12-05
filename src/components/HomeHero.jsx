import React from 'react'

export const HomeHero = () => {
    return (
        <div className="container" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
            <div className="row align-items-center px-2">
                <div className="col-12 col-md-7 col-lg-6">
                    <div className="lc-block mb-4">
                        <div editable="rich">
                            <h1 className="display-5 fw-bolder text-primary-2">Welcome to GradPathway</h1>
                            <p>
                                Your trusted partner in bridging the gap between academic success and career achievement
                                <br /> <br />
                                Across the UK, US, Australia, and India.
                                At GradPathway, we believe that your international education journey should culminate in a
                                rewarding career. Our AI-powered platform is designed to elevate your job search experience,
                                ensuring you're not just ready but equipped to stand out in competitive job markets worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="lc-block d-flex mb-5">
                        <div className="pe-3">
                            <h3 className="h2 mb-0 text-primary" editable="inline">100%</h3>
                            <span editable="inline" className="mb-0 text-muted"> Satisfaction </span>
                        </div>
                        <div className="border-start"></div>
                        <div className="px-3">
                            <h3 className="h2 mb-0 text-primary" editable="inline">24/7</h3>
                            <span editable="inline" className="mb-0 text-muted"> Support </span>
                        </div>
                        <div className="border-start"></div>
                        <div className="ps-3">
                            <h3 className="h2 mb-0 text-primary" editable="inline">1,500+</h3>
                            <span editable="inline" className="mb-0 text-muted"> Happy Students </span>
                        </div>
                    </div>
                    <a className="btn btn-outline-primary px-4 rounded-pill mt-3 me-2" href="/assesment">Take Assessment</a>
                    <a className="btn btn-primary px-4 rounded-pill mt-3" href="/services">Explore Services</a>
                </div>
                <div className="col-12 col-md-5 col-lg-6">
                    <div className="lc-block"><img alt="banner" className="img-fluid mx-auto d-block" src={"/img/dkp.png"} loading="lazy" /></div>
                </div>
            </div>
        </div>
    )
}
