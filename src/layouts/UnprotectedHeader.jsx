import React from 'react'; 
import { Link } from 'react-router-dom';
// import grandpathwayLogo from './img/grandpathway-logo.svg';
// import home.svg from './img/home.svg';
const UnprotectedHeader = () => 
<header>
            {/* <!-- main menu section HTML  --> */}
            <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
      <Link to={"/"} className="navbar-brand">
          <img src="/img/grandpathway-logo.svg" alt="grandpathwayLogo" />
      </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link active" aria-current="page" href="#"><i><img src="/img/home.svg"
                    alt="" /></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/services"} className="nav-link" aria-current="page" href="#"><i><img src="/img/services.svg"
                    alt="" /></i>
                    Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/aboutus"} className="nav-link" href="#"><i><img src="/img/aboutus.svg" alt="" /></i>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/blogs"} className="nav-link" href="#"><i><img src="/img/blogs.svg" alt="" /></i>
                Blogs
              </Link>
            </li>
          </ul>

        </div>
        <div className="getintouch-nav">
          <Link to={"/login"} className="login" href="#">Login</Link>
          <Link to={"/contactus"} className="getintouch" href="#"><i><img src="/img/user.svg" alt="" /></i>Get in Touch</Link>
          
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    {/* <!-- main menu section HTML END --> */}
</header>; 
export default UnprotectedHeader;