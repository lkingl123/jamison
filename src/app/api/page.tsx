"use client";

import { useState } from "react";
import CreateChatbot from "./chatbot/CreateChatbot";
import ListChatbots from "./chatbot/ListChatbots";
import GetChatbot from "./chatbot/GetChatbot";
import UpdateChatbot from "./chatbot/UpdateChatbot";
import DeleteChatbot from "./chatbot/DeleteChatbot";
import GettingStarted from "./chatbot/GettingStarted";
import AddSources from "./source/AddSources";
import ListSources from "./source/ListSources";
import RetrainSources from "./source/RetrainSources";
import DeleteSources from "./source/DeleteSources";
import CreateChat from "./chat/CreateChat";
import ListChats from "./chat/ListChats";
import GetChat from "./chat/GetChat";
import DeleteChat from "./chat/DeleteChat";
import MessageChat from "./chat/MessageChat"; // Added MessageChat

const Page = () => {
  const [selectedAction, setSelectedAction] = useState("gettingStarted");

  const handleSelect = (section: string) => {
    setSelectedAction(section);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-100 p-4 space-y-6">
        <h2 className="text-2xl font-semibold mt-4">Chatbot API</h2> {/* Reduced margin */}
        
        {/* Getting Started */}
        <button
          onClick={() => handleSelect("gettingStarted")}
          className={`w-full text-left p-2 rounded-md transition-colors duration-300 ${
            selectedAction === "gettingStarted"
              ? "bg-orange-500 text-white"
              : "hover:bg-orange-400 active:bg-orange-600"
          }`}
        >
          Getting Started
        </button>

        {/* Chatbot Section */}
        <h3 className="font-semibold text-xl mt-6">Chatbot</h3>
        <button
          onClick={() => handleSelect("createChatbot")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "createChatbot"
              ? "bg-green-500 text-white"
              : "hover:bg-green-400 active:bg-green-600"
          }`}
        >
          Create a Chatbot
          <span className="ml-4 text-white bg-green-600 px-2 py-1 rounded-md">
            POST
          </span>
        </button>
        <button
          onClick={() => handleSelect("listChatbots")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "listChatbots"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-400 active:bg-blue-600"
          }`}
        >
          List Chatbots
          <span className="ml-4 text-white bg-blue-600 px-2 py-1 rounded-md">
            GET
          </span>
        </button>
        <button
          onClick={() => handleSelect("getChatbot")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "getChatbot"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-400 active:bg-blue-600"
          }`}
        >
          Get a Chatbot
          <span className="ml-4 text-white bg-blue-600 px-2 py-1 rounded-md">
            GET
          </span>
        </button>
        <button
          onClick={() => handleSelect("updateChatbot")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "updateChatbot"
              ? "bg-purple-500 text-white"
              : "hover:bg-purple-400 active:bg-purple-600"
          }`}
        >
          Update a Chatbot
          <span className="ml-4 text-white bg-purple-600 px-2 py-1 rounded-md">
            PUT
          </span>
        </button>
        <button
          onClick={() => handleSelect("deleteChatbot")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "deleteChatbot"
              ? "bg-red-500 text-white"
              : "hover:bg-red-400 active:bg-red-600"
          }`}
        >
          Delete a Chatbot
          <span className="ml-4 text-white bg-red-600 px-2 py-1 rounded-md">
            DELETE
          </span>
        </button>

        {/* Source Section */}
        <h3 className="font-semibold text-xl mt-6">Source</h3>
        <button
          onClick={() => handleSelect("addSources")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "addSources"
              ? "bg-green-500 text-white"
              : "hover:bg-green-400 active:bg-green-600"
          }`}
        >
          Add Sources
          <span className="ml-4 text-white bg-green-600 px-2 py-1 rounded-md">
            POST
          </span>
        </button>
        <button
          onClick={() => handleSelect("listSources")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "listSources"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-400 active:bg-blue-600"
          }`}
        >
          List Sources
          <span className="ml-4 text-white bg-blue-600 px-2 py-1 rounded-md">
            GET
          </span>
        </button>
        <button
          onClick={() => handleSelect("retrainSources")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "retrainSources"
              ? "bg-purple-500 text-white"
              : "hover:bg-purple-400 active:bg-purple-600"
          }`}
        >
          Retrain Sources
          <span className="ml-4 text-white bg-purple-600 px-2 py-1 rounded-md">
            PUT
          </span>
        </button>
        <button
          onClick={() => handleSelect("deleteSources")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "deleteSources"
              ? "bg-red-500 text-white"
              : "hover:bg-red-400 active:bg-red-600"
          }`}
        >
          Delete Sources
          <span className="ml-4 text-white bg-red-600 px-2 py-1 rounded-md">
            DELETE
          </span>
        </button>

        {/* Chat Section */}
        <h3 className="font-semibold text-xl mt-6">Chat</h3>
        <button
          onClick={() => handleSelect("createChat")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "createChat"
              ? "bg-green-500 text-white"
              : "hover:bg-green-400 active:bg-green-600"
          }`}
        >
          Create a Chat
          <span className="ml-4 text-white bg-green-600 px-2 py-1 rounded-md">
            POST
          </span>
        </button>
        <button
          onClick={() => handleSelect("listChats")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "listChats"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-400 active:bg-blue-600"
          }`}
        >
          List Chats
          <span className="ml-4 text-white bg-blue-600 px-2 py-1 rounded-md">
            GET
          </span>
        </button>
        <button
          onClick={() => handleSelect("getChat")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "getChat"
              ? "bg-indigo-500 text-white"
              : "hover:bg-indigo-400 active:bg-indigo-600"
          }`}
        >
          Get a Chat
          <span className="ml-4 text-white bg-indigo-600 px-2 py-1 rounded-md">
            GET
          </span>
        </button>
        <button
          onClick={() => handleSelect("deleteChat")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "deleteChat"
              ? "bg-red-500 text-white"
              : "hover:bg-red-400 active:bg-red-600"
          }`}
        >
          Delete a Chat
          <span className="ml-4 text-white bg-red-600 px-2 py-1 rounded-md">
            DELETE
          </span>
        </button>
        <button
          onClick={() => handleSelect("messageChat")}
          className={`w-full text-left p-2 mb-2 rounded-md transition-colors duration-300 ${
            selectedAction === "messageChat"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-400 active:bg-blue-600"
          }`}
        >
          Message with a Chat
          <span className="ml-4 text-white bg-blue-600 px-2 py-1 rounded-md">
            POST
          </span>
        </button>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-3/4 p-6">
        <h2 className="text-3xl font-bold mb-6">
          {selectedAction === "gettingStarted"
            ? "Getting Started"
            : selectedAction === "createChatbot"
            ? "Create a Chatbot"
            : selectedAction === "listChatbots"
            ? "List Chatbots"
            : selectedAction === "getChatbot"
            ? "Get a Chatbot"
            : selectedAction === "updateChatbot"
            ? "Update a Chatbot"
            : selectedAction === "deleteChatbot"
            ? "Delete a Chatbot"
            : selectedAction === "addSources"
            ? "Add Sources"
            : selectedAction === "listSources"
            ? "List Sources"
            : selectedAction === "retrainSources"
            ? "Retrain Sources"
            : selectedAction === "deleteSources"
            ? "Delete Sources"
            : selectedAction === "createChat"
            ? "Create a Chat"
            : selectedAction === "listChats"
            ? "List Chats"
            : selectedAction === "getChat"
            ? "Get a Chat"
            : selectedAction === "deleteChat"
            ? "Delete a Chat"
            : selectedAction === "messageChat"
            ? "Message with a Chat"
            : ""}
        </h2>
        {/* Render the selected action component */}
        {selectedAction === "gettingStarted" && <GettingStarted />}
        {selectedAction === "createChatbot" && <CreateChatbot />}
        {selectedAction === "listChatbots" && <ListChatbots />}
        {selectedAction === "getChatbot" && <GetChatbot />}
        {selectedAction === "updateChatbot" && <UpdateChatbot />}
        {selectedAction === "deleteChatbot" && <DeleteChatbot />}
        {selectedAction === "addSources" && <AddSources />}
        {selectedAction === "listSources" && <ListSources />}
        {selectedAction === "retrainSources" && <RetrainSources />}
        {selectedAction === "deleteSources" && <DeleteSources />}
        {selectedAction === "createChat" && <CreateChat />}
        {selectedAction === "listChats" && <ListChats />}
        {selectedAction === "getChat" && <GetChat />}
        {selectedAction === "deleteChat" && <DeleteChat />}
        {selectedAction === "messageChat" && <MessageChat />}
      </div> 
    </div>
  );
};

export default Page;
