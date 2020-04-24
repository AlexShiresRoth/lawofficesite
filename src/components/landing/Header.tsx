import React from 'react';
import headerStyle from './Header.module.scss';
import { GoLaw } from 'react-icons/go';
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti';
import { IoIosArrowDown } from 'react-icons/io';
const Header = (props: any) => {
	return (
		<header className={headerStyle.header}>
			<div className={headerStyle.overlay}></div>

			<div className={headerStyle.container}>
				<div className={headerStyle.text_box}>
					<h1>Rothenberg Law Offices, PLLC.</h1>
					<p>
						Real Estate {` `}
						<GoLaw />
						{` `} Estates & Trusts {` `}
						<GoLaw />
						{` `} Bankruptcy
					</p>
				</div>
				<div className={headerStyle.action_box}>
					<p>
						Schedule a free
						<br /> 30 minute consultation today!
					</p>
					<button>Schedule</button>
					<p>
						<TiSocialFacebook /> <TiSocialTwitter /> <TiSocialLinkedin />
					</p>
				</div>
			</div>
			<div className={headerStyle.arrow_container}>
				<IoIosArrowDown />
			</div>
		</header>
	);
};

export default Header;
