import React from 'react';
import './admin-dashboard.scss'
const Header = () => {
  return (
    <>
      
        <nav className='sidebar-wrapper'>
          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="./profile-icon.webp" alt="" />
              <span>Jonh Cena</span>
            </a>

            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <div className='navbar-wrappper'>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><i className="bi bi-house"></i> home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-person"></i> Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-list-task"></i> Task</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-calculator"></i> Calculator</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-inbox"></i> Inbox</a>
              </li>
            </ul>
          </div>
        </nav>

        
      
    </>

  );
}
export default Header;