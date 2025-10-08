const baseURL = "http://localhost:5000";

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
apiClient.login = (payload) => apiClient("/users/login", "POST", payload);

apiClient.signup = (payload) => apiClient("/users/signup", "POST", payload);

apiClient.resetPassword = (token, payload) =>
  apiClient(`/users/resetPassword/${token}`, "PATCH", payload);

apiClient.forgotPassword = (payload) =>
  apiClient("/users/forgotPassword", "PATCH", payload);
