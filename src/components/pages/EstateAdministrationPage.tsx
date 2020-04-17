import React from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import EstateAdministration from '../estateadministration/EstateAdministration';

const EstateAdministrationPage = (props: any) => {
	return (
		<Layout>
			<Nav />
			<EstateAdministration />
		</Layout>
	);
};

export default EstateAdministrationPage;
