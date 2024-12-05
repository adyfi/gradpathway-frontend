import React from 'react';
import { Link } from 'react-router-dom';
const Faq = () => {
  return <div>
    <div className="inner-page-wrapper" style={{ marginTop: "20vh" }}>
      <h1 className='text-center fw-bolder display-4'><span className='text-primary'>FAQ</span></h1>
      <p className='col-md-6 offset-md-3 text-center'>
        Find answers to common questions about our services, packages, and processes. Get the clarity you need to make the most of your journey with us.
      </p>
      <section className="faq-wrapper mb-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className='mb-3'>Frequently asked question</h3>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What services does GradPathWay offer?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We provide tailored career packages, including CV and cover letter enhancement, LinkedIn profile optimization, mentorship sessions, interview preparation, and more to help you stand out in the competitive job market.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How do I choose the right package for me?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Our packages are designed for different needs and career stages. Whether you're starting out or looking for advanced guidance, explore our detailed service descriptions to find the perfect fit.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What is included in the free consultation?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      The free consultation is a one-on-one session where we discuss your career goals, assess your current profile, and provide actionable recommendations to achieve your objectives.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Are the resumes and cover letters tailored for specific industries?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Yes, our resumes and cover letters are tailored to your targeted job roles and industries, ensuring they are ATS-friendly and impactful.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    What support do you provide for interviews?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    We offer personalized interview answers, mock interview sessions, and industry-specific preparation to boost your confidence and readiness.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Do you help with internships or job placements?
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Yes, our Ultimate Career Package includes securing internships in your field and preparing you for interviews with potential employers.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Can I upgrade my package later?
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Absolutely! You can upgrade to a higher package anytime to access additional features and services.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                    How can I contact your team for support?
                    </button>
                  </h2>
                  <div id="collapseeight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    You can reach out to us via the Contact Us section on our website, where we'll address your queries promptly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
};

export default Faq;
