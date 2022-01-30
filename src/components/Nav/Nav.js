import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';

import { IoHomeOutline } from 'react-icons/io5';
import { FaUserGraduate } from 'react-icons/fa';
import { ImNewspaper } from 'react-icons/im';

const Nav = ({ isNavOpen }) => {
	return (
		<nav className={`${styles.nav} ${isNavOpen ? `${styles.open}` : null}`}>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<Link to='/'>
						<IoHomeOutline className={styles.itemIcon} />
						Home
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link to='/alumni'>
						<FaUserGraduate className={styles.itemIcon} />
						Our Alumni
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link to='/news'>
						<ImNewspaper className={styles.itemIcon} />
						News & Updates
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
