export const TOKEN_KEY = "@berlim-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const loginUser = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logoutUser = () => {
  localStorage.removeItem(TOKEN_KEY);
};
