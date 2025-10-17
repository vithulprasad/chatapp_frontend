import React, { useEffect, useState } from "react";
import { list_my_users, accept_request } from "../../apis/apis";
import { UseApi } from "../../Middleware/UseApi";

function Request({socket}) {
  const [my_request, set_my_request] = useState([]);
  const [friends_request, set_friends_request] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await UseApi(list_my_users());
      if (res?.data?.data) {
        const allUsers = res.data.data;

        // ✅ Proper filtering
        const sentRequests = allUsers.filter(
          (val) => val.request_from === null
        );
        const receivedRequests = allUsers.filter(
          (val) => val.request_from !== null
        );

        set_my_request(sentRequests);
        set_friends_request(receivedRequests);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handle_invite = async (id) => {
    const data = { id:id };
    await UseApi(accept_request(data), true);
    fetchUsers(); // refresh list after accepting
  };

  useEffect(() => {
    socket.disconnect()
    fetchUsers();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto py-4 space-y-8 p-2">
      {/* ===================== My Requests ===================== */}
      <div>
        <h2 className="text-lg font-semibold mb-3 text-blue-700">
          Requests Sent by Me
        </h2>
        {my_request.length > 0 ? (
          my_request.map((val) => (
            <div
              key={val._id}
              className="flex w-full border border-gray-200 rounded-lg shadow-sm justify-between items-center mb-2"
            >
              <div className="flex items-center gap-3 p-2">
                <img
                  src={val.friend_id.image}
                  alt={val.friend_id.name}
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="font-medium">{val.friend_id.name}</span>
              </div>
              <div className="mx-4">
                {
                    val.request ? <span>accepted</span> :<span>request send</span>

                }
               
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No requests sent yet.</p>
        )}
      </div>

      {/* ===================== Requests For Me ===================== */}
      <div>
        <h2 className="text-lg font-semibold mb-3 text-green-700">
          Requests For Me
        </h2>
        {friends_request.length > 0 ? (
          friends_request.map((val) => (
            <div
              key={val._id}
              className="flex w-full border border-gray-200 rounded-lg shadow-sm justify-between items-center mb-2"
            >
              <div className="flex items-center gap-3 p-2">
                <img
                  src={val.friend_id.image}
                  alt={val.friend_id.name}
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="font-medium">{val.friend_id.name}</span>
              </div>
              <div className="mx-4">
                {
                    val.request ? (
                        <span className="font-bold text-green-600">Accepted</span>
                    ): <button
                  onClick={() => handle_invite(val.chat_id)}
                  className="px-3 py-1 border rounded-md text-sm font-semibold text-green-600 hover:bg-green-100 transition"
                >
                  Accept 
                </button>
                }
               
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No friend requests yet.</p>
        )}
      </div>
    </div>
  );
}

export default Request;
