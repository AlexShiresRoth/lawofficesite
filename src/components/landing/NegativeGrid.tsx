import React, { useEffect, useState } from 'react';
import gridStyle from './Header.module.scss';
import { withRouter } from 'react-router-dom';
import { MdQuestionAnswer, MdCall, MdKeyboardArrowRight } from 'react-icons/md';
import { FaQuoteLeft } from 'react-icons/fa';
interface NegGridProps {
	history?: any;
}

const NegativeGrid = ({ history }: NegGridProps) => {
	//design these better
	const [isMobile, setMobile] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth <= 600);
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('load', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [isMobile]);

	const boxes = [
		{
			title: 'Survey',
			icon: <MdQuestionAnswer />,
			par: `Take a quick survey to help us understand your needs`,
			link: '',
		},
		{
			title: 'Call',
			icon: <MdCall />,
			par: `Call us today to get started!`,
			link: 'tel:631-363-8749',
		},
		{
			title: 'Testimonials',
			icon: <FaQuoteLeft />,
			par: `Check out our testimonials`,
			link: '',
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
						<a href={item.link}>
							<button>
								{item.title} <MdKeyboardArrowRight />
							</button>
						</a>
					</div>
				) : (
					<div className={gridStyle.survey_container}>
						<a href={item.link}>
							<button>{item.icon}</button>
						</a>
					</div>
				);
			})}
		</section>
	) : null;
};

export default withRouter(NegativeGrid);
