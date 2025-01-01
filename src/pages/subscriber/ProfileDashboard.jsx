import React from "react";
import "./dashboard-pages.scss"

const ProfileDashboard  = () => {
  return (
    <>
        <div className="container-fluid">
   
        <div className="card mb-4">
            <div className="card-body text-center">
                <img src="https://via.placeholder.com/150" alt="Profile Picture" className="rounded-circle mb-3" />
                <h4 className="card-title">John Doe</h4>
                <p className="card-text text-muted">Software Developer | Tech Enthusiast</p>
                <button className="btn btn-primary">Edit Profile</button>
            </div>
        </div>


        <div className="row">
    
            <div className="col-md-6">
                <div className="card mb-4">
                    <div className="card-header bg-primary text-white">Personal Information</div>
                    <div className="card-body">
                        <p><strong>Email:</strong> john.doe@example.com</p>
                        <p><strong>Phone:</strong> +44 123 456 7890</p>
                        <p><strong>Location:</strong> London, UK</p>
                        <p><strong>LinkedIn:</strong> <a href="#">linkedin.com/in/johndoe</a></p>
                    </div>
                </div>
            </div>

      
            <div className="col-md-6">
                <div className="card mb-4">
                    <div className="card-header bg-primary text-white">Skills</div>
                    <div className="card-body">
                        <span className="badge bg-success me-2">JavaScript</span>
                        <span className="badge bg-success me-2">React</span>
                        <span className="badge bg-success me-2">Node.js</span>
                        <span className="badge bg-success me-2">Python</span>
                        <span className="badge bg-success me-2">SQL</span>
                    </div>
                </div>
            </div>
        </div>


        <div className="row">

            <div className="col-md-6">
                <div className="card mb-4">
                    <div className="card-header bg-primary text-white">Projects</div>
                    <div className="card-body">
                        <ul>
                            <li><strong>E-commerce Platform:</strong> Built a scalable online store using React and Node.js.</li>
                            <li><strong>Portfolio Website:</strong> Designed and developed a personal portfolio using Bootstrap.</li>
                            <li><strong>API Development:</strong> Created RESTful APIs for a task management app.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card mb-4">
                    <div className="card-header bg-primary text-white">Achievements</div>
                    <div className="card-body">
                        <ul>
                            <li>Awarded "Developer of the Year" in 2023.</li>
                            <li>Published an article on "Optimizing Web Performance" in a tech journal.</li>
                            <li>Certified AWS Solutions Architect Associate.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  );
};

export default ProfileDashboard;
