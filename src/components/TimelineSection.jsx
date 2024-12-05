import React from 'react'

export const TimelineSection = () => {
    return (
        <>
          <div className="row mb-3 mt-5">
                <div className="col-lg-8 mx-auto text-center">
                    <div className="lc-block mb-1">
                        <div editable="rich">
                            <h1 className='text-primary'>Your Ideal Career is Ready & Waiting for you</h1>
                        </div>
                    </div>
                    <div className="lc-block">
                        <div editable="rich">
                            <p className="lead">We understand the challenges of job hunting, which is why we've designed services to support you at every stage of the process..</p>
                        </div>
                    </div>
                </div>
            </div>
        <div className="container py-5 timeline position-relative">
            <div className="timeline-item w-100 mb-4 py-4 text-light lc-block">
                <div className="timeline-img"></div>
                <div className="timeline-content">
                    <p editable="inline" className="lead">Step 1</p>
                    <h2 editable="inline" className="fw-bold rfs-12">Take Assessment</h2>
                    <div editable="rich">
                        <p>Take a personalized assessment to uncover your strengths, interests, and career potential.</p>
                    </div>
                </div>
            </div>
            <div className="timeline-item w-100 mb-4 py-4 text-light lc-block">
                <div className="timeline-img"></div>
                <div className="timeline-content">
                    <p editable="inline" className="lead">Step 2</p>
                    <h2 editable="inline" className="fw-bold rfs-12">Get Tips and Personalized Plan</h2>
                    <div editable="rich">
                        <p> Receive expert advice and a tailored action plan to achieve your career goals.</p>
                    </div>
                </div>
            </div>
            <div className="timeline-item w-100 mb-4 py-4 text-light lc-block">
                <div className="timeline-img"></div>
                    <div className="timeline-content">
                        <p editable="inline" className="lead">Step 3</p>
                    <h2 editable="inline" className="fw-bold rfs-12">Get Personalized Assistance</h2>
                    <div editable="rich">
                        <p>Work one-on-one with a dedicated advisor to guide you every step of the way.</p>
                    </div>
                </div>
            </div>
            <div className="timeline-item w-100 mb-4 py-4 text-light lc-block">
                <div className="timeline-img"></div>
                <div className="timeline-content">
                    <p editable="inline" className="lead">Step 4</p>
                    <h2 editable="inline" className="fw-bold rfs-12">Secure the Job</h2>
                    <div editable="rich">
                        <p>Apply with confidence, ace your interviews, and land the role you've always wanted.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
