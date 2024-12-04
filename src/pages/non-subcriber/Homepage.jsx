import React from 'react';
import { Link } from 'react-router-dom';
const Homepage = () => {
  return <div>
  <div className="home-banner container">
    <div className="row">
      <div className="col-md-5 col-lg-6">
        <div className="banner-text">
          <h1>Your Journey to Success Begins Here</h1>
          <h2>Empowering graduates to land their dream jobs and thrive in their careers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          <div className="banner-button">
            <Link to={"/assesmentform"} className="btn btn-primary" href="#">Take Assessment</Link>
            <Link to={"/services"} className="btn btn-primary" href="#">Get Started</Link>
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
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <h3>Floyd Miles one</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
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
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <h3>Floyd Miles two</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
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
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <h3>Floyd Miles three</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  <section className="ourservices-wrapper container" >
    <h2>Our Services</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="/img/coworkers-talking-coffee-shop.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="heading-section">
              <h5 className="card-title">Career Consulting</h5>
              <a href="#">Learn more <i><img src="/img/plain-arrow.svg" alt="" /></i></a>
            </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <img src="/img/coworkers-talking-coffee-shop.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="heading-section">
              <h5 className="card-title">Two Career Consulting</h5>
              <a href="#">Learn more <i><img src="/img/plain-arrow.svg" alt="" /></i></a>
            </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <img src="/img/coworkers-talking-coffee-shop.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="heading-section">
              <h5 className="card-title">Three Career Consulting</h5>
              <a href="#">Learn more <i><img src="/img/plain-arrow.svg" alt="" /></i></a>
            </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <img src="/img/coworkers-talking-coffee-shop.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="heading-section">
              <h5 className="card-title">Career Consulting</h5>
              <a href="#">Learn more <i><img src="/img/plain-arrow.svg" alt="" /></i></a>
            </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="our-services-btn">
      <a href="#" className="btn btn-primary">Explore Services</a>
    </div>
  </section>
 
  <section className="our-features-section container"  >
    <h2>Our Features</h2>
    <h3>Tools to Simplify Your Career Journey</h3>
    <p>Unleash innovation and accelerate growth with our dynamic product.</p>

    <div className="row">
      <div className="col">
        <div className="our-features-content ">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-details">
                <div className="details-top">
                  <img src="/img/cutting-edge-innovation.svg" alt="" />
                  <h2>Cutting-Edge Innovation</h2>
                  <p>Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-details">
                <div className="details-top">
                  <img src="/img/seamless-connectivity.svg" alt="" />
                  <h2>Seamless Connectivity</h2>
                  <p>Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-details">
                <div className="details-top">
                  <img src="/img/intuitive-user-interface.svg" alt="" />
                  <h2>Intuitive User Interface</h2>
                  <p>Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tryourtools-btn">
      <a href="#" className="btn btn-primary">Try our tools</a>
    </div>
  </section>

  
  <section className="why-choose-wrapper">
    <div className="container">
      <div className="why-choose-content">
        <h2>Why Choose Grad <span>PathWay?</span></h2>
        <p>GradPathway is an ed-tech platform for international students, combining AI tools and an ROI calculator to enhance career success. With project-based learning and tailored career support, it’s designed to maximize academic investment and build essential skills for the global job market.</p>
      </div>
      <div className="right-arrows-wrapper">
        <ul>
          <li><a href="#">Take an Assessment</a></li>
          <li><a href="#">Take an Assessment</a></li>
          <li><a href="#">Take an Assessment</a></li>
          <li><a href="#">Take an Assessment</a></li>
        </ul>
      </div>
      <div className="getstarted-btn">
        <a href="#" className="btn btn-outline-primary">
          Get Started 
          <i><img src="/img/plain-arrow.svg" alt="" /></i>
          </a>
      </div>
    </div>
  </section>

  <section className="opportunities-wrapper"  >
    <div className="opportunities-content">
      <h2>Unlock new career opportunities 
        with us</h2>
        <Link to={"/contactus"} className="btn btn-secondary" href="#">Get in Touch</Link>
    </div>
  </section>
  </div>
};

export default Homepage;
