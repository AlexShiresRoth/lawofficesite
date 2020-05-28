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

	const pageInfo = {
		pageTitle: 'Estate and Trust',
		path: 'estateandtrust',
		description: 'Estate and Trust Law',
	};
	return (
		<Layout pageInfo={pageInfo}>
			<Nav />
			<EstateAndTrust />
		</Layout>
	);
};

export default EstateAndTrustPage;
