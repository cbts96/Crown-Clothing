import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";
import CustomButton from "../CustomButton/CustomButton";

import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../Redux/User/userAction";

const SignIn = ({ signInWithEmailSaga,signInWithGoogleSaga }) => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredential;
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailSaga(email, password);
  };
  const handleChange = (event) => {
    setUserCredential({
      ...userCredential,
      [event.target.name]: event.target.value,
    });
  };

  
  return (
    <div className="signin">
      <h1>I already have an account</h1>
      <div className="title">Sign In with your email and password</div>
      <form onSubmit={handleSubmit} className="form-signin">
        <FormInput
          type="email"
          handleChange={handleChange}
          value={email}
          name="email"
          required
          label="email"
        />

        <FormInput
          type="password"
          handleChange={handleChange}
          name="password"
          value={password}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit" name="submit">
            SIGN IN
          </CustomButton>
          <CustomButton
            type="button"
            name="submit"
            onClick={signInWithGoogleSaga}
            isGoogleSignin
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signInWithGoogleSaga: () => dispatch(googleSignInStart()),
  signInWithEmailSaga: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
