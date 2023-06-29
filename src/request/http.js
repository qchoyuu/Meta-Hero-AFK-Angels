import axios from "axios";

const instance = axios.create({
  //  baseURL:'http://www.metaafkgirls.com',
  baseURL: "http://admin.metaafkgirls.com"
  // baseURL: "http://192.168.167.14:8080"
  // changeOrigin: true,
});

instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(err) {
    return Promise.reject(err);
  }
);

export function get(url, params) {
  return instance.get(url, {
    params
  });
}

export function post(url, data) {
  return instance.post(url, data);
}

export function del(url) {
  return instance.delete(url);
}

export function put(url, data) {
  return instance.put(url, data);
}
