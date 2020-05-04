import React from 'react';
import headerStyle from './Header.module.scss';
import { GoLaw } from 'react-icons/go';
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti';
import { connect } from 'react-redux';
import NegativeGrid from './NegativeGrid';

type HeaderProps = {
	refs?: any;
};

const Header = ({ refs: { ref } }: HeaderProps) => {
	const scrollToContact = () => {
		console.log(ref);
		window.scrollTo({
			top: ref.current.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};

	const headerSVG = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={headerStyle.bg_svg}>
			<path
				fill="#fff"
				fill-opacity="1"
				d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
			></path>
		</svg>
	);

	return (
		<header className={headerStyle.header}>
			<div className={headerStyle.overlay}></div>
			{headerSVG}
			<div className={headerStyle.container}>
				<div>
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
							Schedule a free onetime
							<br /> 30 minute consultation today!
						</p>
						<button onClick={() => scrollToContact()}>Schedule</button>
						<p>
							<TiSocialFacebook /> <TiSocialTwitter /> <TiSocialLinkedin />
						</p>
					</div>
				</div>
				<NegativeGrid />
			</div>
		</header>
	);
};

const mapStateToProps = (state: any) => {
	return {
		refs: state.refs,
	};
};

export default connect(mapStateToProps, null)(Header);
