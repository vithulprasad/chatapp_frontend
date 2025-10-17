import axiosInstance from "./interseptor";

export const login = (data) => {
  return axiosInstance.post(`/google_sign_in_login`, data)
};

export const authenticate = () => {
  return axiosInstance.get(`/authenticate`)
};


export const send_request = (data) => {
  return axiosInstance.post(`/send_request`, data)
};


export const accept_request = (data) => {
  return axiosInstance.post(`/accept_request`, data)
};

export const create_group = (data) => {
  return axiosInstance.post(`/create_group`, data)
};


export const list_user = (data) => {
  return axiosInstance.get(`/list_user`, data)
};

export const list_groups = (data) => {
  return axiosInstance.get(`/list_groups`, data)
};

export const list_user_groups = (data) => {
  return axiosInstance.get(`/list_user_groups`, data)
};

export const list_my_users = (data) => {
  return axiosInstance.get(`/list_my_users`, data)
};


export const chat_user = ()=>{
  return axiosInstance.get("/chat_users")
}

export  const private_chat = (id)=>{
  return axiosInstance.get(`/private_chat?id=${id}`)
}