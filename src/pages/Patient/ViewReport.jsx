import React, { useState, useEffect } from 'react';

function ViewReport() {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Fetch reports from API
    // setReports(data);
  }, [filter]);

  return (
    <div className="flex-1 min-h-screen bg-slate-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">My Reports</h1>
          <p className="text-slate-600">View and manage your medical reports</p>
        </div>

        <div className="mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-slate-700 border border-slate-300'
              }`}
            >
              All Reports
            </button>
            <button
              onClick={() => setFilter('blood-test')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === 'blood-test'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-slate-700 border border-slate-300'
              }`}
            >
              Blood Tests
            </button>
            <button
              onClick={() => setFilter('x-ray')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === 'x-ray'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-slate-700 border border-slate-300'
              }`}
            >
              X-Rays
            </button>
            <button
              onClick={() => setFilter('prescription')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === 'prescription'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-slate-700 border border-slate-300'
              }`}
            >
              Prescriptions
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.length === 0 ? (
            <div className="col-span-full text-center text-slate-500 py-12">
              <p className="mb-4">No reports found</p>
              <p className="text-sm">Upload your first report to get started</p>
            </div>
          ) : (
            reports.map((report) => (
              <div
                key={report.id}
                className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedReport(report)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{report.type}</h3>
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {report.status}
                  </span>
                </div>
                <p className="text-slate-600 mb-2">Date: {report.date}</p>
                <p className="text-slate-600 mb-2">Hospital: {report.hospital || 'N/A'}</p>
                {report.aiAnalysis && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-sm font-semibold text-slate-700 mb-1">AI Analysis:</p>
                    <p className="text-sm text-slate-600 line-clamp-2">{report.aiAnalysis}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {selectedReport && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">{selectedReport.type}</h2>
                  <button
                    onClick={() => setSelectedReport(null)}
                    className="text-slate-500 hover:text-slate-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Date:</p>
                    <p className="text-slate-600">{selectedReport.date}</p>
                  </div>
                  {selectedReport.hospital && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700">Hospital:</p>
                      <p className="text-slate-600">{selectedReport.hospital}</p>
                    </div>
                  )}
                  {selectedReport.aiAnalysis && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700">AI Analysis:</p>
                      <p className="text-slate-600">{selectedReport.aiAnalysis}</p>
                    </div>
                  )}
                  {selectedReport.fileUrl && (
                    <div>
                      <a
                        href={selectedReport.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-semibold"
                      >
                        View Full Report →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewReport;
