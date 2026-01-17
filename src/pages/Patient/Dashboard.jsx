import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    if (location.state?.welcomeMessage) {
      setWelcomeMessage(location.state.welcomeMessage);
      // Clear the message after 5 seconds
      const timer = setTimeout(() => {
        setWelcomeMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="flex-1 min-h-screen bg-slate-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {welcomeMessage && (
          <div className="mb-6 bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center justify-between animate-fade-in shadow-sm">
            <div className="flex items-center gap-3">
              <span className="bg-green-200 text-green-700 w-8 h-8 rounded-full flex items-center justify-center">
                <i className={`fa-solid ${welcomeMessage.includes('Back') ? 'fa-hand-spock' : 'fa-party-horn'}`}></i>
              </span>
              <span className="font-semibold">{welcomeMessage}</span>
            </div>
            <button onClick={() => setWelcomeMessage('')} className="text-green-600 hover:text-green-800">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Patient Dashboard</h1>
          <p className="text-slate-600">Manage your health records and consultations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/patient/health-dashboard"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border border-slate-200"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2">Health Dashboard</h2>
            <p className="text-slate-600">View your health metrics and trends</p>
          </Link>

          <Link
            to="/patient/upload-report"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border border-slate-200"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2">Upload Report</h2>
            <p className="text-slate-600">Upload medical reports for analysis</p>
          </Link>

          <Link
            to="/patient/view-report"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border border-slate-200"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2">View Reports</h2>
            <p className="text-slate-600">Access your medical reports</p>
          </Link>

          <Link
            to="/patient/chat"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border border-slate-200"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2">Chat</h2>
            <p className="text-slate-600">Connect with healthcare professionals</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
