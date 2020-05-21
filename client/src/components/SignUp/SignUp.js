import React, { useState } from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

//import { auth, createUserProfileDocument } from '../../Firebase/FirebaseUtil';
import { signUpStart } from "../../Redux/User/userAction";
import "./SignUp.scss";
import { connect } from "react-redux";

const SignUp = ({ signUpSaga }) => {
  const [userCredential, setUserCredential] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredential;
  const handleSubmit = async (event) => {
    event.preventDefault();

    

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpSaga({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredential({...userCredential, [name]: value });
  };
 
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUpSaga: (userCredential) => {
      dispatch(signUpStart(userCredential));
    },
  };
};
export default connect(null, mapDispatchToProps)(SignUp);
