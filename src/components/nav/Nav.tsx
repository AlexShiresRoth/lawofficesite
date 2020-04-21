import React, { useState, useEffect } from 'react';
import navStyle from './Nav.module.scss';
import MobileNav from './MobileNav';
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

	const [navBg, setNavBg] = useState(false);

	const { services } = expanded;

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setNavBg(true);
			} else setNavBg(false);
		};
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={navStyle.navigation} style={navBg ? { background: `#00204a` } : { background: '' }}>
			<MobileNav services={servicesArr} />
			<div className={navStyle.nav_container}>
				<div className={navStyle.nav_left}>
					<NavLink to="/">
						<button>
							<img
								src={`https://res.cloudinary.com/snackmanproductions/image/upload/v1587183467/lawoffice/lawofficelogo_fdaxgi.png`}
								alt="logo"
							/>
						</button>
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
							style={navBg && !services ? { maxHeight: '100%' } : { maxHeight: '100vh' }}
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
								<span style={navBg ? { maxHeight: '0%' } : { maxHeight: '100vh' }}></span>{' '}
								<span style={navBg ? { maxHeight: '100%' } : { maxHeight: '100vh' }}></span>
							</>
						) : null}
						<NavLink to="/about">
							<button>About</button>
						</NavLink>
					</div>
					<div className={navStyle.nav_col}>
						{history.location.pathname === '/' ? (
							<>
								<span style={navBg ? { maxHeight: '100%' } : { maxHeight: '100vh' }}></span>
								<span style={navBg ? { maxHeight: '0%' } : { maxHeight: '100vh' }}></span>
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
