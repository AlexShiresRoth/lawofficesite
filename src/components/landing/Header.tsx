import React from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.scss';

const Header = (props: any) => {
	const imgs = [
		'https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_51,w_935/v1587071279/lawoffice/giammarco-boscaro-OPzWvgL-upY-unsplash_xtdlpu.jpg',
		'https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_52,w_1558/v1587071675/lawoffice/mikhail-pavstyuk-EKy2OTRPXdw-unsplash_duhkqt.jpg',
		'https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_52,w_1066/v1587071745/lawoffice/j-zamora-GWOTvo3qq7U-unsplash_xthngq.jpg',
	];
	return (
		<header className={headerStyle.header}>
			<div className={headerStyle.overlay}></div>
			<div className={headerStyle.navigation}>
				<div className={headerStyle.nav_container}>
					<div className={headerStyle.nav_left}>
						<button>Home</button>
					</div>
					<div className={headerStyle.nav_right}>
						<div className={headerStyle.nav_col}>
							<span></span>
							<button>Services</button>
						</div>
						<div className={headerStyle.nav_col}>
							<span></span>
							<span></span>
							<button>About</button>
						</div>
						<div className={headerStyle.nav_col}>
							<span></span>
							<span></span>
							<button>Contact</button>
						</div>
					</div>
				</div>
			</div>
			<div className={headerStyle.container}>
				<div className={headerStyle.text_box}>
					<div className={headerStyle.col}>
						<h1>
							Rothenberg <br />
							Law Offices
						</h1>
						<h3>Experience you can trust.</h3>
						<h3>Established in 1992.</h3>
					</div>
				</div>
				<div className={headerStyle.img_grid}>
					{/* {imgs.map((img, i) => {
						return (
							<div className={headerStyle.img_container}>
								<img src={img} alt="law" />
							</div>
						);
					})} */}
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {};

export default Header;
