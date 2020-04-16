import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import Header from '../landing/Header';
const Home = (props: any) => {
	return (
		<Layout>
			<Header />
		</Layout>
	);
};

Home.propTypes = {};

export default Home;
