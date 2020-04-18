import React from 'react';
import layoutStyle from './Layout.module.scss';
import { Footer } from '../footer/Footer';
interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main>
			<div className={layoutStyle.main_container}>{children}</div>
			<Footer />
		</main>
	);
};

export default Layout;
