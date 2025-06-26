"use client";

import { useState } from "react";
import Spinner from "../components/Spinner";

type SummarizedData = {
  Name: { "First Name": string; "Middle": string; "Last Name": string };
  DOB: string;
  Email: string;
  "Hospital name": string;
  "Admission date": { "Date of Admission": string; "Discharge Date": string };
  Insurance: Array<{
    "Primary Insurance"?: string;
    "Secondary Insurance"?: string;
    "Subscriber #": string;
    "Adjuster": string;
    "Address": string;
    "Phone #s": string;
  }>;
  "Emergency contact": { "Phone #s": string; };
  "Admitting diagnosis": string;
  Height: string;
  Weight: string;
  "PT notes": string;
  "OT notes": string;
  "History and physical": string;
  "Medication list": string;
};

export default function DashboardHome() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [summarizedData, setSummarizedData] = useState<SummarizedData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataReviewed, setIsDataReviewed] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setPdfFile(file);
    setIsLoading(true);
    console.log("📤 Uploading file:", file.name);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data: SummarizedData = await response.json();
      console.log("📥 Received structured JSON:", data);
      setSummarizedData(data);
    } catch (error) {
      console.error("❌ Error uploading file:", error);
      alert("There was an error processing the file. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDataReview = () => setIsDataReviewed(true);

  const handleSubmitData = async () => {
    console.log("✅ Final submitted data:", summarizedData);
    // Optional: Send to backend or Firestore
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-blue-600 mb-6">Healthcare Dashboard</h1>
      </div>

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Hospital Face Sheet PDF</h2>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          disabled={isLoading || isDataReviewed}
          className="w-full p-4 text-sm text-gray-700 border-2 border-dashed border-gray-300 rounded-md mb-4"
        />
        {isLoading && <Spinner label="Processing your file..." />}
        {!isLoading && summarizedData && !isDataReviewed && (
          <button
            onClick={handleDataReview}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Review Extracted Data
          </button>
        )}
      </div>

      {summarizedData && (
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Summarized Data</h2>
          <DisplaySummary data={summarizedData} />
        </div>
      )}

      {isDataReviewed && (
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Final Confirmation</h2>
          <button
            onClick={handleSubmitData}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            Submit Data
          </button>
        </div>
      )}
    </div>
  );
}

function DisplaySummary({ data }: { data: SummarizedData }) {
  return (
    <div className="space-y-6 text-sm text-gray-800">
      <section>
        <h3 className="text-lg font-semibold text-blue-600">Patient Info</h3>
        <p><strong>Name:</strong> {data.Name["First Name"]} {data.Name["Middle"]} {data.Name["Last Name"]}</p>
        <p><strong>DOB:</strong> {data.DOB}</p>
        <p><strong>Email:</strong> {data.Email}</p>
        <p><strong>Hospital:</strong> {data["Hospital name"]}</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-blue-600">Admission</h3>
        <p><strong>Admit Date:</strong> {data["Admission date"]["Date of Admission"]}</p>
        <p><strong>Discharge Date:</strong> {data["Admission date"]["Discharge Date"]}</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-blue-600">Emergency Contact</h3>
        <p><strong>Phone:</strong> {data["Emergency contact"]["Phone #s"]}</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-blue-600">Insurance</h3>
        {data.Insurance.map((ins, i) => (
          <div key={i} className="bg-gray-100 p-3 rounded-md mt-2">
            {ins["Primary Insurance"] && <p><strong>Primary:</strong> {ins["Primary Insurance"]}</p>}
            {ins["Secondary Insurance"] && <p><strong>Secondary:</strong> {ins["Secondary Insurance"]}</p>}
            <p><strong>Subscriber #:</strong> {ins["Subscriber #"]}</p>
            <p><strong>Adjuster:</strong> {ins.Adjuster}</p>
            <p><strong>Phone:</strong> {ins["Phone #s"]}</p>
            <p><strong>Address:</strong> {ins.Address}</p>
          </div>
        ))}
      </section>

      <section>
        <h3 className="text-lg font-semibold text-blue-600">Notes & Medical</h3>
        <p><strong>Diagnosis:</strong> {data["Admitting diagnosis"]}</p>
        <p><strong>Height:</strong> {data.Height}</p>
        <p><strong>Weight:</strong> {data.Weight}</p>
        <p><strong>PT Notes:</strong> {data["PT notes"]}</p>
        <p><strong>OT Notes:</strong> {data["OT notes"]}</p>
        <p><strong>History:</strong> {data["History and physical"]}</p>
        <p><strong>Medications:</strong> {data["Medication list"]}</p>
      </section>
    </div>
  );
}
