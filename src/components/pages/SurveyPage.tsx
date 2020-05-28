import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import Survey from '../survey/Survey';

const SurveyPage = (props: any) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);

	const pageInfo = {
		pageTitle: 'Questionnaire',
		path: 'questionnaire',
		description: 'Brief user questionnaire',
	};

	return (
		<Layout pageInfo={pageInfo}>
			<Nav />
			<Survey />
		</Layout>
	);
};

export default SurveyPage;
