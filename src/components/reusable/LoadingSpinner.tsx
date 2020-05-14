import React from 'react';
import PropTypes from 'prop-types';
import spinnerStyle from './LoadingSpinner.module.scss';

const LoadingSpinner = (props: any) => {
	return <div className={spinnerStyle.spinner}></div>;
};

LoadingSpinner.propTypes = {};

export default LoadingSpinner;
