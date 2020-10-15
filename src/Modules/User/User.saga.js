import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';
import { UserActionConstants } from './User.actions';

const BASE_USER_URL = "https://api-nodejs-todolist.herokuapp.com/user/";

export function* attemptLogin({ payload }) {
  const response = yield call(fetch, `${BASE_USER_URL}register`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
      age: 20,
      name: "Generic Name"
    }),
  });

  const responseJson = yield response.json();
  console.log(responseJson);
}

export function* userSaga() {
  yield takeEvery(UserActionConstants.ATTEMPT_LOGIN, attemptLogin);
}