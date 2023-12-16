import HttpRequest from "../../services/HttpRequest";
import { AUTH_TOKEN } from "./constants";
import Base64 from "@src/config/libs/base64";

export const Login = async (email: string, password: string) => {
  try {
    const response = await HttpRequest({
      method: "POST",
      url: "/users/sign_in",
      data: {
        email: email,
        password: password,
      },
    });
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      status: false,
      errors: error,
    };
  }
};

export const Register = async (email: string, password: string) => {
  try {
    const lscache = require("lscache");
    const response = await HttpRequest({
      method: "POST",
      url: "/users/sign_up",
      data: {
        email: email,
        password: password,
        repeat_password: password,
      },
    });
    const auth_token = Base64.btoa(response.data.access_token);
    lscache.set(AUTH_TOKEN, auth_token);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      status: false,
      errors: error,
    };
  }
};

export const userUpdate = async (email: string, profileData: any) => {
  try {
    const response = await HttpRequest({
      method: "PUT",
      url: "/users/" + email,
      data: {
        full_name: profileData.fullName,
        phone: profileData.phoneNumber,
        gender: profileData.gender,
        birth: profileData.birth,
      },
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      status: false,
      errors: error,
    };
  }
};
