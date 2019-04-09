import decode from "jwt-decode";

const TOKEN_KEY = "@berlim-token";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getCurrentId = () => {
  const { sub } = decode(getToken());
  return sub;
};

export const isAdmin = () => isUserType("Admin");
export const isCompany = () => isUserType("Company");
export const isAuthenticated = () => {
  const token = getToken();
  return !!token && !isTokenExpired(token);
};

export const loginUser = token => localStorage.setItem(TOKEN_KEY, token);
export const logoutUser = () => localStorage.removeItem(TOKEN_KEY);

const isTokenExpired = token => {
  try {
    const { exp } = decode(token);
    return exp < Date.now() / 1000;
  } catch (err) {
    return false;
  }
};

const isUserType = userType => {
  try {
    const { type } = decode(getToken());
    return type === userType;
  } catch (err) {
    return false;
  }
};
