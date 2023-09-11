const backendHost = 'http://localhost:5000';
//const backendHost = 'http://192.168.1.45:5000';
const baseURL = 'api/v1';

export const UrlBank = {
  auth: {
    register: `${backendHost}/${baseURL}/auth/register`,
    login: `${backendHost}/${baseURL}/auth/login`,
  },

  user: {
    getUser: `${backendHost}/${baseURL}/user/`,
  },
};
