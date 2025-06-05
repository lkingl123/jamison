import React from "react";

const DeleteSources = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
      {/* Title Section */}
      <p className="mb-6 text-gray-600">
        This method allows you to update the appearance of the widget as well as the rate limits.
      </p>

      {/* DELETE Method Section */}
      <h4 className="text-2xl font-semibold mb-4">Method</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <span className="inline-block text-white bg-red-500 px-3 py-1 rounded-md text-sm">
          DELETE
        </span>
        <span> /chatbots/{`{chatbot_id}`}/sources</span>
      </div>

      {/* Request Section */}
      <h4 className="text-2xl font-semibold mb-4">Request</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "source_ids": [
    "6475c498c27f69ee88869393",
    "6475c498c27f69ee88869394"
  ]
}`}</pre>
      </div>

      {/* Parameters Section */}
      <h4 className="text-2xl font-semibold mb-4">Parameters</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  chatbot_id: "The chatbot's ID"
  source_ids: "The list of source IDs"
}`}</pre>
      </div>

      {/* Response Section */}
      <h4 className="text-2xl font-semibold mb-4">Response</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": "Sources deleted successfully."
}`}</pre>
      </div>

      {/* Note Section */}
      <h4 className="text-2xl font-semibold mb-4">Note</h4>
      <p className="text-sm text-gray-600">
        The sources are deleted successfully from the chatbot, and you can check the status via the chatbot API.
      </p>
    </div>
  );
};

export default DeleteSources;
