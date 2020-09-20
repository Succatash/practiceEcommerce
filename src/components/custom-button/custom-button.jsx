import React from "react";

import "./custom-button.styles.scss";
const CustomButton = ({ children, ...otherProps }) => {
  console.log("children: ", children);
  console.log("otherProps: ", otherProps);
  return (
    <button className="customButton" {...otherProps}>
      {children}
    </button>
  );
};
export default CustomButton;
