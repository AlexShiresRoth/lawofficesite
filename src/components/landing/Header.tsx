import React from 'react';
import headerStyle from './Header.module.scss';

const Header = (props: any) => {
	return (
		<header className={headerStyle.header}>
			<div className={headerStyle.overlay}></div>

			<div className={headerStyle.container}>
				<div className={headerStyle.text_box}>
					<div className={headerStyle.col}>
						<h1>
							Rothenberg <br />
							Law Offices, <br />
							PLLC.
						</h1>
						<h3>Experience you can trust.</h3>
						<h3>Established in 1992.</h3>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
