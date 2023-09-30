interface HttpMethod {
  GET: string;
  PUT: string;
  POST: string;
  HEAD: string;
  PATCH: string;
  DELETE: string;
  REQUEST: string;
  OPTIONS: string;
}

const HTTP_METHOD: HttpMethod = {
  GET: 'get',
  PUT: 'put',
  POST: 'post',
  HEAD: 'head',
  PATCH: 'patch',
  DELETE: 'delete',
  REQUEST: 'request',
  OPTIONS: 'options',
};

export default HTTP_METHOD;
