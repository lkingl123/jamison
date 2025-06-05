"use client";

import React from "react";

const ListChats = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
      {/* Title Section */}
      <h3 className="text-2xl font-semibold mb-4">List Chats</h3>
      <p className="mb-6 text-gray-600">Retrieve a list of chats.</p>

      {/* GET Method Section */}
      <h4 className="text-2xl font-semibold mb-4">Method</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <span className="inline-block text-white bg-blue-600 px-3 py-1 rounded-md text-sm">
          GET
        </span>{" "}
        <span>/chatbots/{`{chatbot_id}`}/chats</span>
      </div>

      {/* Request Section */}
      <h4 className="text-2xl font-semibold mb-4">Request</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "chatbot_id": "The chatbot's ID",
  "start_date": "YYYY-MM-DD",
  "end_date": "YYYY-MM-DD",
  "client": "api, widget, internal",
  "search": "search query filter"
}`}</pre>
      </div>

      {/* Response Section */}
      <h4 className="text-2xl font-semibold mb-4">Response</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": [
    {
      "id": "6475c498c27f69ee88869393",
      "client": "internal",
      "title": "How does the website registration process work?",
      "messages": 4,
      "created_at": "2023-05-30T09:40:40.544Z",
      "modified_at": "2023-05-30T09:40:40.544Z"
    },
    {
      "id": "6475c498c27f69ee88869394",
      "client": "widget",
      "title": "What are the pricing plans available and their features?",
      "messages": 5,
      "created_at": "2023-05-30T09:40:40.544Z",
      "modified_at": "2023-05-30T09:40:40.544Z"
    }
  ]
}`}</pre>
      </div>

      {/* Name Section */}
      <h4 className="text-2xl font-semibold mb-4">Name</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  id: "The chat's ID",
  client: "The chat's client filter",
  title: "The chat's title (the first user's prompt)",
  messages: "The chat's number of messages"
}`}</pre>
      </div>
    </div>
  );
};

export default ListChats;
