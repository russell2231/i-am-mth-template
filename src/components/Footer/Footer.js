import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

import logo from '../../assets/Mount Healthy-logos_white.png';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<img className={styles.logo} src={logo} alt='Logo' />
				<nav className={styles.navContainer}>
					<ul className={styles.navList}>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/alumni'>Meet Our Alumni</Link>
						</li>
						<li>
							<Link to='/news'>News & Updates</Link>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
