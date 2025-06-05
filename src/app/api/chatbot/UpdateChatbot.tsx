import React from "react";

const CustomSpan = () => (
  <span className="inline-block bg-customOrange text-white px-3 py-1 rounded-md text-xs font-semibold">
    REQUIRED
  </span>
);

const UpdateChatbot = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Update a Chatbot</h2>
      <p className="mb-6">Update the chatbot's name.</p>

      {/* PUT Method Section */}
      <h4 className="text-2xl font-semibold mb-4">Method</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <span className="inline-block text-white bg-purple-600 px-3 py-1 rounded-md text-sm">
          PUT
        </span>
        <span> /chatbots/{`:chatbot_id`}</span>
      </div>

      {/* Request Section */}
      <h3 className="text-xl font-semibold mb-4">Request</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "name": "Chatbot"
}`}</pre>
      </div>

      {/* Request Fields Description */}
      <h3 className="text-xl font-semibold mb-4">Name</h3>
      <table className="table-auto w-full mb-6 border-collapse">
        <thead>
          <tr className="border-b bg-gray-200">
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-6 py-4">chatbot_id</td>
            <td className="px-6 py-4">The chatbot's ID <CustomSpan /></td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="px-6 py-4">name</td>
            <td className="px-6 py-4">The chatbot's name.</td>
          </tr>
          <tr className="border-b">
            <td className="px-6 py-4">public</td>
            <td className="px-6 py-4">
              If the chatbot is public (required to use the widget).<br />
              <strong>Values:</strong> true, false (default)
            </td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="px-6 py-4">ai_tone</td>
            <td className="px-6 py-4">
              The chatbot's AI tone.<br />
              <strong>Values:</strong> casual, neutral (default), formal
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4">ai_knowledge</td>
            <td className="px-6 py-4">
              The chatbot's AI knowledge.<br />
              <strong>Values:</strong> source (default), source_then_internet, internet
            </td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="px-6 py-4">ai_prompt</td>
            <td className="px-6 py-4">The chatbot's AI custom prompt.</td>
          </tr>
        </tbody>
      </table>

      {/* Response Section */}
      <h3 className="text-xl font-semibold mb-4">Response</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": {
    "id": "647557df9c5ec4dc99b5b352",
    "name": "Chatbot",
    "public": false,
    "ai_tone": "casual",
    "ai_knowledge": "source",
    "ai_prompt": "",
    "files": 0,
    "links": 0,
    "texts": 0,
    "chars": 0,
    "chars_used": 0,
    "status": null,
    "created_at": "2023-05-30T01:56:47.847Z",
    "modified_at": "2023-05-30T01:56:47.847Z"
  }
}`}</pre>
      </div>

      {/* Response Fields Explanation */}
      <h3 className="text-xl font-semibold mb-4">Name</h3>
      <table className="table-auto w-full mb-6 border-collapse">
        <thead>
          <tr className="border-b bg-gray-200">
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-6 py-4">result</td>
            <td className="px-6 py-4">
              Indicates if the update was successful. Expected value:
              "success".
            </td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="px-6 py-4">data</td>
            <td className="px-6 py-4">
              Contains the updated chatbot details such as name, status, etc.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpdateChatbot;
