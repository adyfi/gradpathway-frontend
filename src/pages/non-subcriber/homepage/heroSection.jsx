import React, { useEffect } from 'react'
import { ButtonPrimaryOutlineNone } from '../../../components/buttons/ButtonPrimaryOutlineNone';
import { ButtonWithGenAIicon } from '../../../components/buttons/ButtonWithGenAIicon';

const HeroSection = () => {
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
    
          // Apply transformations
          const aiJob1 = document.getElementById('ai-job-1');
          const aiJob2 = document.getElementById('ai-job-2');
          const aiJob3 = document.getElementById('ai-job-3');
          const aiJob4 = document.getElementById('ai-job-4');
    
          if (aiJob1) aiJob1.style.transform = `translateY(${scrollY * -0.5}px) rotate(15deg)`;
          if (aiJob2) aiJob2.style.transform = `translateY(${scrollY * -0.4}px) rotate(-15deg)`;
          if (aiJob3) aiJob3.style.transform = `translateY(${scrollY * -0.2}px) rotate(-15deg) translateX(${scrollY * -0.15}px)`;
          if (aiJob4) aiJob4.style.transform = `translateY(${scrollY * -0.2}px) rotate(15deg) translateX(${scrollY * 0.15}px)`;
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className="main-wrapper">
            <div className="container-fluid hero">
                <img src="./ai-job-img/ai-job-1.png" className="ai-job-img ai-job-1" id="ai-job-1" alt="" />
                <img src="./ai-job-img/ai-job-2.png" className="ai-job-img ai-job-2" id="ai-job-2" alt="" />
                <img src="./ai-job-img/ai-job-3.png" className="ai-job-img ai-job-3" id="ai-job-3" alt="" />
                <img src="./ai-job-img/ai-job-4.png" className="ai-job-img ai-job-4" id="ai-job-4" alt="" />

                <div className="row">

                    <div className="data-hero m-auto text-center">
                        <h1>Elevate Your Career</h1>
                        <p>
                            We've helped over 100,000 people secure their dream jobs. Let our job search strategies guide you from writing resumes to achieving better days
                        </p>
                        <div className="d-flex justify-content-center gap-5">
                            <ButtonWithGenAIicon title={'Take a Free Asessment'} link={'/assessment'} />
                            <ButtonPrimaryOutlineNone title={'Our Services'} link={'/services'} />
                            {/* <button className="btn btn-p-2 text-primary-2 d-flex align-items-center">
                                <span className="m-0">
                                    Our Services
                                </span>
                                <img src="./arrow-right.svg" className="icon-arrow-right" alt="" />
                            </button> */}
                        </div>
                    </div>
                    {/* <img src="./ai-job-2.jpg" className="ai-job-2" id="ai-job-2" alt="">
            <img src="./ai-job-3.jpg" className="ai-job-3" id="ai-job-3" alt="">
            <img src="./ai-job-2.jpg" className="ai-job-4" id="ai-job-4" alt="">
            <img src="./ai-job-3.jpg" className="ai-job-5" id="ai-job-5" alt=""> */}
                    <div className="d-flex col-md-8 offset-md-2 mt-5 pb-5">
                        <img src="./dashboard-big.webp" width="100%" className="dashboard-img " alt="bg svg" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection