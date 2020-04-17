import React from 'react';
import estateStyle from './EstateAdministration.module.scss';
import { content } from './estateAdminText';

const EstateAdministration = (props: any) => {
	return (
		<section className={estateStyle.section}>
			<div className={estateStyle.heading}>
				<h2>Estate & Trust Administration</h2>
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

EstateAdministration.propTypes = {};

export default EstateAdministration;
