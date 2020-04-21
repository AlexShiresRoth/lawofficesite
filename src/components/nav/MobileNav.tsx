import React, { useState } from 'react';
import navStyle from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

interface MobileProps {
	services: Array<any>;
}

const MobileNav = ({ services }: MobileProps) => {
	const [menuOpen, setMenuState] = useState(false);

	return (
		<>
			<div className={navStyle.mobile_nav}>
				<div className={navStyle.mobile_left}>
					<div className={navStyle.menu} onClick={(e) => setMenuState(!menuOpen)}>
						{[1, 2, 3].map((item, i) => {
							return <span className={menuOpen ? navStyle.rotated : ''} key={item}></span>;
						})}
					</div>
				</div>
				<div className={navStyle.mobile_right}>
					<div className={navStyle.img_container}>
						<img
							src={`https://res.cloudinary.com/snackmanproductions/image/upload/v1587183467/lawoffice/lawofficelogo_fdaxgi.png`}
							alt="logo"
						/>
					</div>
				</div>
			</div>
			<div className={menuOpen ? navStyle.mobile_menu : navStyle.mobile_menu_hidden}>
				<ul>
					<li>
						<NavLink exact to="/">
							Home
						</NavLink>
					</li>
					{services.map((item, i) => {
						return (
							<li>
								<NavLink exact to={item.path}>
									{item.title}
								</NavLink>
							</li>
						);
					})}
					<li>
						<NavLink exact to="/about">
							About
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/">
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default MobileNav;
