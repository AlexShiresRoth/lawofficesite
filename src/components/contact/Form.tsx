import React, { useState, useRef, useEffect } from 'react';
import formStyle from './Form.module.scss';
import axios from 'axios';
import NegativeGrid from './NegativeGrid';
import { setRef } from '../../actions/refs';
import { connect } from 'react-redux';

interface FormProps {
	setRef: (val: any) => any;
}

const Form = ({ setRef }: FormProps) => {
	const [formData, sendFormData] = useState({
		name: '',
		email: '',
		message: '',
		subject: 'Bankruptcy',
	});

	const [msgStatus, setMsgStatus] = useState({
		status: '',
		error: false,
		loading: false,
		success: false,
	});

	const { name, email, message, subject } = formData;

	const contactRef = useRef(null);

	const onChange = (
		e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement> | React.FormEvent<HTMLTextAreaElement>
	) => sendFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

	const formSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
		setMsgStatus({
			status: 'Sending...',
			error: false,
			loading: true,
			success: false,
		});
		await axios({
			method: 'POST',
			url: `https://asrserver.herokuapp.com/api/lawoffice/send-email`,
			data: {
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:3000/',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				...formData,
			},
		})
			.then((res) => {
				console.log(res);
				setMsgStatus({
					status: 'Thank you, your message has been sent and someone will be contacting you soon.',
					error: false,
					loading: false,
					success: true,
				});
				setTimeout(() => {
					sendFormData({
						name: '',
						email: '',
						message: '',
						subject: '',
					});
					setMsgStatus({
						status: '',
						error: false,
						loading: false,
						success: false,
					});
				}, 10000);
			})
			.catch((err) => {
				const errMsg = JSON.stringify(err);
				console.error(JSON.parse(errMsg).message);
				setMsgStatus({
					status: JSON.parse(errMsg).message,
					error: true,
					loading: false,
					success: false,
				});
				setTimeout(() => {
					sendFormData({
						name: '',
						email: '',
						message: '',
						subject: '',
					});
					setMsgStatus({
						status: '',
						error: false,
						loading: false,
						success: false,
					});
				}, 10000);
			});
	};

	const { status, error, success, loading } = msgStatus;

	useEffect(() => {
		setRef(contactRef);
	}, [contactRef, setRef]);

	return (
		<section className={formStyle.section} ref={contactRef}>
			<NegativeGrid />
			<div
				className={
					status !== ''
						? loading
							? formStyle.alert_loading
							: error
							? formStyle.alert_error
							: success
							? formStyle.alert_success
							: formStyle.alert_hidden
						: formStyle.alert
				}
			>
				<p>{status}</p>
			</div>
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
							placeholder="Enter your email"
						/>
					</div>
					<div className={formStyle.input_row}>
						<label>Name</label>
						<input
							type="text"
							name="name"
							value={name}
							onChange={(e) => onChange(e)}
							placeholder="Enter your name"
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
							<option defaultValue="true" value="Bankruptcy">
								Bankruptcy
							</option>
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
				<div className={formStyle.map_container}>
					<iframe src={`https://snazzymaps.com/embed/200241`} title="map"></iframe>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state: any) => {
	return {
		refs: state.refs,
	};
};

export default connect(mapStateToProps, { setRef })(Form);
