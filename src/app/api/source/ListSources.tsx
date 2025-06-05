import React from "react";

const ListSources = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Request</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "chatbot_id": "your-chatbot-id",
  "type": "link", // Values: link, file, text
  "status": "trained" // Values: trained, training, error, pending
}`}</pre>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Parameters</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  chatbot_id: "The chatbot's ID",
  type: "The source's type",
  status: "The source's status"
}`}</pre>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Response</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": [
    {
      "id": "647557df9c5ec4dc99b5b352",
      "type": "link",
      "content": "https://example.com",
      "status": "training",
      "error": null,
      "created_at": "2023-05-30T01:56:47.847Z",
      "modified_at": "2023-05-30T01:56:47.847Z"
    }
  ]
}`}</pre>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Response Parameters</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  id: "The source's ID",
  type: "The source's type",
  content: "The source's content",
  status: "The source's status",
  error: "The source's error (if status: error)",
  chars: "The source's content number of characters"
}`}</pre>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Note</h3>
      <p className="text-sm text-gray-600">
        Sources are listed asynchronously and their status can be checked as they are processed.
      </p>
    </div>
  );
};

export default ListSources;
