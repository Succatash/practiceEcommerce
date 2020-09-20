import React from "react";
import "./sign-in-sign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in";

const SignInSignUp = () => (
  <div className="sign-in-sign-up">
    <div className="sign-in-sign-up-container">
      <SignIn />

      {/* <SignUp />  */}
    </div>
  </div>
);

export default SignInSignUp;
