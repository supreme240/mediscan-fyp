import React, { useState } from 'react';

function UploadReport() {
  const [file, setFile] = useState(null);
  const [reportType, setReportType] = useState('');
  const [date, setDate] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !reportType || !date) {
      alert('Please fill in all fields');
      return;
    }

    setUploading(true);
    try {
      // Add upload logic here
      console.log('Uploading report:', { file, reportType, date });
      // await uploadReport(file, reportType, date);
      alert('Report uploaded successfully!');
      setFile(null);
      setReportType('');
      setDate('');
    } catch {
      alert('Error uploading report. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-slate-50 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Upload Medical Report</h1>
          <p className="text-slate-600">Upload your medical reports for AI analysis</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Report Type
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            >
              <option value="">Select report type</option>
              <option value="blood-test">Blood Test</option>
              <option value="x-ray">X-Ray</option>
              <option value="ct-scan">CT Scan</option>
              <option value="mri">MRI</option>
              <option value="prescription">Prescription</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Report Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Upload File
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                id="file-upload"
                required
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-green-600 font-semibold hover:text-green-700"
              >
                {file ? file.name : 'Click to upload or drag and drop'}
              </label>
              <p className="text-sm text-slate-500 mt-2">PDF, JPG, PNG (Max 10MB)</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading...' : 'Upload Report'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadReport;
