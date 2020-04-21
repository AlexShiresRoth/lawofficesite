import React from 'react';
import aboutStyle from './About.module.scss';
import { content } from './aboutContent';

const About = () => {
	return (
		<section className={aboutStyle.section}>
			{content.map((copy, i) => {
				return (
					<>
						<div className={aboutStyle.heading}>
							<h2>{copy.heading}</h2>
						</div>
						<div className={aboutStyle.text_content}>
							{copy.pars.map((par, i) => {
								return <p>{par}</p>;
							})}
						</div>
					</>
				);
			})}
		</section>
	);
};

export default About;
