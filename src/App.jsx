import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './Components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Analysis from './pages/Analysis';
import Profile from './pages/Profile';
import Membership from './pages/Membership';
import CheckReports from './pages/CheckReports';
import DoctorReview from './pages/DoctorReview';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<PatientDashboard />} />
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/check-reports" element={<CheckReports />} />
              <Route path="/doctor-review" element={<DoctorReview />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
