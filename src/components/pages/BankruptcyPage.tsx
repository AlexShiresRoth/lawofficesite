import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import Bankruptcy from '../bankruptcy/Bankruptcy';

const BankruptcyPage = (props: any) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);

	const pageInfo = {
		pageTitle: 'Bankruptcy',
		path: 'bankruptcy',
		description: 'Bankruptcy Law',
	};

	return (
		<Layout pageInfo={pageInfo}>
			<Nav />
			<Bankruptcy />
		</Layout>
	);
};

export default BankruptcyPage;
