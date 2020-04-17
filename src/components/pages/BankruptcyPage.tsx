import React from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import Bankruptcy from '../bankruptcy/Bankruptcy';

const BankruptcyPage = (props: any) => {
	return (
		<Layout>
			<Nav />
			<Bankruptcy />
		</Layout>
	);
};

export default BankruptcyPage;
