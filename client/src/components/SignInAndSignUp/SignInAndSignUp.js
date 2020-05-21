import React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./SignInAndSignUp.scss"

const SignInAndSignUp=()=>(
    <div className="signinandsignup">
        <SignIn />
        <SignUp/>
    </div>
)
export default SignInAndSignUp;