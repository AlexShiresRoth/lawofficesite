import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import Header from '../landing/Header';
const Home = (props: any) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);
	return (
		<Layout>
			<Nav />
			<Header />
		</Layout>
	);
};

export default Home;
