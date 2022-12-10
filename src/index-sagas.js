import { all } from "redux-saga/effects";
import signupWatcher from "./signup/saga";

// 者里面关注的只有 watcher 这一个
export default function* IndexSaga() {
  console.log("index saga");
  yield all([signupWatcher()]);
}
