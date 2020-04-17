import React from 'react';
import navStyle from './Nav.module.scss';
import { estateSvg } from './navSvgs';
const Nav = (props: any) => {
	const servicesArr = [
		{ title: 'Estate Planning', icon: estateSvg },
		{ title: 'Estate & Trust Administration', icon: '' },
		{ title: 'Estate and Trust Challenges', icon: '' },
		{ title: 'Bankruptcy', icon: '' },
	];

	return (
		<nav className={navStyle.navigation}>
			<div className={navStyle.nav_container}>
				<div className={navStyle.nav_left}>
					<button>Home</button>
				</div>
				<div className={navStyle.nav_right}>
					<div className={navStyle.nav_col}>
						<span>
							<div className={navStyle.services}>
								{servicesArr.map((service, i) => {
									return (
										<div className={navStyle.col}>
											{service.icon}
											<button key={i}>{service.title}</button>
										</div>
									);
								})}
							</div>
						</span>
						<button>Services</button>
					</div>
					<div className={navStyle.nav_col}>
						<span></span>
						<span></span>
						<button>About</button>
					</div>
					<div className={navStyle.nav_col}>
						<span></span>
						<span></span>
						<button>Contact</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
