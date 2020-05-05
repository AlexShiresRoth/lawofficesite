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
				d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,245.3C840,267,960,277,1080,245.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
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
