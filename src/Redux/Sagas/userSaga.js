import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUsersFailur, fetchUsersSuccess } from "../users/userAction";
import { FETCH_USERS_REQUEST } from "../users/usersType";

function* fetchUsers(action) {
  try {
    const response = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/users`)
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailur(error.message));
  }
}

export function* watchFetchUser() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}
