"use client";

import { useState } from 'react';

interface ExtractedData {
  name: string;
  dob: string;
  insurance: string;
}

export default function DashboardHome() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataReviewed, setIsDataReviewed] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setPdfFile(file);
    
    // Trigger backend file upload and parsing
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload-pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setExtractedData(data);

      setIsLoading(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      setIsLoading(false);
    }
  };

  const handleDataReview = () => {
    setIsDataReviewed(true);
  };

  const handleSubmitData = async () => {
    console.log("Data submitted:", extractedData);
    // Add your API call here to save the data
  };

  return (
    <div className="container mx-auto p-8 space-y-6">
      {/* <h1 className="text-3xl font-bold text-center text-gray-800">Healthcare Dashboard</h1> */}

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Hospital Face Sheet PDF</h2>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          disabled={isLoading || isDataReviewed}
          className="w-full text-sm text-gray-700 p-3 border border-gray-300 rounded-md mb-4"
        />
        {isLoading && <p className="text-center text-gray-500">Processing your file... Please wait.</p>}
      </div>

      {/* Extracted Data Review */}
      {extractedData && !isDataReviewed && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Review Extracted Data</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600">Patient Name</label>
              <input
                type="text"
                value={extractedData.name}
                onChange={(e) => setExtractedData({ ...extractedData, name: e.target.value })}
                className="w-full text-sm text-gray-700 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-600">Date of Birth</label>
              <input
                type="text"
                value={extractedData.dob}
                onChange={(e) => setExtractedData({ ...extractedData, dob: e.target.value })}
                className="w-full text-sm text-gray-700 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-600">Insurance Number</label>
              <input
                type="text"
                value={extractedData.insurance}
                onChange={(e) => setExtractedData({ ...extractedData, insurance: e.target.value })}
                className="w-full text-sm text-gray-700 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <button
              onClick={handleDataReview}
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            >
              Confirm & Review
            </button>
          </div>
        </div>
      )}

      {/* Final Confirmation Section */}
      {isDataReviewed && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Final Confirmation</h2>
          <div className="space-y-4">
            <p><strong>Patient Name:</strong> {extractedData?.name ?? 'N/A'}</p>
            <p><strong>Date of Birth:</strong> {extractedData?.dob ?? 'N/A'}</p>
            <p><strong>Insurance Number:</strong> {extractedData?.insurance ?? 'N/A'}</p>
            <button
              onClick={handleSubmitData}
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
            >
              Submit Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
