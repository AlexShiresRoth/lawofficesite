import React from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.scss';

const Header = (props: any) => {
	return (
		<header className={headerStyle.header}>
			<div className={headerStyle.text_box}>
				<h1>
					Rothenberg <br />
					Law Offices
				</h1>
				<h3>Experience you can trust.</h3>
				<h3>Established in 1992.</h3>
			</div>
		</header>
	);
};

Header.propTypes = {};

export default Header;
