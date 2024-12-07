import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import grandpathwayLogo from './img/grandpathway-logo.svg';
// import home.svg from './img/home.svg';
  // const offersText = [
  //   ' 📝 Unlock Your Potential with a Free Career Assessment! Get personalized tips and insights tailored to your goals, and take the first step toward achieving career success!',
  //   ' 🌟 Become a Mentor: Empower, Inspire, and Monetize Your Expertise!',
  //   ' 💼 JobBoardAI: Your Instant Resume & Cover Letter Personalization Tool!'
  // ]
const UnprotectedHeader = () =>{
  // const titles = [
  //   "📝 Unlock Your Potential with a Free Career Assessment!",
  //   "🌟 Discover Your Dream Career Path Today!",
  //   "💡 Personalized Tips to Boost Your Career!",
  //   "🚀 Take the First Step Toward Your Future!"
  // ];

  // const [currentTitle, setCurrentTitle] = useState(titles[0]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTitle((prevTitle) => {
  //       const currentIndex = titles.indexOf(prevTitle);
  //       const nextIndex = (currentIndex + 1) % titles.length;
  //       return titles[nextIndex];
  //     });
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return ( <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm">
      <div className="col-12 bg-primary-2 p-1 position-fixed top-0 text-white text-center">
        <small>📝 Unlock Your Potential with a Free Career Assessment!</small>
        {/* <div className="carousel-inner p-0 bg-danger col-12 m-0">
          <div className="carousel-item active">
          </div>
          <div className="carousel-item">
            <small>🌟 Become a Mentor: Empower, Inspire, and Monetize Your Expertise!</small>
          </div>
          <div className="carousel-item">
            <small>💼 JobBoardAI: Your Instant Resume & Cover Letter Personalization Tool!</small>
          </div>
        </div> */}
      </div>

      <div className="container-fluid mt-4">
        <a className="navbar-brand" href="/">
          <img src="/img/grandpathway-logo.svg" alt="grandpathwayLogo" height={"50px"} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_lc" aria-controls="nav_lc" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav_lc">
          <ul className="d-none d-lg-flex navbar-nav mx-auto my-3 pt-4 my-lg-0 position-absolute top-50 start-50 translate-middle">
            <li className="nav-item me-4"><Link className="nav-link" to={"/home"}>Home</Link></li>

            <li className="nav-item dropdown me-4">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/about">About</a></li>
                <li><a className="dropdown-item" href="/faq">FAQ</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/success-stories">Success Stories</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown me-4">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tools
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/roi">ROI Calculator</a></li>
                <li><a className="dropdown-item" href="/assesment">AI Asssesment</a></li>
              </ul>
            </li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/contact"}>Contact</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/services"}>Services</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/blogs"}>Blogs</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/mentor"}>Mentor</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/recruiter"}>Recruiter</Link></li>
          </ul>
          <ul className="navbar-nav my-3 my-lg-0 d-lg-none">
            <li className="nav-item me-4"><Link className="nav-link" to={"/about"}>About</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/faq"}>FAQ</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/success-stories"}>Success Stories</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/contact"}>Contact</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/services"}>Services</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/blogs"}>Blogs</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/faq"}>FAQ</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/tutor"}>Tutor</Link></li>
            <li className="nav-item me-4"><Link className="nav-link" to={"/recruiter"}>Recruiter</Link></li>
          </ul>
          <div className="ms-lg-auto">
            <Link className="btn btn-outline-primary me-2" to={"/login"}>Log In</Link>
            {/* <Link className="btn btn-primary" to={"/assesment"}>Take Free Assessment</Link> */}
          </div>
        </div>
      </div>
    </nav>
  </>)}
  ;
export default UnprotectedHeader;