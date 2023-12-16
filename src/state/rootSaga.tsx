import { all } from "redux-saga/effects";
import authSaga from "./Auth/Saga";

export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}
