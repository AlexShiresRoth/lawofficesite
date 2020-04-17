import React from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import EstateAndTrust from '../estate&trust/EstateAndTrust';

const EstateAndTrustPage = (props: any) => {
	return (
		<Layout>
			<Nav />
			<EstateAndTrust />
		</Layout>
	);
};

export default EstateAndTrustPage;
