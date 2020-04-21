import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import About from '../about/About';

const BankruptcyPage = (props: any) => {
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
			});
		}, 150);
	}, []);
	return (
		<Layout>
			<Nav />
			<About />
		</Layout>
	);
};

export default BankruptcyPage;
