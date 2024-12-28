import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <div className="home-banner container">
        <div className="row">
          <div className="col-md-5 col-lg-6">
            <div className="banner-text">
              <h1 className="text-primary">Welcome to GradPathway</h1>
              <h2>
                Your trusted partner in bridging the gap between academic
                success and career achievement across the UK, US, Australia, and
                India.
              </h2>
              <p>
                At GradPathway, we believe that your international education
                journey should culminate in a rewarding career. Our AI-powered
                platform is designed to elevate your job search experience,
                ensuring you’re not just ready but equipped to stand out in
                competitive job markets worldwide.
              </p>
              <div className="banner-button">
                <Link
                  to={"/assesmentform"}
                  className="btn btn-primary"
                  href="#"
                >
                  Take Assessment
                </Link>
                <Link to={"/services"} className="btn btn-primary" href="#">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <div className="banner-image">
              <img src="/img/dkp.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <section className="why-choose-wrapper">
        <div className="container">
          <div className="why-choose-content">
            <h2>
              Why Choose <span>GradPathWay?</span>
            </h2>
            <p>
            Navigating today’s global job market is complex, especially for international students who need
            support aligning their skills with employer expectations. GradPathway is more than just an
            ed-tech platform – we’re a career catalyst. Our approach combines advanced AI tools and a
            powerful ROI calculator to help you measure and maximize the impact of your academic
            investment. By focusing on project-based learning, tailored career services, and digital
            skill-building, we’re committed to your long-term success.

            </p>
          </div>
          <div className="right-arrows-wrapper">
            <ul>
              <li>
                <Link to={"/assesmentform"} href="#">Take an Assessment</Link>
              </li>
              <li>
                <Link to={"/assesmentform"} href="#">Take an Assessment</Link>
              </li>
              <li>
                <Link to={"/assesmentform"} href="#">Take an Assessment</Link>
              </li>
              <li>
                <Link to={"/assesmentform"} href="#">Take an Assessment</Link>
              </li>
            </ul>
          </div>
          <div className="getstarted-btn">
            <Link to={"/services"} className="btn btn-outline-primary" href="#">
              Get Started
              <i>
                <img src="/img/plain-arrow.svg" alt="" />
              </i>
              </Link>
          </div>
        </div>
      </section>

      <section className="our-services-list-wrapper">
            <div className="out-services-list-content">
                <div className="container">
                <h2 className="text-center mb-5">Our Services</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="service-box">
                                <h3>Foundation Package</h3>
                                <div className="price-tag">
                                    <span className="price">£99</span><span className="tag">    </span>
                                </div>
                                <h5>What's Included</h5>
                                <ul className="whats-included">
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>CV, Cover Letter, and LinkedIn Review:</b> Professional enhancement of your CV, cover
                                                letter, and LinkedIn profile, including a customized LinkedIn banner and profile content to
                                                increase your digital presence.
                                        </span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>One Free Consulting Call:</b> A personalized consultation to discuss your career goals
                                            and the best strategies to achieve them.
                                            </span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>3 ATS-Friendly Resumes and Cover Letters:</b> Tailored for five different job roles you
                                        are targeting, ensuring your application passes through Applicant Tracking Systems
                                        (ATS) effectively.
                                        </span>
                                    </li>
                                    <li>
                                        <small><b>Ideal For:</b> Students looking to make a strong first impression with a polished digital presence
                                        and targeted job applications.
                                        </small>
                                    </li>
                                </ul>
                                <div className='btn-box'>   
                                <a href="#" className="btn btn-primary btn-gradient">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="service-box">
                                <h3>Advanced Package</h3>
                                <div className="price-tag">
                                    <span className="price"> £149
                                    </span><span className="tag"></span>
                                </div>
                                <h5>What's Included</h5>
                                <ul className="whats-included">
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span>Everything in Plan 1</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Personalized Interview Answers:</b> Crafted based on your work experience, education,
                                        and projects to ensure you’re prepared for any interview.</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Weekly Job Subscription:</b> A weekly subscription delivering the latest jobs specific to
                                        your profile.</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Subscription Bundle:</b> Access to essential resources:</span>
                                        <ul>
                                            <li>Graduate Schemes</li>
                                            <li>Top Websites for Job Search</li>
                                            <li>Must-Know Websites</li>
                                            <li>Top 25 Graduate Employers</li>
                                            <li>Graduate Salaries (Degree Specific)</li>
                                            <li>Ineligible Occupations for Skilled Work Visa 2024</li>
                                            <li>Job Codes for New Entrants 2024</li>
                                            <li>Everything about UK e-Visa (Digital)</li>
                                            <li>UK Point System - Must Know</li>
                                            <li>UK Point System - Must Know</li>
                                            <li>UK Companies with Visa Sponsorship</li>
                                            <li>Different Types of Visa</li>
                                            
                                        </ul>
                                    </li>
                                    <li>
                                        <small>
                                            <b>Ideal For:</b>  Students seeking a comprehensive approach to their job search, with ongoing support and resources to stay informed and prepared.
                                        </small>
                                    </li>
                                </ul>
                                <div className='btn-box'>   
                                <a href="#" className="btn btn-primary btn-gradient">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="service-box">
                                <h3> Professional Package</h3>
                                <p>( add a condition that it have coaching for
                                    specific 4 stream)</p>
                                <div className="price-tag">
                                    <span className="price"> £249</span><span className="tag"></span>
                                </div>
                                <h5>What's Included</h5>
                                <ul className="whats-included">
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span>Everything in Plan 2</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Mentorship Session:</b> Guidance from a subject matter expert in your field of study or industry.</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Project-Based Experience:</b> Learn and complete three projects to bolster your CV with hands-on, project-based experience.</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Mock Interview Prep:</b> Intensive preparation sessions tailored to your specific career
                                        goals and industry</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Updates on Career Fairs and Networking Events:</b> Stay informed about relevant
                                        career fairs and networking events in the UK to build your professional network.</span>
                                    </li>
                                    <li>
                                        <small><b>Ideal For:</b> Students who want to go beyond the basics, focusing on developing project-based
                                            experience, gaining insights from industry experts, and staying connected to key networking
                                            opportunities.
                                        </small>
                                    </li>
                                </ul>
                                <div className='btn-box'>   
                                <a href="#" className="btn btn-primary btn-gradient">Get Started</a>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-md-6 mb-4">
                            <div className="service-box">
                                <h3>Ultimate Career Package</h3>
                                <div className="price-tag">
                                    <span className="price">£399</span><span className="tag"></span>
                                </div>
                                <h5>What's Included</h5>
                                <ul className="whats-included">
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span> Everything in Plan 3</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Internship in Your Field:</b> Secure an internship in your industry to gain valuable UK work
                                        experience.
                                        </span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span>1 Interview with the company in you domain</span>
                                    </li>
                                    <li>
                                        <i><img src="/img/check-circle-icon.png" alt=""/></i>
                                        <span><b>Certification Training and Guidance:</b> Ongoing training and support until you pass
                                        certification exams relevant to your field, such as Microsoft or Cloud certifications, to
                                        build credibility and ensure long-term career growth.</span>
                                    </li>
                                    <li><small><b>Ideal For:</b> Students committed to maximizing their job prospects, with a focus on practical
                                    experience, financial planning, professional certifications, and long-term career growth.</small></li>
                                </ul>
                                 <div className='btn-box'>   
                                    <a href="#" className="btn btn-primary btn-gradient">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-services-btn text-center">
                    <Link to={"/services"} className="btn btn-primary">
                      Explore Services
                    </Link>
                  </div>
                </div>
            </div>
        </section>

      <section className="our-features-section container">
        <h2>Our Features</h2>
        <h3>Tools to Simplify Your Career Journey</h3>
        <p>
          Unleash innovation and accelerate growth with our dynamic product.
        </p>

        <div className="row">
          <div className="col">
            <div className="our-features-content ">
              <div className="row">
                <div className="col-md-4">
                  <div className="feature-details">
                    <div className="details-top">
                      <img src="/img/cutting-edge-innovation.svg" alt="" />
                      <h2>Cutting-Edge Innovation</h2>
                      <p>
                        Experience groundbreaking technological advancements
                        that push the boundaries of what's possible,
                        revolutionizing industries and transforming the way we
                        live and work.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-details">
                    <div className="details-top">
                      <img src="/img/seamless-connectivity.svg" alt="" />
                      <h2>Seamless Connectivity</h2>
                      <p>
                        Stay connected anytime, anywhere with our robust and
                        reliable network infrastructure, ensuring uninterrupted
                        communication and effortless access to the digital
                        world.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-details">
                    <div className="details-top">
                      <img src="/img/intuitive-user-interface.svg" alt="" />
                      <h2>Intuitive User Interface</h2>
                      <p>
                        Enjoy a seamless and intuitive user experience with our
                        sleek and user-friendly interface, designed to simplify
                        complex tasks and enhance productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tryourtools-btn">
          <a href="#" className="btn btn-primary">
            Try our tools
          </a>
        </div>
      </section>

      <div className="testimonial-wrapper">
        <h2>Success Stories: From Graduate to Professional</h2>
        <div className="testimonial-list-wrapper container">
          <div className="row">
            <div className="col-md-4">
              <div className="testi-content">
                <div className="header-top">
                  <div className="testimonial-icon">
                    <img src="/img/icon.png" alt="" />
                  </div>
                  <div className="start-rating">
                    <div className="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">
                        5 stars
                      </label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">
                        4 stars
                      </label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">
                        3 stars
                      </label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">
                        2 stars
                      </label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">
                        1 star
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-content">
                  <h3>Floyd Miles one</h3>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testi-content">
                <div className="header-top">
                  <div className="testimonial-icon">
                    <img src="/img/icon.png" alt="" />
                  </div>
                  <div className="start-rating">
                    <div className="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">
                        5 stars
                      </label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">
                        4 stars
                      </label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">
                        3 stars
                      </label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">
                        2 stars
                      </label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">
                        1 star
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-content">
                  <h3>Floyd Miles two</h3>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testi-content">
                <div className="header-top">
                  <div className="testimonial-icon">
                    <img src="/img/icon.png" alt="" />
                  </div>
                  <div className="start-rating">
                    <div className="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">
                        5 stars
                      </label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">
                        4 stars
                      </label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">
                        3 stars
                      </label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">
                        2 stars
                      </label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">
                        1 star
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-content">
                  <h3>Floyd Miles three</h3>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="opportunities-wrapper">
        <div className="opportunities-content">
          <h2>Unlock new career opportunities with us</h2>
          <Link to={"/contactus"} className="btn btn-secondary" href="#">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
