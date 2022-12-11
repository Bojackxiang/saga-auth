import { takeLatest, call, put, all } from "redux-saga/effects";
import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from "./constants";
import mockApis from "../mock-apis";

// The url derived from our .env file

function signupApi(email, password) {
  return mockApis
    .mockLogin({ email, password })
    .then((json) => json)
    .catch((error) => {
      throw error;
    });
}

function* signupFlow(action) {
  try {
    const { email, password } = action;
    const response = yield call(signupApi, email, password); // 后面两个参数就是 pass in signUpAPI 的参数
    yield put({ type: SIGNUP_SUCCESS, response }); // put 是 dispatch 的部分，里面还有 type 和 payload
  } catch (error) {
    yield put({ type: SIGNUP_ERROR, error }); // put 是 dispatch 的部分，里面还有 type 和 payload
  }
}

// 这个 watch 就是舰艇 SIGNUP_REQUESTING 的意思
// 然后执行 signup flow
function* signupWatcher() {
  yield yield takeLatest(SIGNUP_REQUESTING, signupFlow);
}

export default signupWatcher;
