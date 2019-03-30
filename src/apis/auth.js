import decode from "jwt-decode";

const TOKEN_KEY = "@berlim-token";
const USER_TYPE_KEY = "@berlim-user-type";
const USER_ID_KEY = "@berlim-user-id";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const isAdmin = () => localStorage.getItem(USER_TYPE_KEY) === "Admin";
export const isAuthenticated = () => {
  const token = getToken();

  return !!token && !isTokenExpired(token);
};

export const loginUser = token => {
  const { type, sub } = decode(token);
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_TYPE_KEY, type);
  localStorage.setItem(USER_ID_KEY, sub);
};
export const logoutUser = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_TYPE_KEY);
  localStorage.removeItem(USER_ID_KEY);
};

const isTokenExpired = token => {
  try {
    const { exp } = decode(token);
    if (exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};
