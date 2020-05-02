import React from 'react';
import gridStyle from './Header.module.scss';
import { withRouter } from 'react-router-dom';
import { MdQuestionAnswer, MdCall, MdKeyboardArrowRight } from 'react-icons/md';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
interface NegGridProps {
	history?: any;
}

const NegativeGrid = ({ history }: NegGridProps) => {
	//design these better
	return history.location.pathname === '/' ? (
		<section className={gridStyle.neg_grid}>
			<div className={gridStyle.survey_container}>
				<div className={gridStyle.bg}></div>
				<MdQuestionAnswer />
				<p>Take a quick survey to narrow down your search</p>
				<button>
					Survey <MdKeyboardArrowRight />
				</button>
			</div>
			<div className={gridStyle.survey_container}>
				<div className={gridStyle.bg}></div>
				<MdCall />
				<p>Call us today to get started!</p>
				<a href="tel:631-363-8749">
					<button>
						Call <MdKeyboardArrowRight />
					</button>
				</a>
			</div>
			<div className={gridStyle.survey_container}>
				<div className={gridStyle.bg}></div>
				<FaQuoteLeft />
				<p>Check out our testimonials</p>
				<button>
					Testimonials <MdKeyboardArrowRight />
				</button>
			</div>
		</section>
	) : null;
};

export default withRouter(NegativeGrid);
