import React from "react";
import spinnerStyle from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return <div className={spinnerStyle.spinner}></div>;
};

LoadingSpinner.propTypes = {};

export default LoadingSpinner;
