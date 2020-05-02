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

	return (
		<header className={headerStyle.header}>
			<div className={headerStyle.overlay}></div>
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
