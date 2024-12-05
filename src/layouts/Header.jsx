import React from 'react';
const Header = () => <header>
  {/* <!-- main menu section HTML  --> */}
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="/img/grandpathway-logo.svg" alt="grandpathwayLogo" />
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><i><img src="/img/home.svg"
              alt="" /></i>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#"><i><img src="/img/services.svg"
              alt="" /></i>Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i><img src="/img/aboutus.svg" alt="" /></i>About us</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#"><i><img src="/img/blogs.svg" alt="" /></i>Blogs</a>
          </li>

        </ul>

      </div>
      <div className="getintouch-nav">
        <a href="#" className="login">Login</a>
        <a href="#" className="getintouch"><i><img src="/img/user.svg" alt="" /></i>Get in Touch</a>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  {/* <!-- main menu section HTML END --> */}
</header>;
export default Header;