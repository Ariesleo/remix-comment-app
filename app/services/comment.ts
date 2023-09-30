import axios from 'axios';
import HTTP_METHOD from '~/constants/method';
import ROUTE_URL from '~/constants/routeUrl';

const addComment = async (data: any, token: string) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const config = {
    method: HTTP_METHOD.POST,
    url: ROUTE_URL.comment,
    data: data,
    headers: headers,
  };

  return await axios(config);
};

const fetchComments = async (token: string) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const config = {
    method: HTTP_METHOD.GET,
    url: ROUTE_URL.comment,
    headers: headers,
  };

  return await axios(config);
};

export { addComment, fetchComments };
