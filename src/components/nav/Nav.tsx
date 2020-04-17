import React, { useState } from 'react';
import navStyle from './Nav.module.scss';
import { NavLink, withRouter } from 'react-router-dom';
import { estateSvg, trust, challenges, bankruptcy } from './navSvgs';

const Nav = (history: any) => {
	const servicesArr = [
		{ title: 'Estate Planning', icon: estateSvg, path: '/estateplanning' },
		{ title: 'Estate & Trust Administration', icon: trust, path: '/estateadmin' },
		{ title: 'Estate and Trust Challenges', icon: challenges, path: '/estateandtrust' },
		{ title: 'Bankruptcy', icon: bankruptcy, path: '/bankruptcy' },
	];

	const [expanded, setExpanded] = useState({
		services: false,
		contact: false,
		about: false,
	});

	const { services, contact, about } = expanded;

	return (
		<nav className={navStyle.navigation}>
			<div className={navStyle.nav_container}>
				<div className={navStyle.nav_left}>
					<NavLink to="/">
						<button>Home</button>
					</NavLink>
				</div>
				<div className={navStyle.nav_right}>
					<div className={navStyle.nav_col}>
						<span
							className={
								services
									? navStyle.span_expanded
									: history.location.pathname === '/'
									? navStyle.span_hidden
									: navStyle.span_none
							}
						>
							<div className={navStyle.services}>
								{servicesArr.map((service, i) => {
									return (
										<div className={navStyle.col}>
											{service.icon}
											<button key={i}>
												<NavLink to={service.path}>{service.title}</NavLink>
											</button>
										</div>
									);
								})}
							</div>
						</span>
						<button onClick={() => setExpanded({ services: !services, contact: false, about: false })}>
							Services
						</button>
					</div>
					<div className={navStyle.nav_col}>
						{history.location.pathname === '/' ? (
							<>
								<span></span> <span></span>
							</>
						) : null}
						<button>About</button>
					</div>
					<div className={navStyle.nav_col}>
						{history.location.pathname === '/' ? (
							<>
								<span></span>
								<span></span>
							</>
						) : null}
						<button>Contact</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default withRouter(Nav);
