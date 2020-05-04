import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import boxStyle from './CheckBox.module.scss';
import { AiOutlineCheck } from 'react-icons/ai';

interface CheckBoxProps {
	question: string;
}

const CheckBox = ({ question }: CheckBoxProps) => {
	const [isChecked, setChecked] = useState({
		checked: false,
		surveyQuestion: '',
	});

	const { checked, surveyQuestion } = isChecked;

	const handleCheckSelect = (e: React.MouseEvent) => {
		e.stopPropagation();
		setChecked({ checked: !checked, surveyQuestion: question });
	};

	return (
		<div className={checked ? boxStyle.checked : boxStyle.checkbox} onClick={(e) => handleCheckSelect(e)}>
			{checked ? <AiOutlineCheck /> : null}
		</div>
	);
};

CheckBox.propTypes = {
	question: PropTypes.string.isRequired,
};

export default CheckBox;
