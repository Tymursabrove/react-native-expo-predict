import { AUTH_TOKEN } from "@src/controllers/Users/constants";
import Base64 from "@src/config/libs/base64";
const lscache = require("lscache");
import * as SecureStore from "expo-secure-store";

export const getAccessToken = async () => {
  // var accessToken64 = lscache.get(AUTH_TOKEN);
  var accessToken64 = await SecureStore.getItemAsync("AUTH_TOKEN");

  var accessToken = "";
  if (accessToken64) {
    accessToken = Base64.atob(accessToken64);
  }
  return accessToken;
};

export const getRawAccessToken = async () => {
  var accessToken64 = await SecureStore.getItemAsync("AUTH_TOKEN");
  // return accessToken64;
};

export const stringToBase64 = (text: string) => {
  try {
    return Base64.btoa(text);
  } catch (error) {
    return "";
  }
};

export const base64ToString = (text: string) => {
  try {
    return Base64.atob(text);
  } catch (error) {
    return "";
  }
};

export const apiKeyBase64 = () => {
  const API_KEY_ID = process.env.EXPO_PUBLIC_API_KEY_ID || "";
  const API_KEY_SECRET_PASSWORD =
    process.env.EXPO_PUBLIC_API_KEY_SECRET_PASSWORD || "";
  return `${stringToBase64(API_KEY_ID)}:${stringToBase64(
    API_KEY_SECRET_PASSWORD
  )}`;
};
