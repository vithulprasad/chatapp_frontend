import React, { useEffect, useState } from "react";
import { list_user, send_request } from "../../apis/apis";
import { UseApi } from "../../Middleware/UseApi";

function UserGroups({socket}) {
  const [users, set_users] = useState([]);

  const fetchUsers = async () => {
    try {
       
      const res = await UseApi(list_user());
      if (res?.data?.data) {
        console.log(res);
        set_users(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handle_invite = async(id)=>{
    let data = {
        id:id
    }
     await UseApi(send_request(data),true)
  }

  useEffect(() => {
   
    fetchUsers();
     socket.disconnect()
  }, []);

  return (
    <div className="">
    

      <div className="mt-4 space-y-2 mx-2">
        {users.length > 0 ? (
          users.map((val) => (
            <div
              key={val._id}
              className="flex w-full border  border-gray-200 rounded shadow-sm justify-between items-center"
            >
              <div className="flex items-center gap-3 p-2 ">
                <img
                  src={val.image}
                  alt={val.name}
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />

                <span className="font-medium">{val.name}</span>
              </div>
              <div className="mx-4">
                 <button onClick={()=>{handle_invite(val._id)} } className="px-3 border rounded-md font-bold shadow-xl cursor-pointer">+ Invite</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default UserGroups;
