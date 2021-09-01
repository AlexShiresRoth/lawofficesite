import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import alertStyle from "./Alert.module.scss";

interface Props {
  message: any;
  loading: boolean;
  success: boolean;
  error: boolean;
}

const Alert = ({ message, loading, error }: Props) => {
  return !loading ? (
    <div className={error ? alertStyle.alert_error : alertStyle.alert_success}>
      {message}
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default Alert;
