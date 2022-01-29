import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Mount Healthy-logos_white.png';
import { FiMenu } from 'react-icons/fi';
import styles from './Nav.module.scss';

const Nav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};
	return (
		<nav>
			<div className={styles.container}>
				<Link to='/' className={styles.logo}>
					<img src={logo} alt='' />
				</Link>
				<button className={styles.menuToggle} onClick={toggleNav}>
					<FiMenu />
				</button>
				<ul className={`${isNavOpen ? styles.open : null} ${styles.navList}`}>
					<li>
						<Link to='/alumni'>Meet Our Alumni</Link>
					</li>
					<li>
						<Link to='/news'>News & Updates</Link>
					</li>
					<li>
						<Link to='#'>Sign Up/Login</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
