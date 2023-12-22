import axios from "axios";
import * as SecureStore from "expo-secure-store";
const lscache = require("lscache");
import { AUTH_TOKEN } from "@src/controllers/Users/constants";
import { Platform } from "react-native";

const authAxios = axios.create({
  // baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
  baseURL: "https://api.nexday.ai/",
  transformRequest: (data, headers): string => {
    return JSON.stringify(data);
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

authAxios.interceptors.request.use(
  async (config) => {
    //const authToken = lscache.get(AUTH_TOKEN)
    var authToken: any = "";
    if (Platform.OS !== 'web') {
      authToken = await SecureStore.getItemAsync(AUTH_TOKEN);
    } else authToken = lscache.get(AUTH_TOKEN);
    console.log("interrupt", authToken);
    config.headers["Authorization"] = "Bearer " + authToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const executeRequest = (
  method: string,
  pathname: string,
  data: any,
  options = { query: "" }
) => {
  const body = method === "get" || !data ? {} : { data };
  const reqObj = { method, url: pathname, params: options.query, ...body };
  return new Promise((resolve, reject) => {
    return authAxios
      .request(reqObj)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  get(pathname: string, options: any) {
    return executeRequest("get", pathname, null, options);
  },

  post(pathname: string, data: any, options: any) {
    return executeRequest("post", pathname, data, options);
  },

  put(pathname: string, data: any, options: any) {
    return executeRequest("put", pathname, data, options);
  },

  delete(pathname: string, data: any, options: any) {
    return executeRequest("delete", pathname, data, options);
  },

  all(promises: any) {
    return axios.all(promises);
  },
};
