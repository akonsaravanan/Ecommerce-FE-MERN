import axios from "axios";

const devEnv = process.env.NODE_ENV === "development";
const { REACT_APP_DEV_API2, REACT_APP_PROD_API } = process.env;

console.log(devEnv, process.env.NODE_ENV);
const API = axios.create({ baseURL: `${devEnv ? REACT_APP_DEV_API2 : REACT_APP_PROD_API}` });
console.log(REACT_APP_DEV_API2, REACT_APP_PROD_API);

API.interceptors.request.use((req) => {
  if (localStorage.getItem("ecomm-user-profile")) {
    const token = JSON.parse(localStorage.getItem("ecomm-user-profile")).data?.token;
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  } else {
    return req;
  }
});

export const publicAPI = API;
export const userRequest = API;
