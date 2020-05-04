import React, { useState, useEffect } from 'react';
import { surveyContent } from './surveyContent';
import surveyStyle from './Survey.module.scss';
import CheckBox from './CheckBox';

const Survey = () => {
	const [current, setCurrent] = useState(0);

	const [checkBoxes, handleCheckBoxes] = useState([]);

	const handleSurveySelect = (questions: any) => {
		handleCheckBoxes(questions);
	};

	useEffect(() => {
		setCurrent(0);
	}, []);

	const handleCurrentChange = (key: number) => setCurrent(key);

	return (
		<section className={surveyStyle.section}>
			<div className={surveyStyle.heading}>
				<h2>
					Please fill out one of these quick surveys to help us understand your needs and make the process as
					quick and easy as possible for you.
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
											<CheckBox question={question} />
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

export default Survey;
