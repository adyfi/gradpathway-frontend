import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

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
  const toggleNav = () => {
    const x = document.getElementById("myTopnav");
    if (x.className === "nav-collapse-wrapper") {
      x.className += " responsive";
    } else {
      x.className = "nav-collapse-wrapper"; // Adjusted to match your default class
    }
  };
  return ( <>
    <nav className='custom-navbar-wrapper shadow-sm position-relative fixed-top'>
      {/* <div className='nav-heading bg-primary-2 p-1 text-white text-center fixed-top'>
          <small>📝 Unlock Your Potential with a Free Career Assessment!</small>
        </div> */}
      <div className='container-fluid fixed-top bg-white shadow-sm'>
        
        <div className='navbar-content navbar-light d-flex py-1 '>
          <a className="navbar-brand" href="/">
            <img src="/img/grandpathway-logo.svg" alt="grandpathwayLogo" height={"50px"} />
          </a>
          <div className='nav-collapse-wrapper d-flex align-items-center ' id='myTopnav'>
            <ul className='d-flex m-0' >
              <li><Link to={"/home"}>Home</Link></li>
              <li className="dropdown">
                <a className=" dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/about">About</a></li>
                  <li><a className="dropdown-item" href="/faq">FAQ</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/success-stories">Success Stories</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tools
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/roi">ROI Calculator</a></li>
                  <li><a className="dropdown-item" href="/assesment">AI Asssesment</a></li>
                </ul>
              </li>
              <li><Link  to={"/contact"}>Contact</Link></li>
              <li><Link  to={"/services"}>Services</Link></li>
              <li><Link  to={"/blogs"}>Blogs</Link></li>
              <li><Link  to={"/mentor"}>Mentor</Link></li>
              <li><Link  to={"/recruiter"}>Recruiter</Link></li>
            </ul>
          </div>
          <div className='login-btn d-flex align-items-center'>
            <a href="#" className='btn btn-primary'>Login</a>
          </div>
          <div className='mobile-icon d-none' onClick={toggleNav}>
          <img src='./interface.png' alt='hamburger icon' />
          </div>
        </div>
      </div>
    </nav>
  </>)}
  ;
export default UnprotectedHeader;