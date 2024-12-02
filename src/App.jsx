import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';

import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Country from './components/Country';
import Faq from './components/Faq';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import UnprotectedLayout from './layouts/UnprotectedLayout.jsx';
import ProtectedLayout from './layouts/ProtectedLayout.jsx';
import ContactUs from './components/ContactUs.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* unprotected homepage */}
        {/* <Route path="/" element={<Homepage />} /> */}
        {/* protected homepage */}
        {/* <Route path="/" element={<ProtectedRoute allowedRoles={['admin', 'user']}><Homepage /></ProtectedRoute>} /> */}
        <Route path="/" element={<UnprotectedLayout><Homepage /></UnprotectedLayout>} />

        {/* inner pages */}
        <Route path="/aboutus" element={<UnprotectedLayout><AboutUs /></UnprotectedLayout>} />
        <Route path="/services" element={<UnprotectedLayout><Services /></UnprotectedLayout>} />
        <Route path="/blogs" element={<UnprotectedLayout><Blogs /></UnprotectedLayout>} />
        <Route path="/contactus" element={<UnprotectedLayout><ContactUs /></UnprotectedLayout>} />
        <Route path="/country" element={<UnprotectedLayout><Country /></UnprotectedLayout>} />
        <Route path="/login" element={<UnprotectedLayout><Login /></UnprotectedLayout>} />
        <Route path="/faq" element={<UnprotectedLayout><Faq /></UnprotectedLayout>} />

        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['admin', 'user']}><ProtectedLayout><Dashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin" element={<ProtectedRoute allowedRoles={['admin']}><ProtectedLayout><AdminDashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/dashboard/user" element={<ProtectedRoute allowedRoles={['user']}><ProtectedLayout><UserDashboard /></ProtectedLayout></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
