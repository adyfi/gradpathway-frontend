import React from 'react';

const Header = ({ children }) => {
  return (
    <>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">
        <aside className="left-sidebar">
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
              <a href="./dashboard" className="text-nowrap logo-img">
                <img src="./grandpathway-logo.svg" width="180" alt="" />
              </a>
              <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                <i className="ti ti-x fs-8"></i>
              </div>
            </div>
            <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
              <ul id="sidebarnav" className='p-0'>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">Home</span>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./dashboard" aria-expanded="false">
                    <span>
                      <i className="ti ti-layout-dashboard"></i>
                    </span>
                    <span className="hide-menu">Dashboard</span>
                  </a>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">SERVICES</span>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="/cvcletterlinkedIn" aria-expanded="false">
                    <span>
                      <i className="ti ti-article"></i>
                    </span>
                    <span className="hide-menu">CV, C. Letter, LinkedIn</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="/ConsultingCalls" aria-expanded="false">
                    <span>
                      <i className="ti ti-alert-circle"></i>
                    </span>
                    <span className="hide-menu">Consulting Calls</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./ats-friendly-resume" aria-expanded="false">
                    <span>
                      <i className="ti ti-cards"></i>
                    </span>
                    <span className="hide-menu">ATS Friendly Resumes</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./interview-questions" aria-expanded="false">
                    <span>
                      <i className="ti ti-file-description"></i>
                    </span>
                    <span className="hide-menu">Interview Question </span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./job-subscription" aria-expanded="false">
                    <span>
                      <i className="ti ti-typography"></i>
                    </span>
                    <span className="hide-menu">Job Subscription</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./subscription-bundle" aria-expanded="false">
                    <span>
                      <i className="ti ti-login"></i>
                    </span>
                    <span className="hide-menu">Subscription Bundle</span>
                  </a>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">Setting</span>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./passowrd-change" aria-expanded="false">
                    <span>
                      <i className="ti ti-user-plus"></i>
                    </span>
                    <span className="hide-menu">Change Password</span>
                  </a>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">HELP</span>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="#" aria-expanded="false">
                    <span>
                      <i className="ti ti-mood-happy"></i>
                    </span>
                    <span className="hide-menu">FAQ</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="#" aria-expanded="false">
                    <span>
                      <i className="ti ti-aperture"></i>
                    </span>
                    <span className="hide-menu">Contact Us</span>
                  </a>
                </li>
              </ul>
              <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
                <div className="d-flex">
                  <div className="unlimited-access-title me-3">
                    <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">Upgrade to pro</h6>
                    <a href="https://adminmart.com/product/modernize-bootstrap-5-admin-template/" target="_blank" className="btn btn-primary fw-semibold lh-sm">Buy Pro</a>
                  </div>
                  <div className="unlimited-access-img">
                    <img src="./assets/images/backgrounds/rocket.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </aside>
        <div className="body-wrapper">
          <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item d-block d-xl-none">
                  <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                    <i className="ti ti-menu-2"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-icon-hover" href="javascript:void(0)">
                    <i className="ti ti-bell-ringing"></i>
                    <div className="notification bg-primary rounded-circle"></div>
                  </a>
                </li>
              </ul>
              <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                  <li className="nav-item dropdown">
                    <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img src="./assets/images/profile/user-1.jpg" alt="" width="35" height="35" className="rounded-circle" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                      <div className="message-body">
                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                          <i className="ti ti-user fs-6"></i>
                          <p className="mb-0">My Profile</p>
                        </a>
                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                          <i className="ti ti-mail fs-6"></i>
                          <p className="mb-0">My Account</p>
                        </a>
                        {/* <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                          <i className="ti ti-list-check fs-6"></i>
                          <p className="mb-0">My Task</p>
                        </a> */}
                        <a href="./logout" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          {children}
        </div>
      </div>
    </>

  );
}
export default Header;