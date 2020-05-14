import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import boxStyle from './CheckBox.module.scss';
import { AiOutlineCheck } from 'react-icons/ai';
import { setCheckBoxes, removeCheck } from '../../actions/survey';
import { connect } from 'react-redux';

interface CheckBoxProps {
	question: string;
	setCheckBoxes: (value: any) => any;
	removeCheck: (value: any) => any;
	index: number;
	current: number;
	success: boolean;
}

const CheckBox = ({ question, setCheckBoxes, index, current, success }: CheckBoxProps) => {
	const [checkbox, setChecked] = useState({
		checked: false,
		surveyQuestion: '',
		number: 0,
	});

	const { checked, surveyQuestion, number } = checkbox;

	const handleCheckSelect = (e: React.MouseEvent) => {
		e.stopPropagation();
		setChecked({ checked: !checked, surveyQuestion: question, number: index });
	};

	useEffect(() => {
		setCheckBoxes(checkbox);
	}, [checked, checkbox, setCheckBoxes]);

	useEffect(() => {
		setChecked({ checked: false, surveyQuestion: '', number: 0 });
	}, [current, success]);

	return (
		<div className={checked ? boxStyle.checked : boxStyle.checkbox} onClick={(e) => handleCheckSelect(e)}>
			{checked ? <AiOutlineCheck /> : null}
		</div>
	);
};

CheckBox.propTypes = {
	question: PropTypes.string.isRequired,
};

export default connect(null, { setCheckBoxes, removeCheck })(CheckBox);
