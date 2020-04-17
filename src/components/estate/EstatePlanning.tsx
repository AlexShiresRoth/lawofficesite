import React from 'react';
import estateStyle from './EstatePlanning.module.scss';
import { text, paragraphOne, content } from './estateContent';
const EstatePlanning = (props: any) => {
	return (
		<section className={estateStyle.section}>
			<div className={estateStyle.heading}>
				<h2>Estate Planning</h2>
			</div>
			<div className={estateStyle.text_content}>
				<p>Are you worried to what happens to your family when you pass away? What are you worried about:</p>
				<ul>
					{text.map((point, i) => {
						return (
							<li key={i}>
								<p>{point}</p>
							</li>
						);
					})}
				</ul>
				<p>{paragraphOne}</p>
			</div>
			{content.map((copy, i) => {
				return (
					<div className={estateStyle.text_content}>
						<h3>{copy.heading}</h3>
						{copy.pars.map((par, i) => {
							return <p>{par}</p>;
						})}
					</div>
				);
			})}
		</section>
	);
};

export default EstatePlanning;
