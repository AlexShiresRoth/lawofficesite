import React from 'react';
import bankruptcyStyle from './Bankruptcy.module.scss';
import { content } from './bankruptcyContent';

const EstateAndTrust = (props: any) => {
	return (
		<section className={bankruptcyStyle.section}>
			<div className={bankruptcyStyle.heading}>
				<h2>Bankruptcy</h2>
			</div>

			{content.map((copy, i) => {
				return (
					<div className={bankruptcyStyle.text_content}>
						<h3>{copy.heading}</h3>
						{copy.table !== null ? (
							<div className={bankruptcyStyle.table_grid}>
								{copy.table.map((element, i) => {
									return (
										<div className={bankruptcyStyle.col}>
											<p>{element}</p>
										</div>
									);
								})}
							</div>
						) : (
							copy.pars.map((par, i) => {
								return <p>{par}</p>;
							})
						)}
					</div>
				);
			})}
		</section>
	);
};

export default EstateAndTrust;
