import axios from 'axios';
import HTTP_METHOD from '~/constants/method';
import ROUTE_URL from '~/constants/routeUrl';

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}
export interface LoginData {
  email: string;
  password: string;
}

const registerUser = async (data: RegisterData) => {
  const headers = {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  };

  const config = {
    method: HTTP_METHOD.POST,
    url: ROUTE_URL.auth.register,
    data: data,
    headers: headers,
  };

  return await axios(config);
};

const loginUser = async (data: LoginData) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const config = {
    method: HTTP_METHOD.POST,
    url: ROUTE_URL.auth.login,
    data: data,
    headers: headers,
  };

  return await axios(config);
};

export { registerUser, loginUser };
