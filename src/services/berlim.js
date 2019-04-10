import axios from "axios";
import { flashErrorMessage } from "redux-flash";

import history from "../history";
import { getToken, logoutUser } from "./auth";

const berlim = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

berlim.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const setupResponseInterceptors = store => {
  berlim.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (!error.response) {
        // Network error
        store.dispatch(flashErrorMessage("Falha de conexão com o servidor"));
      } else {
        switch (error.response.status) {
          case 401:
            logoutUser();
            break;
          case 403:
            history.push("/");
            break;
          case 404:
            history.push("/not_found");
            break;
          default:
        }
      }

      return Promise.reject(error);
    }
  );
};

export default berlim;
