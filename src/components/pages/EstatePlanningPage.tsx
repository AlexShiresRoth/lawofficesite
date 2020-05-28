import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import EstatePlanning from '../estate/EstatePlanning';
const EstatePlanningPage = (props: any) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);

	const pageInfo = {
		pageTitle: 'Estate Planning',
		path: 'estateplanning',
		description: 'Estate Planning Law',
	};
	return (
		<Layout pageInfo={pageInfo}>
			<Nav />
			<EstatePlanning />
		</Layout>
	);
};

export default EstatePlanningPage;
