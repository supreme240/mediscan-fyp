import React, { useState, useEffect } from 'react';

function HealthDashboard() {
  const [healthMetrics, setHealthMetrics] = useState({
    bloodPressure: { systolic: 120, diastolic: 80 },
    heartRate: 72,
    temperature: 98.6,
    weight: 70,
    bloodSugar: 90
  });

  useEffect(() => {
    // Fetch health metrics from API
    // setHealthMetrics(data);
  }, []);

  return (
    <div className="flex-1 min-h-screen bg-slate-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Health Dashboard</h1>
          <p className="text-slate-600">Monitor your health metrics and trends</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Blood Pressure</h3>
            <p className="text-3xl font-bold text-red-600">
              {healthMetrics.bloodPressure.systolic}/{healthMetrics.bloodPressure.diastolic}
            </p>
            <p className="text-sm text-slate-600 mt-2">mmHg</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Heart Rate</h3>
            <p className="text-3xl font-bold text-green-600">{healthMetrics.heartRate}</p>
            <p className="text-sm text-slate-600 mt-2">bpm</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Temperature</h3>
            <p className="text-3xl font-bold text-orange-600">{healthMetrics.temperature}</p>
            <p className="text-sm text-slate-600 mt-2">°F</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Weight</h3>
            <p className="text-3xl font-bold text-blue-600">{healthMetrics.weight}</p>
            <p className="text-sm text-slate-600 mt-2">kg</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Blood Sugar</h3>
            <p className="text-3xl font-bold text-purple-600">{healthMetrics.bloodSugar}</p>
            <p className="text-sm text-slate-600 mt-2">mg/dL</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Health Records</h2>
          <div className="text-center text-slate-500 py-8">
            No recent health records found. Upload reports to track your health.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthDashboard;
