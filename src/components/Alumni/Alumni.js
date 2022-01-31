import { Link } from 'react-router-dom';

import styles from './Alumni.module.scss';
import profileImg from '../../assets/Mount Healthy-logos.jpeg';
import { FaSearch } from 'react-icons/fa';

const Alumni = () => {
	return (
		<main className={styles.alumni}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1>Alumni</h1>
					<p>Directory of Our Alumni</p>
				</div>
				<form className={styles.searchContainer}>
					<input
						className={styles.searchInput}
						type='search'
						name='search'
						id=''
						placeholder='Search by name, college, class, or profession'
					/>
					<FaSearch className={styles.searchIcon} />
				</form>
				<div className={styles.directory}>
					<div className={styles.alum}>
						<img className={styles.alumImg} src={profileImg} alt='profile' />
						<h2 className={styles.alumName}>Russell Rice</h2>
						<p className={styles.alumCollege}>University of Akron</p>
						<p className={styles.alumJob}>Front End Web Developer</p>
						<p className={styles.alumClass}>Class of 2014</p>
						<Link className={styles.btn} to='alumni/$name'>
							View Profile
						</Link>
					</div>
					<div className={styles.alum}>
						<img className={styles.alumImg} src={profileImg} alt='profile' />
						<h2 className={styles.alumName}>Russell Rice</h2>
						<p className={styles.alumCollege}>University of Akron</p>
						<p className={styles.alumJob}>Front End Web Developer</p>
						<p className={styles.alumClass}>Class of 2014</p>
						<Link className={styles.btn} to='alumni/$name'>
							View Profile
						</Link>
					</div>
					<div className={styles.alum}>
						<img className={styles.alumImg} src={profileImg} alt='profile' />
						<h2 className={styles.alumName}>Russell Rice</h2>
						<p className={styles.alumCollege}>University of Akron</p>
						<p className={styles.alumJob}>Front End Web Developer</p>
						<p className={styles.alumClass}>Class of 2014</p>
						<Link className={styles.btn} to='alumni/$name'>
							View Profile
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Alumni;
