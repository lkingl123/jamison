import React from "react";

const CustomSpan = () => (
  <span className="inline-block bg-customOrange text-white px-3 py-1 rounded-md text-xs font-semibold">
    REQUIRED
  </span>
);

const DeleteChatbot = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Delete a Chatbot</h2>
      <p className="mb-6">
        Delete a chatbot and all associated chats and sources. This action is
        permanent.
      </p>

      {/* DELETE Method Section */}
      <h4 className="text-2xl font-semibold mb-4">Method</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <span className="inline-block text-white bg-red-600 px-3 py-1 rounded-md text-sm">
          DELETE
        </span>
        <span> /chatbots/{`:chatbot_id`}</span>
      </div>

      {/* Request Section */}
      <h3 className="text-xl font-semibold mb-4">Request</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "chatbot_id": "your-chatbot-id"
}`}</pre>
      </div>

      {/* Name and Description for Request */}
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
        </tbody>
      </table>

      {/* Response Section */}
      <h3 className="text-xl font-semibold mb-4">Response</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": "Chatbot deleted successfully."
}`}</pre>
      </div>

      {/* Fields Explanation for Response */}
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
              Indicates if the deletion was successful. Expected value:
              "success".
            </td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="px-6 py-4">data</td>
            <td className="px-6 py-4">
              A confirmation message such as "Chatbot deleted successfully."
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteChatbot;
