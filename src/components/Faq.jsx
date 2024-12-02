import React from 'react';

const Faq = () => {
  return <div>
   <div className="inner-page-wrapper">
      
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="/img/grandpathway-logo.svg" alt=""/>
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><i><img src="/img/home.svg"
                                        alt=""/></i>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"><i><img src="/img/services.svg"
                                        alt=""/></i>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i><img src="/img/aboutus.svg" alt=""/></i>About us</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#"><i><img src="/img/blogs.svg" alt=""/></i>Blogs</a>
                        </li>

                    </ul>

                </div>
                <div className="getintouch-nav">
                    <a href="#" className="login">Login</a>
                    <a href="#" className="getintouch"><i><img src="/img/user.svg" alt=""/></i>Get in Touch</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
     
        <div className="inner-text-image-banner">
            <div className="image-wrapper">
                <img src="/img/books-with.webp" alt="" />
            </div>
            <div className="text-banner-content">
                <h2>Our Blogs</h2>
                <p>Stay updated with expert insights, industry news, and creative innovations</p>
            </div>
        </div>

        <section className="faq-wrapper">
            <div className="container">
                <div className="row">
                   <div className="col">
                    <h1>FAQ</h1>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Accordion Item #1
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Accordion Item #2
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Accordion Item #3
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
            </div>
        </section>
        
        <section className="opportunities-wrapper">
            <div className="opportunities-content">
              <h2>Unlock new career opportunities 
                with us</h2>
                <a href="#" className="btn btn-secondary">Get In Touch</a>
            </div>
          </section>
          
        
    </div>
  </div>
};

export default Faq;
