import React, { useState, useEffect } from 'react';
import { surveyContent } from './surveyContent';
import surveyStyle from './Survey.module.scss';
import CheckBox from './CheckBox';
import { clearCheckBoxes } from '../../actions/survey';
import { connect } from 'react-redux';

interface SurveyProps {
	survey?: any;
	clearCheckBoxes: () => void;
}
//TODO figure out how to add checkbox into certain point in redux store as opposed to building in an array full of empty boxes
const Survey = ({ survey: { checkboxes }, clearCheckBoxes }: SurveyProps) => {
	const [current, setCurrent] = useState(0);

	const [checkBoxes, handleCheckBoxes] = useState([] as any);

	const handleSurveySelect = (questions: any) => {
		handleCheckBoxes(questions);
	};

	useEffect(() => {
		clearCheckBoxes();
	}, [current, clearCheckBoxes]);

	const handleCurrentChange = (key: number) => setCurrent(key);

	return (
		<section className={surveyStyle.section}>
			<div className={surveyStyle.heading}>
				<h2>
					Please fill out one of these quick questionnaires to help us understand your needs and make the
					process as quick and easy as possible for you.
				</h2>
			</div>
			<div className={surveyStyle.content_grid}>
				{surveyContent.map((item, i) => {
					return (
						<button
							className={current === i ? surveyStyle.current : ''}
							key={i}
							onClick={() => {
								handleCurrentChange(i);
								handleSurveySelect(item.questions);
							}}
						>
							{item.title}
						</button>
					);
				})}
			</div>
			<div className={surveyStyle.survey}>
				{surveyContent
					.filter((item, i) => {
						return current === i;
					})
					.map((survey, i) => {
						return (
							<form>
								{survey.questions.map((question, i) => {
									return (
										<div className={surveyStyle.question_row}>
											<label>
												<span>{i + 1}.</span> {question}
											</label>
											<input type="checkbox"></input>
											<CheckBox question={question} index={i} current={current} />
										</div>
									);
								})}
								<button>Submit</button>
							</form>
						);
					})}
			</div>
		</section>
	);
};

const mapStateToProps = (state: any) => {
	console.log(state);
	return {
		survey: state.survey,
	};
};

export default connect(mapStateToProps, { clearCheckBoxes })(Survey);
