import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';
import { ButtonPrimary } from '../components/buttons/ButtonPrimary';
import { FaPhone, FaUser, FaUserCircle } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { getUserDetails } from '../utils/auth';

// import grandpathwayLogo from './img/grandpathway-logo.svg';
// import home.svg from './img/home.svg';
// const offersText = [
//   ' 📝 Unlock Your Potential with a Free Career Assessment! Get personalized tips and insights tailored to your goals, and take the first step toward achieving career success!',
//   ' 🌟 Become a Mentor: Empower, Inspire, and Monetize Your Expertise!',
//   ' 💼 JobBoardAI: Your Instant Resume & Cover Letter Personalization Tool!'
// ]
const UnprotectedHeader = () => {
  const [userEmail, setUserEmail] = useState('')
  useEffect(() => {
    const userDetails = getUserDetails();
    console.log(userDetails)
    if (userDetails) {
      setUserEmail(userDetails);
    }
  }, []);
  const location = useLocation();
  const isLoginRoute = location.pathname.includes("login");

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
  return (<>
    <nav className='custom-navbar-wrapper position-relative fixed-top'>
      {/* <div className='nav-heading bg-primary-2 p-1 text-white text-center fixed-top'>
          <small>📝 Unlock Your Potential with a Free Career Assessment!</small>
        </div> */}
      <div className='container-fluid fixed-top bg-nav'>

        <div className='navbar-content navbar-light d-flex py-1 '>
          <a className="navbar-brand" href="/">
            <img src="/img/grandpathway-logo.svg" alt="grandpathwayLogo" height={"50px"} />
          </a>
          <div className='nav-collapse-wrapper d-flex align-items-center ' id='myTopnav'>
            <ul className='d-flex m-0' >
              <li><Link to={"/home"}>Home</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle">
                  About
                </a>
                <ul className="dropdown-menu py-3 px-2">
                  <li><a className="dropdown-item" href="/about"><i><img src='./nav-information.webp' alt="" /></i>About</a></li>
                  <li><a className="dropdown-item" href="/contact"> <i className='h5 me-3'><FiPhoneCall /></i>Contact</a></li>
                  <li><a className="dropdown-item" href="/faq"><i><img src='./nav-faq.webp' alt="" /></i>FAQ</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/success-stories"><i><img src='./nav-success.webp' alt="" /></i>Success Stories</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle">
                  Tools
                </a>
                <ul className="dropdown-menu px-2 py-3">
                  <li><a className="dropdown-item" href="/roi"><i><img src='./nav-calculator.webp' alt="" /></i>ROI Calculator</a></li>
                  <li><a className="dropdown-item" href="/assesment"><i><img src='./nav-survey.webp' alt="" /></i>AI Asssesment</a></li>
                </ul>
              </li>
              <li><Link to={"/services"}>Services</Link></li>
              <li><Link to={"/blogs"}>Blogs</Link></li>
              <li><Link to={"/mentor"} title="Join as a expert">Mentor</Link></li>
              <li><Link to={"/recruiter"} title='Hire talent from us'>Recruiter</Link></li>
            </ul>
          </div>
         
          <div className='login-btn d-flex align-items-center'>
            {
              userEmail ? <ButtonPrimary title={'Profile'} link={'/dashboard'} /> : isLoginRoute ? <ButtonPrimary title={'Sign Up'} link={'/sign-up'} /> : <ButtonPrimary title={'Login'} link={'/login'} />
            }
          </div>
          <div className='mobile-icon d-none' onClick={toggleNav}>
            <img src='./interface.png' alt='hamburger icon' />
          </div>
        </div>
      </div>
    </nav>
  </>)
}
  ;
export default UnprotectedHeader;