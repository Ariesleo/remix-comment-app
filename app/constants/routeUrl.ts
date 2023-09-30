const baseUrl: string = process.env.API_URL || '';

interface AuthRoutes {
  login: string;
  register: string;
}

interface RouteUrls {
  auth: AuthRoutes;
  comment: string;
}

const ROUTE_URL: RouteUrls = {
  auth: {
    login: `${baseUrl}/api/v1/users/login`,
    register: `${baseUrl}/api/v1/users/register`,
  },
  comment: `${baseUrl}/api/v1/comments`,
};

export default ROUTE_URL;
