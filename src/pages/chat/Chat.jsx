import React, { useState } from "react";
import Chats from "./Chats";
import Request from "./Request";
import UserGroups from "./UserGroups";

function Chat({socket}) {
  const [activeTab, setActiveTab] = useState("Chat");

  const tabs = ["Chat", "Requests", "Site Users"];

  return (
    <div className="max-w-screen-lg mx-auto ">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab) => (
          <li key={tab} className="mx-2 md:my-2">
            <button
              onClick={() => setActiveTab(tab)}
              className={`inline-block px-4 py-1 rounded-sm transition-colors duration-200 ${
                activeTab === tab
                  ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
                  : " dark:hover:bg-gray-800 dark:hover:text-gray-300 bg-gray-100"
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Optional: show content for the active tab */}
      <div className="">
        {activeTab === "Chat" && <Chats socket={socket}/>}
        {activeTab === "Requests" && <Request socket={socket}/>}
        {activeTab === "Site Users" && <UserGroups socket={socket}/>}
      </div>
    </div>
  );
}

export default Chat;
