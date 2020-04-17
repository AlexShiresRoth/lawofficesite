import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import Nav from '../nav/Nav';
import EstatePlanning from '../estate/EstatePlanning';
const EstatePlanningPage = (props: any) => {
	return (
		<Layout>
			<Nav />
			<EstatePlanning />
		</Layout>
	);
};

EstatePlanningPage.propTypes = {};

export default EstatePlanningPage;
