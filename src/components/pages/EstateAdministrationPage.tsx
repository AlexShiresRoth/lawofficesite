import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import EstateAdministration from '../estateadministration/EstateAdministration';

const EstateAdministrationPage = (props: any) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
	return (
		<Layout>
			<Nav />
			<EstateAdministration />
		</Layout>
	);
};

export default EstateAdministrationPage;
