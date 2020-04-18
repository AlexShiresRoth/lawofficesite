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
	return (
		<Layout>
			<Nav />
			<Bankruptcy />
		</Layout>
	);
};

export default BankruptcyPage;
