import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import EstateAdministration from '../estateadministration/EstateAdministration';

const EstateAdministrationPage = (props: any) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);

	const pageInfo = {
		pageTitle: 'Estate Aministration',
		path: 'estateadmin',
		description: 'Estate Administration Law',
	};

	return (
		<Layout pageInfo={pageInfo}>
			<Nav />
			<EstateAdministration />
		</Layout>
	);
};

export default EstateAdministrationPage;
