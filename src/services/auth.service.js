import axios from "axios";

// ✅ La URL viene del archivo .env
const API_URL = import.meta.env.VITE_API_URL;

const register = async (username, email, password, roles) => {
  return await axios.post(API_URL + "signup", {
    username,
    email,
    password,
    roles,
  });
};

const login = async (username, password) => {
  const response = await axios.post(API_URL + "signin", {
    username,
    password,
  });

  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
