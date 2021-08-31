import React, { useEffect, useState } from 'react';
import gridStyle from './Header.module.scss';
import { withRouter, NavLink } from 'react-router-dom';
import { MdQuestionAnswer, MdCall, MdKeyboardArrowRight } from 'react-icons/md';
import { FaQuoteLeft } from 'react-icons/fa';
interface NegGridProps {
	history?: any;
}

const NegativeGrid = ({ history }: NegGridProps) => {
	//design these better
	const [isMobile, setMobile] = useState(window.innerWidth <= 600);
	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth <= 600);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [isMobile]);

	const boxes = [
		{
			title: 'Go',
			icon: <MdQuestionAnswer />,
			par: `Fill out a quick questionnaire to help us understand your needs`,
			link: '',
			path: '/questionnaire',
		},
		{
			title: 'Call',
			icon: <MdCall />,
			par: `Call us to get started today!`,
			link: 'tel:631-363-8749',
			path: null,
		},
		{
			title: 'View',
			icon: <FaQuoteLeft />,
			par: `Check out our testimonials`,
			link: '',
			path: null,
		},
	];

	return history.location.pathname === '/' ? (
		<section className={gridStyle.neg_grid}>
			{boxes.map((item, i) => {
				return !isMobile ? (
					<div className={gridStyle.survey_container}>
						<div className={gridStyle.bg}></div>
						{item.icon}
						<p key={i}>{item.par}</p>
						{item.path !== null ? (
							<NavLink to={item.path}>
								<button>
									{item.title} 
								</button>
							</NavLink>
						) : (
							<a href={item.link}>
								<button>
									{item.title} 
								</button>
							</a>
						)}
					</div>
				) : (
					<div className={gridStyle.survey_container}>
						{item.path !== null ? (
							<NavLink to={item.path}>
								<button>{item.icon}</button>
							</NavLink>
						) : (
							<a href={item.link}>
								<button>{item.icon}</button>
							</a>
						)}
					</div>
				);
			})}
		</section>
	) : null;
};

export default withRouter(NegativeGrid);
