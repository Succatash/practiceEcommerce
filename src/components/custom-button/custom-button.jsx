import React from "react";

import "./custom-button.styles.scss";
const CustomButton = ({ children, isGooglesSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGooglesSignIn ? "google-sign-in" : ""} customButton `}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default CustomButton;
