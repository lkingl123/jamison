import React from "react";

const GettingStarted = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
      <p className="text-lg mb-6">
        Welcome to the official Chatbot API documentation. Below are the key details for properly using the APIs.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Base URL</h3>
      <p className="mb-6">
        The base URL for all API requests is:
      </p>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        https://api.chatbolt.ai/v1/
      </div>

      <h3 className="text-2xl font-semibold mb-4">Authentication</h3>
      <p className="mb-6">
        To use the API, authentication is required. Make sure to include the Authorization header with your API key in all requests. You can find it on the account page.
      </p>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        Authorization: YOUR_API_KEY
      </div>

      <h3 className="text-2xl font-semibold mb-4">Response Schema</h3>
      <p className="mb-6">
        All API responses are in JSON format. Successful requests return a <code className="bg-gray-100 p-1">200</code> response with
        <strong> result: "success"</strong> and the <strong>data</strong> object.
      </p>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        {` 
          { 
            "result": "success", 
            "data": { 
              "id": "64737cd6f6b1b988bbd3d23f8", 
              "name": "Chatbot" 
            } 
          }`}
      </div>

      <h3 className="text-2xl font-semibold mb-4">Error Handling</h3>
      <p className="mb-6">
        If there is an error in the API request, the response will include <code className="bg-gray-100 p-1">result: "error"</code> and the <strong>error</strong> message.
      </p>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        {` 
          { 
            "result": "error", 
            "error": "invalid_request", 
            "message": "The name provided is not valid." 
          }`}
      </div>

      <h3 className="text-2xl font-semibold mb-4">Error Codes</h3>
      <p className="mb-6">
        The following are some common error codes that you may encounter:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>INVALID_REQUEST:</strong> The required parameters are missing or invalid.
        </li>
        <li>
          <strong>AUTH_ERROR:</strong> Invalid API key or authentication failure.
        </li>
        <li>
          <strong>NOT_FOUND:</strong> The requested resource does not exist.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Basic Usage</h3>
      <p className="mb-6">
        Here is how to get started with the API:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li>Authenticate using your API key.</li>
        <li>Choose an API endpoint to call (e.g., Create a Chatbot).</li>
        <li>Make a POST, GET, PUT, or DELETE request depending on the operation.</li>
        <li>View the response and handle errors as necessary.</li>
      </ol>

      <h3 className="text-2xl font-semibold mb-4">Libraries & SDKs</h3>
      <p className="mb-6">
        There are also a number of libraries and SDKs available to help integrate with the Chatbot API:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>PHP (Coming soon)</li>
        <li>JavaScript (Coming soon)</li>
        <li>Node.js (Coming soon)</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Test this API on Postman</h3>
      <p className="mb-6">
        You can test the API in Postman by importing our pre-configured collection. Use the button below to get started:
      </p>
      <button className="bg-orange-400 text-white py-2 px-6 rounded-md">
        Test in Postman
      </button>
    </div>
  );
};

export default GettingStarted;
