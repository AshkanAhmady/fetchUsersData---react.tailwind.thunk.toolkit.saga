import { all } from "redux-saga/effects";
import { watchFetchUser } from "./userSaga";

// all sagas import here
export function* rootSaga() {
  yield all([watchFetchUser()]);
}
