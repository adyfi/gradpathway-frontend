import React from "react";
import "./dashboard-pages.scss"

const ChangePassword  = () => {
  return (
    <>
        <div className="container mt-5" id="change-password-page">
        <div className="card mb-4">
            <div className="card-header bg-primary text-white">Change Password</div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label for="currentPassword" className="form-label">Current Password</label>
                        <input type="password" className="form-control" id="currentPassword" required />
                    </div>
                    <div className="mb-3">
                        <label for="newPassword" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="newPassword" required/>
                    </div>
                    <div className="mb-3">
                        <label for="confirmPassword" className="form-label">Confirm New Password</label>
                        <input type="password" className="form-control" id="confirmPassword" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Update Password</button>
                </form>
            </div>
        </div>
    </div>
    </>
  );
};

export default ChangePassword;
