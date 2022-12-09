import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import signupRequest from "./actions";
import Messages from "../notifications/Messages";
import Errors from "../notifications/Errors";
import { Link } from "react-router";

const SignUp = (props) => {
  const {
    handleSubmit,
    signUp: { requesting, successful, messages, errors },
    signupRequest,
  } = props;
  console.log(props);

  const submit = (values) => {
    signupRequest(values);
  };

  return (
    <div>
      <div>
        <form className="widget-form" onSubmit={handleSubmit(submit)}>
          <h1>Sign up</h1>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            label="Email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            label="Password"
            component="input"
          />
          <button action="submit">SIGN UP</button>
        </form>
        <div className="auth-messages">
          {/* 
            These are all nothing more than helpers that will show up
            based on the UI states, not worth covering in depth.  Simply put
            if there are messages or errors, we show them
            */}
          {!requesting && !!errors.length && (
            <Errors message="Failure to sign up due to:" errors={errors} />
          )}
          {!requesting && !!messages.length && <Messages messages={messages} />}
          {!requesting && successful && (
            <div>
              Sign up Successful! <Link to="/login">Click here to Login »</Link>
            </div>
          )}
          {/* Redux Router's <Link> component for quick navigation of routes */}
          {!requesting && !successful && (
            <Link to="/login">Already a Widgeter? Login Here »</Link>
          )}
        </div>
      </div>
    </div>
  );
};

// Grab only the piece of state we need
const mapStateToProps = (state) => ({
  signUp: state.signUp,
});

// 这边就是传入 signupRequest 这个 action creator 和 state
const connected = connect(mapStateToProps, { signupRequest })(SignUp);

const formed = reduxForm({
  form: "SIGN_UP", // 这边的 key 一定要是 form，只有这样才能和 reducer-index 中的form 对应
})(connected);

export default formed;
