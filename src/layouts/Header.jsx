import React from 'react';
import './admin-dashboard.scss'
const Header = () => {
  return (
    <>
      
        <nav className='sidebar-wrapper shadow-border'>
          <div className='admin-logo'>
            <img src='./grandpathway-logo.svg' alt='Grandpathway Admin Logo' />
          </div>
          <div className='navbar-wrappper'>

            <ul className="nav nav-tabs flex-column" id="myTab" role="tablist">
              <li className='plan-name'>
                <p>Home</p>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><i className="bi bi-clipboard-data"></i>
                Dashboard</button>
              </li>
              <li className='plan-name'>
                <p>Foundation Package</p>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">CV</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">One Free Consulting Call</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab2" data-bs-toggle="tab" data-bs-target="#contact-tab-pane2" type="button" role="tab" aria-controls="contact-tab-pane2" aria-selected="false">Resume/ Cover letter</button>
              </li>
            </ul>
              
          </div>
        </nav>

        
      
    </>

  );
}
export default Header;