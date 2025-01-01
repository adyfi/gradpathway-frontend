import React from "react";
import "./dashboard-pages.scss"

const MyAccountDashboard  = () => {
  return (
    <>
        <div className="container-fluid">
        
        <div className="card mb-4">
            <div className="card-body text-center">
                <img src="https://via.placeholder.com/150" alt="Profile Picture" className="rounded-circle mb-3" />
                <h4 className="card-title">John Doe</h4>
                <p className="card-text text-muted">Welcome to your account dashboard</p>
                <button className="btn btn-primary">Edit Profile</button>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div className="card mb-4">
                    <div className="card-header bg-primary text-white">Personal Details</div>
                    <div className="card-body">
                        <p><strong>Email:</strong> john.doe@example.com</p>
                        <p><strong>Phone:</strong> +44 123 456 7890</p>
                        <p><strong>Address:</strong> 123 Main Street, London, UK</p>
                        <p><strong>Date of Birth:</strong> January 1, 1990</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card mb-4">
                    <div className="card-header bg-primary text-white">Account Settings</div>
                    <div className="card-body">
                        <p><strong>Username:</strong> johndoe</p>
                        <p><strong>Password:</strong> ********</p>
                        <button className="btn btn-warning me-2">Change Password</button>
                        <button className="btn btn-danger">Deactivate Account</button>
                    </div>
                </div>
            </div>
        </div>


        <div className="row">

            <div className="col-md-6">
                <div className="card mb-4">
                    <div className="card-header bg-primary text-white">Order History</div>
                    <div className="card-body">
                        <ul>
                            <li><strong>Order #12345:</strong> Completed on Dec 15, 2023</li>
                            <li><strong>Order #12346:</strong> Pending</li>
                            <li><strong>Order #12347:</strong> Shipped on Dec 20, 2023</li>
                        </ul>
                        <button className="btn btn-secondary">View All Orders</button>
                    </div>
                </div>
            </div>


            <div className="col-md-6">
                <div className="card mb-4">
                    <div className="card-header bg-primary text-white">Subscription</div>
                    <div className="card-body">
                        <p><strong>Plan:</strong> Premium</p>
                        <p><strong>Status:</strong> Active</p>
                        <p><strong>Renewal Date:</strong> Jan 15, 2024</p>
                        <button className="btn btn-success me-2">Upgrade Plan</button>
                        <button className="btn btn-danger">Cancel Subscription</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </>
  );
};

export default MyAccountDashboard;
