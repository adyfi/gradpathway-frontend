import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/non-subcriber/Login.jsx';
import Homepage from './pages/non-subcriber/homepage/Homepage.jsx';

import AboutUs from './pages/non-subcriber/AboutUs.jsx';
import Services from './pages/non-subcriber/Services.jsx';
import Blogs from './pages/non-subcriber/Blogs.jsx';
import Country from './pages/non-subcriber/Country.jsx';
// import Faq from './pages/non-subcriber/Faq.jsx';
import UserDashboard from './pages/non-subcriber/UserDashboard.jsx';
import ProtectedRoute from './routes/ProtectedRoute';
import UnprotectedLayout from './layouts/UnprotectedLayout.jsx';
import ProtectedLayout from './layouts/ProtectedLayout.jsx';
import ContactUs from './pages/non-subcriber/ContactUs.jsx';
import AssesmentForm from './pages/non-subcriber/assessment/AssesmentForm.jsx';
import Recruiter from './pages/non-subcriber/Recruiter.jsx';
import { Mentor } from './pages/non-subcriber/Mentor.jsx';
import MentorRegistration from './pages/non-subcriber/MentorRegistration.jsx';
import { NotFound } from './pages/non-subcriber/NotFound.jsx';
import BlogPost from './pages/non-subcriber/BlogsPost.jsx';
import SuccessStories from './pages/non-subcriber/SuccessStories.jsx';
import ROICalculator from './pages/non-subcriber/roi/ROICalculator.jsx';
import LaunchingSoon from './pages/non-subcriber/LaunchingSoon.jsx';
import CountryHome from './pages/non-subcriber/Country.jsx';
import CountryHeader from './layouts/CountryHeader.jsx';
import CountryPageLayout from './layouts/CountryPageLayout.jsx';
import ServicesBundle from './pages/non-subcriber/ServicesBundle.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Dashboard from './pages/subscriber/Dashboard.jsx';
import CvCLetterLinkedIn from './pages/subscriber/CvCLetterLinkedIn.jsx';
import ConsultingCalls from './pages/subscriber/ConsultingCalls.jsx';
import InterviewQuestion from './pages/subscriber/InterviewQuestion.jsx';
import AtsFriendlyResumes from './pages/subscriber/AtsFriendlyResumes.jsx';
import JobSubscription from './pages/subscriber/JobSubscription.jsx';
import SubscriptionBundle from './pages/subscriber/SubscriptionBundle.jsx';
import Faq from './pages/subscriber/Faq.jsx';
import ContactUsDashboard from './pages/subscriber/ContactUsDashboard.jsx';
import ProfileDashboard from './pages/subscriber/ProfileDashboard.jsx';
import MyAccountDashboard from './pages/subscriber/MyAccountDashboard.jsx';
import ChangePassword from './pages/subscriber/ChangePassword.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* unprotected homepage */}
        {/* <Route path="/" element={<Homepage />} /> */}
        {/* protected homepage */}
        {/* <Route path="/" element={<ProtectedRoute allowedRoles={['admin', 'user']}><Homepage /></ProtectedRoute>} /> */}
        <Route path="/" element={<CountryPageLayout><CountryHome /></CountryPageLayout>} />
        <Route path="/launching" element={<CountryPageLayout><LaunchingSoon /></CountryPageLayout>} />
        <Route path="/home" element={<UnprotectedLayout><Homepage /></UnprotectedLayout>} />
        <Route path="/about" element={<UnprotectedLayout><AboutUs /></UnprotectedLayout>} />
        <Route path="/services" element={<UnprotectedLayout><Services /></UnprotectedLayout>} />
        <Route path="/services/bundles" element={<UnprotectedLayout><ServicesBundle /></UnprotectedLayout>} />
        <Route path="/blogs" element={<UnprotectedLayout><Blogs /></UnprotectedLayout>} />
        <Route path="/blogs/:slug" element={<UnprotectedLayout><BlogPost /></UnprotectedLayout>} />
        <Route path="/contact" element={<UnprotectedLayout><ContactUs /></UnprotectedLayout>} />
        <Route path="/login" element={<UnprotectedLayout><Login /></UnprotectedLayout>} />
        <Route path="/success-stories" element={<UnprotectedLayout><SuccessStories /></UnprotectedLayout>} />
        {/* <Route path="/faq" element={<UnprotectedLayout><Faq /></UnprotectedLayout>} /> */}
        <Route path="/roi" element={<UnprotectedLayout><ROICalculator /></UnprotectedLayout>} />
        <Route path="/assesment" element={<UnprotectedLayout><AssesmentForm /></UnprotectedLayout>} />
        <Route path="/mentor" element={<UnprotectedLayout><Mentor /></UnprotectedLayout>} />
        <Route path="/mentor-registration" element={<UnprotectedLayout><MentorRegistration /></UnprotectedLayout>} />
        <Route path="/recruiter" element={<UnprotectedLayout><Recruiter /></UnprotectedLayout>} />
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><Dashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/cvcletterlinkedIn" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><CvCLetterLinkedIn /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/ConsultingCalls" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><ConsultingCalls /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/interview-questions" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><InterviewQuestion /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/ats-friendly-resumes" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><AtsFriendlyResumes /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/job-subscription" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><JobSubscription /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/subscription-bundle" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><SubscriptionBundle /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/faq" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><Faq /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/contactus-dashboard" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><ContactUsDashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/profile-dashboard" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><ProfileDashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/myaccount-dashboard" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><MyAccountDashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/change-password" element={<ProtectedRoute allowedRoles={['admin','user']}><ProtectedLayout><MyAccountDashboard /></ProtectedLayout></ProtectedRoute>} />
        {/* <Route path="/dashboard/admin" element={<ProtectedRoute allowedRoles={['admin']}><ProtectedLayout><AdminDashboard /></ProtectedLayout></ProtectedRoute>} /> */}
        <Route path="/dashboard/user" element={<ProtectedRoute allowedRoles={['user']}><ProtectedLayout><UserDashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="*" element={<UnprotectedLayout><NotFound /></UnprotectedLayout>} />

      </Routes>
    </Router>
  );
}

export default App;
