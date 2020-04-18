import React, { useState } from 'react';
import formStyle from './Form.module.scss';

const Form = () => {
	const [formData, sendFormData] = useState({
		name: '',
		email: '',
		message: '',
		subject: '',
	});

	const { name, email, message, subject } = formData;

	const onChange = (
		e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement> | React.FormEvent<HTMLTextAreaElement>
	) => sendFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

	const formSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
	};
	return (
		<section className={formStyle.section}>
			<div className={formStyle.heading}>
				<h2>Contact</h2>
			</div>
			<div className={formStyle.grid}>
				<form onSubmit={(e) => formSubmit(e)}>
					<div className={formStyle.input_row}>
						<label>Email</label>
						<input
							type="email"
							name="email"
							value={email}
							onChange={(e) => onChange(e)}
							placeholder="obiwan@gmail.com"
						/>
					</div>
					<div className={formStyle.input_row}>
						<label>Name</label>
						<input
							type="text"
							name="name"
							value={name}
							onChange={(e) => onChange(e)}
							placeholder="Ben Kenobi"
						/>
					</div>
					<div className={formStyle.input_row}>
						<label>Message</label>
						<textarea
							placeholder="Please include a brief message."
							name="message"
							value={message}
							onChange={(e) => onChange(e)}
						></textarea>
					</div>
					<div className={formStyle.input_row}>
						<label>Service Requested</label>
						<select name="subject" value={subject} onChange={(e) => onChange(e)}>
							<option value="Bankruptcy">Bankruptcy</option>
							<option value="Estate Planning">Estate Planning</option>
							<option value="Estate & Trust Administration">Estate & Trust Administration</option>
							<option value="Estate & Trust Challenges">Estate & Trust Challenges</option>
						</select>
					</div>

					<div className={formStyle.input_row}>
						<button onClick={(e) => formSubmit(e)}>Send</button>
					</div>
				</form>
				<div className={formStyle.business}>
					<div>
						<h4>HOURS:</h4>
						<p>Mon - Fri: 9:00am - 5:30pm</p>
						<p>Weekends: By appointment</p>
					</div>
					<div>
						<h4>PHONE:</h4>
						<p>Bohemia: 631-363-8749</p>
						<p>Brooklyn: 646-633-4555</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Form;
