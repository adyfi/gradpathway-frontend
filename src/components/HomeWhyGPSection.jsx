import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { FaBlackTie, FaBookReader } from 'react-icons/fa'
import { GrResources } from 'react-icons/gr'
import { MdOutlineSupport, MdSupportAgent } from 'react-icons/md'
import { PiHeadCircuitFill, PiTargetBold } from 'react-icons/pi'
import AOS from 'aos';
import './_homeWhyGPSection.scss';
import { FaUserGear } from 'react-icons/fa6'
import { TbTargetArrow } from 'react-icons/tb'

export const HomeWhyGPSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (

        <div className="container py-5 py-md-6 why-choose-wrapper">
            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="lc-block text-center mb-2">
                        <div editable="rich">
                            <h2 className="display-5 text-primary-2 fw-bolder" data-aos="fade-up">Why Choose GradPathWay?&nbsp;</h2>
                        </div>
                    </div>
                    <div className="lc-block text-center">
                        <div editable="rich" data-aos="fade-up">
                            <p className="">Navigating today's global job market is complex, especially for international students who need support aligning their skills with employer expectations. GradPathway is more than just an ed-tech platform - we're a career catalyst. Our approach combines advanced AI tools and a powerful ROI calculator to help you measure and maximize the impact of your academic investment. By focusing on project-based learning, tailored career services, and digital skill-building, we're committed to your long-term success.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 p-3">
                    <div className="card-whygp card-w1 p-5 border rounded">
                        <span className=''>
                            <FaUserGear />
                        </span>
                        <h4>Personalized Guidance</h4>
                        <p>Tailored assessments, plans, and one-on-one support to align your career with your unique goals.</p>
                    </div>
                </div>
                <div className="col-md-3 p-3">
                    <div className="card-whygp card-w2 p-5 border rounded">
                        <span className=''>
                            <PiHeadCircuitFill />
                        </span>
                        <h4>Expert Resources</h4>
                        <p>Access proven strategies, tools, and tips to enhance your CV, LinkedIn profile, and interview skills..</p>
                    </div>
                </div>
                <div className="col-md-3 p-3">
                    <div className="card-whygp card-w3 p-5 border rounded">
                        <span className=''>  
                            <MdSupportAgent />
                        </span>
                        <h4>Comprehensive Support</h4>
                        <p>From career discovery to securing your dream job, we guide you every step of the way.</p>
                    </div>
                </div>
                <div className="col-md-3 p-3">
                    <div className="card-whygp card-w4 p-5 border rounded">
                        <span className=''>  
                            <TbTargetArrow />
                        </span>
                        <h4>Proven Success</h4>
                        <p>Trusted by countless graduates to elevate their profiles and achieve career success.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
