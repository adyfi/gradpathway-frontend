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
import { Mentor } from './pages/non-subcriber/Mentor.jsx';
import MentorForm from './components/MentorForm.jsx';
import MentorRegistration from './pages/non-subcriber/MentorRegistration.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'aos/dist/aos.css';
import { NotFound } from './pages/non-subcriber/NotFound.jsx';
import BlogPost from './pages/non-subcriber/BlogsPost.jsx';
import SuccessStories from './pages/non-subcriber/SuccessStories.jsx';

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
        <Route path="/about" element={<UnprotectedLayout><AboutUs /></UnprotectedLayout>} />
        <Route path="/services" element={<UnprotectedLayout><Services /></UnprotectedLayout>} />
        <Route path="/blogs" element={<UnprotectedLayout><Blogs /></UnprotectedLayout>} />
        <Route path="/blogs/:slug" element={<UnprotectedLayout><BlogPost /></UnprotectedLayout>} />
        <Route path="/contact" element={<UnprotectedLayout><ContactUs /></UnprotectedLayout>} />
        <Route path="/login" element={<UnprotectedLayout><Login /></UnprotectedLayout>} />
        <Route path="/success-stories" element={<UnprotectedLayout><SuccessStories /></UnprotectedLayout>} />
        <Route path="/faq" element={<UnprotectedLayout><Faq /></UnprotectedLayout>} />
        <Route path="/assesment" element={<UnprotectedLayout><AssesmentForm /></UnprotectedLayout>} />
        <Route path="/mentor" element={<UnprotectedLayout><Mentor /></UnprotectedLayout>} />
        <Route path="/mentor-registration" element={<UnprotectedLayout><MentorRegistration /></UnprotectedLayout>} />
        <Route path="/recruiter" element={<UnprotectedLayout><Recruiter /></UnprotectedLayout>} />
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['admin', 'user']}><ProtectedLayout><Dashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin" element={<ProtectedRoute allowedRoles={['admin']}><ProtectedLayout><AdminDashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/dashboard/user" element={<ProtectedRoute allowedRoles={['user']}><ProtectedLayout><UserDashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="*" element={<UnprotectedLayout><NotFound /></UnprotectedLayout>} />

      </Routes>
    </Router>
  );
}

export default App;
