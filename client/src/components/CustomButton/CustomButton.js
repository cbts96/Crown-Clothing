import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignin,
  inverted,
  ...otherprops
}) => (
  <button
    className={`${inverted ? "inverted" : ""}${
      isGoogleSignin ? "GoogleSignin" : ""
    } button`}
    {...otherprops}
  >
    {children}
  </button>
);
export default CustomButton;
