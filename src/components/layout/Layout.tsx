import React from 'react';
import PropTypes from 'prop-types';
import layoutStyle from './Layout.module.scss';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main>
			<div className={layoutStyle.main_container}>{children}</div>
		</main>
	);
};

Layout.propTypes = {};

export default Layout;
