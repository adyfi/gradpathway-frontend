import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import UnprotectedLayout from './layouts/UnprotectedLayout.jsx';
import ProtectedLayout from './layouts/ProtectedLayout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* unprotected homepage */}
        {/* <Route path="/" element={<Homepage />} /> */}
        {/* protected homepage */}
        {/* <Route path="/" element={<ProtectedRoute allowedRoles={['admin', 'user']}><Homepage /></ProtectedRoute>} /> */}
        <Route path="/" element={<UnprotectedLayout><Homepage /></UnprotectedLayout>} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['admin', 'user']}><ProtectedLayout><Dashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin" element={<ProtectedRoute allowedRoles={['admin']}><ProtectedLayout><AdminDashboard /></ProtectedLayout></ProtectedRoute>} />
        <Route path="/dashboard/user" element={<ProtectedRoute allowedRoles={['user']}><ProtectedLayout><UserDashboard /></ProtectedLayout></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
