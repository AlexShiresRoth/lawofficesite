import React from 'react';
import footerStyle from './Footer.module.scss';
import Form from '../contact/Form';
export const Footer = () => {
	return (
		<>
			<Form />
			<footer className={footerStyle.footer}>
				<div className={footerStyle.container}>
					<div className={footerStyle.row}>
						<p>Attorney Advertisement. No solicitations by fax or phone.</p>
					</div>
					<div className={footerStyle.grid}>
						<div className={footerStyle.col}>
							<h4>Contact</h4>
							<p>Rothenberg Law Office, PLLC</p>
							<p>Long Island Address:</p>
							<p>80 Orville Dr</p>
							<p>Bohemia, NY 11716</p>
							<p>
								<a href="tel:631-363-8749">631-363-8749</a>
							</p>
							<p>Brooklyn Address:</p>
							<p>By Appointment Only</p>
							<p>300 Cadman Plaza 12th Floor</p>
							<p>Brooklyn, New York 11201</p>
							<p>
								<a href="tel:646-633-4555">646-633-4555</a>
							</p>
						</div>
						<div className={footerStyle.col}>
							<h4>Qualifications</h4>
							<p>MBA Financing</p>
							<p>Accountant</p>
							<p>Juris Doctor</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
