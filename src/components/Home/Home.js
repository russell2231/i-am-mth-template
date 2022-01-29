import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<>
			<main className={styles.home}>
				<section className={styles.hero}>
					<header>
						<Nav />
						<h1>I Am Mount Healthy</h1>
					</header>
				</section>
				<section className={styles.about}>
					<h2>About Us</h2>
					<p className={styles.content}>
						This site was created to bring together and showcase the fabulous
						alumni that Mt. Healthy has produced throughout the years. Alumni
						can use this site to reconnect with peers, and if you have a
						business you can market yourself and services. Also this is great
						for current students where they can use the site to reach out to
						potential mentors in the field they have interest in learning more
						about. (ex. Colleges attended, Business, or Jobs)
					</p>
					<Link className={styles.btn} to='/alumni'>
						Meet Our Alumni
					</Link>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
