import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AdminProvider } from './contexts/AdminContext';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PatientLogin from './pages/Patient/PatientLogin';
import PatientSignup from './pages/Patient/PatientSignup';
import PatientDashboard from './pages/Patient/Dashboard';
import PatientHealthDashboard from './pages/Patient/HealthDashboard';
import PatientUploadReport from './pages/Patient/UploadReport';
import PatientViewReport from './pages/Patient/ViewReport';
import PatientChat from './pages/Patient/Chat';
import DoctorLogin from './pages/Doctor/DoctorLogin';
import DoctorSignup from './pages/Doctor/DoctorSignup';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminStatistics from './pages/Admin/Statistics';
import AdminUsers from './pages/Admin/Users';
import AdminVerifyDoctor from './pages/Admin/VerifyDoctor';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <AdminProvider>
        <Router>
          <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/patient/login" element={<PatientLogin />} />
                <Route path="/patient/signup" element={<PatientSignup />} />
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/patient/health-dashboard" element={<PatientHealthDashboard />} />
                <Route path="/patient/upload-report" element={<PatientUploadReport />} />
                <Route path="/patient/view-report" element={<PatientViewReport />} />
                <Route path="/patient/chat" element={<PatientChat />} />
                <Route path="/doctor/login" element={<DoctorLogin />} />
                <Route path="/doctor/signup" element={<DoctorSignup />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/statistics" element={<AdminStatistics />} />
                <Route path="/admin/users" element={<AdminUsers />} />
                <Route path="/admin/verify-doctor" element={<AdminVerifyDoctor />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AdminProvider>
    </AuthProvider>
  );
}

export default App;
