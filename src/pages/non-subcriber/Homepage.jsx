import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <div className="home-banner container">
        <div className="row">
          <div className="col-md-5 col-lg-6">
            <div className="banner-text">
              <h1>Welcome to GradPathway</h1>
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

      <section className="ourservices-wrapper container">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="/img/coworkers-talking-coffee-shop.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="heading-section">
                  <h5 className="card-title">Career Consulting</h5>
                  <a href="#">
                    Learn more{" "}
                    <i>
                      <img src="/img/plain-arrow.svg" alt="" />
                    </i>
                  </a>
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="/img/coworkers-talking-coffee-shop.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="heading-section">
                  <h5 className="card-title">Two Career Consulting</h5>
                  <a href="#">
                    Learn more{" "}
                    <i>
                      <img src="/img/plain-arrow.svg" alt="" />
                    </i>
                  </a>
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="/img/coworkers-talking-coffee-shop.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="heading-section">
                  <h5 className="card-title">Three Career Consulting</h5>
                  <a href="#">
                    Learn more{" "}
                    <i>
                      <img src="/img/plain-arrow.svg" alt="" />
                    </i>
                  </a>
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="/img/coworkers-talking-coffee-shop.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="heading-section">
                  <h5 className="card-title">Career Consulting</h5>
                  <a href="#">
                    Learn more{" "}
                    <i>
                      <img src="/img/plain-arrow.svg" alt="" />
                    </i>
                  </a>
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-services-btn">
          <Link to={"/services"} className="btn btn-primary">
            Explore Services
          </Link>
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
