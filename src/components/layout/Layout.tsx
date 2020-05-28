import React from 'react';
import layoutStyle from './Layout.module.scss';
import { Footer } from '../footer/Footer';
import { Helmet } from 'react-helmet';

interface LayoutProps {
	children: React.ReactNode;
	pageInfo: {
		pageTitle: string;
		path: string;
		description: string;
	};
}

const Layout = ({ children, pageInfo: { pageTitle, path, description } }: LayoutProps) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Rothenberg Law Offices:{pageTitle}</title>
				<link rel="canonical" href={`https://urmyattorney.com/#/${path}`} />
				<meta name="description" content={description} />
				<meta name="theme-color" content="#293462" />
				<meta name="robots" content="index, follow" />
			</Helmet>
			<main>
				<div className={layoutStyle.main_container}>{children}</div>
				<Footer />
			</main>
		</>
	);
};

export default Layout;
