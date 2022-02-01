import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import styles from './Layout.module.scss';

import logo from '../../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import Nav from '../Nav/Nav';

const Layout = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(true);
	const location = useLocation();

	useEffect(() => {
		setIsNavOpen(false);
		window.scrollTo(0, 0);
	}, [location]);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<div className={styles.container}>
					<Link to='/' className={styles.logo}>
						<img src={logo} alt='Logo' />
					</Link>
					<button className={styles.signIn}>Register / Login</button>
					<button onClick={toggleNav} className={styles.navToggle}>
						<FiMenu />
					</button>
				</div>
			</header>
			<Nav isNavOpen={isNavOpen} className={styles.navLayout} />
			<Outlet className={styles.body} />
		</div>
	);
};

export default Layout;
