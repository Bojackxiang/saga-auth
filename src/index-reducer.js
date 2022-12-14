import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import client from "./client/reducer";
import signup from "./signup/reducer";

const IndexReducer = combineReducers({
  form,
  client,
  signUp: signup,
});

export default IndexReducer;
