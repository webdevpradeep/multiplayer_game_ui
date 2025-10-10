import { getCookie } from "./cookies";

const baseURL = "http://192.168.1.150:5000";

export const apiClient = async (url, method, body = null, tokenName = "") => {
  const accessToken = getCookie("access_token");

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  if (tokenName) {
    defaultHeaders["Authorization"] = `Bearer ${getCookie(tokenName)}`;
  } else {
    defaultHeaders["Authorization"] = `Bearer ${accessToken}`;
  }

  let config;

  if (!body || body === null) {
    config = {
      method: method,
      headers: {
        ...defaultHeaders,
      },
    };
  } else {
    config = {
      method: method,
      headers: {
        ...defaultHeaders,
      },
      body: JSON.stringify(body),
    };
  }

  const response = await fetch(`${baseURL}${url}`, config);
  return await response.json();
};

// user authentication ...............................
// Auth APIs
apiClient.login = async (payload) =>
  await apiClient("/users/login", "POST", payload);

apiClient.signup = async (payload) =>
  await apiClient("/users/signup", "POST", payload);

apiClient.resetPassword = async (token, payload) =>
  await apiClient(`/users/resetPassword/${token}`, "PATCH", payload);

apiClient.forgotPassword = async (payload) =>
  await apiClient("/users/forgotPassword", "PATCH", payload);

apiClient.listGames = async () => await apiClient("/games", "GET");

// apiClient.game = (payload) => apiClient("/users/games", "POST", payload);
