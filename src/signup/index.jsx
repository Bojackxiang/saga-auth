import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import signupRequest from "./actions";

const SignUp = (props) => {
  console.log({ props });
  return <div>SignUp</div>;
};

// Grab only the piece of state we need
const mapStateToProps = (state) => ({
  signUp: state.signUp,
});

// Connect our component to redux and attach the `signup` piece
// of state to our `props` in the component.  Also attach the
// `signupRequest` action to our `props` as well.
// 这边就是传入 signupRequest 这个 action creator 和 state
const connected = connect(mapStateToProps, { signupRequest })(SignUp);

const formed = reduxForm({
  form: "signUp",
})(connected);

export default formed;
