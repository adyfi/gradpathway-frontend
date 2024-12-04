import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/non-subcriber/Login.jsx';
import Homepage from './pages/non-subcriber/Homepage.jsx';

import AboutUs from './pages/non-subcriber/AboutUs.jsx';
import Services from './pages/non-subcriber/Services.jsx';
import Blogs from './pages/non-subcriber/Blogs.jsx';
import Country from './pages/non-subcriber/Country.jsx';
import Faq from './pages/non-subcriber/Faq.jsx';
import Dashboard from './pages/non-subcriber/Dashboard.jsx';
import AdminDashboard from './pages/non-subcriber/AdminDashboard.jsx';
import UserDashboard from './pages/non-subcriber/UserDashboard.jsx';
import ProtectedRoute from './routes/ProtectedRoute';
import UnprotectedLayout from './layouts/UnprotectedLayout.jsx';
import ProtectedLayout from './layouts/ProtectedLayout.jsx';
import ContactUs from './pages/non-subcriber/ContactUs.jsx';
import AssesmentForm from './pages/non-subcriber/AssesmentForm.jsx';
import Mentors from './pages/non-subcriber/Mentors.jsx';
import Recruiter from './pages/non-subcriber/Recruiter.jsx';
function App() {
  return (
    <Router>
      <Routes>
        {/* unprotected homepage */}
        {/* <Route path="/" element={<Homepage />} /> */}
        {/* protected homepage */}
        {/* <Route path="/" element={<ProtectedRoute allowedRoles={['admin', 'user']}><Homepage /></ProtectedRoute>} /> */}
        <Route path="/" element={<UnprotectedLayout><Country /></UnprotectedLayout>} />
        <Route path="/home" element={<UnprotectedLayout><Homepage /></UnprotectedLayout>} />
        <Route path="/aboutus" element={<UnprotectedLayout><AboutUs /></UnprotectedLayout>} />
        <Route path="/services" element={<UnprotectedLayout><Services /></UnprotectedLayout>} />
        <Route path="/blogs" element={<UnprotectedLayout><Blogs /></UnprotectedLayout>} />
        <Route path="/contactus" element={<UnprotectedLayout><ContactUs /></UnprotectedLayout>} />
        <Route path="/login" element={<UnprotectedLayout><Login /></UnprotectedLayout>} />
        <Route path="/faq" element={<UnprotectedLayout><Faq /></UnprotectedLayout>} />
        <Route path="/assesmentform" element={<UnprotectedLayout><AssesmentForm /></UnprotectedLayout>} />
        <Route path="/mentors" element={<UnprotectedLayout><Mentors /></UnprotectedLayout>} />
        <Route path="/recruiter" element={<UnprotectedLayout><Recruiter /></UnprotectedLayout>} />
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['admin', 'user']}><ProtectedLayout><Dashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin" element={<ProtectedRoute allowedRoles={['admin']}><ProtectedLayout><AdminDashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/dashboard/user" element={<ProtectedRoute allowedRoles={['user']}><ProtectedLayout><UserDashboard /></ProtectedLayout></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
