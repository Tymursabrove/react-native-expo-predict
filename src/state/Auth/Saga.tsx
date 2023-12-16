import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, GET_TABLE_DATA, GET_USERNAME, DELETE_DATA } from "../Auth/Constants";
import authAPI from "@src/services/authAPI";
import { getTableData, getUserdataSuccess, getTabledataSuccess, loginError, loginSuccess, logoutSuccess } from "./Actions";
const lscache = require("lscache");

import * as SecureStore from "expo-secure-store";
import Base64 from "@src/config/libs/base64";
import { AUTH_TOKEN } from "@src/controllers/Users/constants";

const setSecureStore = async (title: string, value: any) => {
  await SecureStore.setItemAsync(title, value);
};

function* loginAction(action: any): Generator<any> {
  const { pathname, data } = action.payload;
  console.log("+++login request came in", pathname, data);
  try {
    const item: any = yield authAPI.post(pathname, data, "");
    setSecureStore(AUTH_TOKEN, item.accessToken);
    //lscache.set(AUTH_TOKEN, item.accessToken);
    console.log("+++axious sucess", item)
    //const item = { accessToken: "accessToken", refreshToken: "refreshToken" };
    yield put(loginSuccess(item));
    //const today = "2023-12-08";
    //yield put(getTableData(today));
  } catch (error: any) {
    yield put(loginError(error.message));
  }
}

function* getUsernameFromDatabase(action: any): Generator<any> {
  try {
    const userData: any = yield authAPI.get("/user", "");
    console.log("+++getting UserData success", userData);
    yield put(getUserdataSuccess(userData));
    let today = new Date();
    const standard = today.toISOString().split("T")[0];
    console.log("standard", standard);
    const tableData: any = yield authAPI.get("/instrument/day-details", { query: { date: "2023-12-08" } })
    console.log("+++tableData", tableData);
    yield put(getTabledataSuccess(tableData));
  } catch (error: any) {
    console.log("+++ getting userData failed", error);
  }
}

function* logOutAndDelData(action: any): Generator<any> {
  try {
    yield put(logoutSuccess());
  } catch (error: any) {

  }
}

export default function* authSaga() {
  yield all([
    takeLatest(LOGIN_REQUEST, loginAction),
    takeLatest(GET_USERNAME, getUsernameFromDatabase),
    takeLatest(DELETE_DATA, logOutAndDelData),
  ]);
}
