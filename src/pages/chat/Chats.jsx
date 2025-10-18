import React, { useEffect, useRef, useState } from "react";
import { useApi } from "../../Middleware/UseApi";
import { chat_user, private_chat } from "../../apis/apis";
import { useNavigate, useSearchParams } from "react-router-dom";

// import { ArrowLeft } from "lucide-react"; // optional icon (lucide-react)

function Chats({ socket }) {
  const [users, set_users] = useState([]);
  const [selectedChat, set_selectedChat] = useState(null);
  const {callApi} = useApi()
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Fetch all chat users
  useEffect(() => {
    fetchUsers();
     socket.connect();
  }, []);
  const messageRef = useRef();

  const fetchUsers = async () => {
    const res = await callApi(chat_user());
    if (res && res.data?.data) {
      const usersWithStatus = res.data.data.map((user) => ({
        ...user,
        online: false,
        typing: false,
      }));
      set_users(usersWithStatus);
      console.log(users);
    }
  };
  const [chat_messages, set_chat_messages] = useState([]);
  const fetch_chat = async () => {
    if (!searchParams.get("chat")) {
      return;
    }
    const res = await callApi(private_chat(searchParams.get("chat")));
    if (res) {
      set_chat_messages(res.data.data);
    }
  };
  const [userId, setuserId] = useState(null);
  // Handle selecting a user
  const handle_select_user = (chat) => {
    navigate(`?chat=${chat.chat_id}`);
    set_selectedChat(chat.chat_id);
    setuserId(chat.friend_id._id);
  };

  // Watch for query param change
  useEffect(() => {
    const chatId = searchParams.get("chat");
    set_selectedChat(chatId);
    fetch_chat();
  }, [searchParams]);

  // Back button (for mobile)
  const handleBack = () => {
    navigate(""); // remove ?chat= param
    set_selectedChat(null);
  };

  const handle_sent = () => {
    const data = {
      chat_id: selectedChat,
      user_id: userId,
      message: messageRef.current.value,
    };
    socket.emit("online_message_send", data);
     fetch_chat();
      messageRef.current.value=""
  };

  const [type, setType] = useState([]);

  useEffect(() => {
   
    const handleOnlineUpdate = (onlineIds) => {
      set_users((prevUsers) =>
        prevUsers.map((user) => ({
          ...user,
          online: onlineIds.includes(user.friend_id._id), // true if in onlineIds
        }))
      );
    };

    socket.on("online_users_typing", (data) => {
      setType((prev) => [...prev, data]);
      setTimeout(() => {
        setType([]);
      }, 2000);
    });
    socket.on("online_message_send", (data) => {
     set_chat_messages(prev=>[...prev,data.chat])
    });
    socket.on("online_users_update", handleOnlineUpdate);

    return () => {
      socket.off("online_users_update", handleOnlineUpdate);
      socket.off("online_users_typing");
      socket.off("online_message_send");
    };
  }, [socket]);

  const handleTyping = () => {
    socket.emit("online_users_typing", userId);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 h-[90vh] p-2">
      {/* USER LIST */}
      <div
        className={`w-full md:w-1/3 overflow-y-auto transition-all duration-300 ${
          selectedChat ? "hidden md:block" : "block"
        }`}
      >
        {users.length > 0 ? (
          users.map((val) => (
            <div
              key={val.chat_id}
              onClick={() => handle_select_user(val)}
              className={`w-full p-2 my-1 flex items-center gap-2 border rounded-lg cursor-pointer transition ${
                selectedChat === val.chat_id
                  ? "bg-green-200 border-green-400"
                  : "bg-white border-gray-200"
              }`}
            >
              <img
                width={45}
                className="rounded-full"
                src={val.friend_id.image}
                alt={val.friend_id.name}
                referrerPolicy="no-referrer"
              />
              <span className="font-semibold text-lg">
                {val.friend_id.name}
              </span>

              <span className="text-sm font-semibold text-green-900 bg-green-500 rotate-3 rounded-lg px-2">
                {val?.online ? "online" : "offline"}
              </span>
              {type.includes(val.friend_id._id) ? (
                <span className="text-sm font-extrabold text-white   bg-gray-500 rotate-7 rounded-lg px-2">
                  ...
                </span>
              ) : null}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">No chats available.</p>
        )}
      </div>

      {/* CHAT WINDOW */}
      <div
        className={`w-full md:w-2/3 bg-gray-100 rounded-lg h-[80vh] p-4 transition-all duration-300 ${
          selectedChat ? "block" : "hidden md:block"
        }`}
      >
        {selectedChat ? (
          <div>
            {/* Back button for mobile */}
            <button
              onClick={handleBack}
              className="md:hidden flex items-center gap-2 mb-4 text-blue-600 font-semibold"
            >
              {/* <ArrowLeft size={18} /> */}
              Back
            </button>

            {/* Example message area */}
            <div className="mt-6 bg-white rounded-lg shadow-inner p-3 h-[60vh] overflow-y-auto">
              {chat_messages.map((val) => (
                <div className={val.sender == userId ? "my-2 px-2 " :"my-2 px-2 flex justify-end"}>
                  <span className="border rounded-sm px-2 shadow-xl">
                    {val.content}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <input
                onChange={handleTyping}
                ref={messageRef}
                className="p-2 border rounded-xl"
                type="text"
                placeholder="enter message"
              />
              <button
                onClick={handle_sent}
                className="px-4 bg-green-700 text-white font-bold mx-2 py-2 rounded-lg"
              >
                send
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            Select a user to start chatting 💬
          </div>
        )}
      </div>
    </div>
  );
}

export default Chats;