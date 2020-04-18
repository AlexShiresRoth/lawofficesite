import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import EstateAndTrust from '../estate&trust/EstateAndTrust';

const EstateAndTrustPage = (props: any) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);
	return (
		<Layout>
			<Nav />
			<EstateAndTrust />
		</Layout>
	);
};

export default EstateAndTrustPage;
