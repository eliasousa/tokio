import axios from "axios";
import { getToken } from "./auth";

const berlim = axios.create({
  baseURL: "http://localhost:4000/api"
});

berlim.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default berlim;
