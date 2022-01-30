import { Link, Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import { useState } from 'react';

import logo from '../../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import Nav from '../Nav/Nav';

const Layout = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

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
			<Nav isNavOpen={isNavOpen} />
			<Outlet />
		</div>
	);
};

export default Layout;
