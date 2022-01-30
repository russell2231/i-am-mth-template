import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
	return (
		<main className={styles.home}>
			<section className={styles.hero}>
				<h1>I Am Mount Healthy</h1>
				<p>Just a kid from</p>
			</section>
			<section className={styles.purpose}>
				<div className={styles.container}>
					<h2>Purpose</h2>
					<p>
						This Website was created to bring together and showcase the fabulous
						alumni that Mt. Healthy has produced throughout the years.
					</p>
					<div className={styles.benefitsContainer}>
						<div className={styles.benefit}>
							<h3>Alumni</h3>
							<ul className={styles.benefitList}>
								<li>Reconnect with your peers</li>
								<li>Create a Professional network</li>
								<li>Market your business or services</li>
							</ul>
							<Link className={styles.btn} to='/alumni'>
								View Alumni
							</Link>
						</div>
						<div className={styles.benefit}>
							<h3>Current Students</h3>
							<ul className={styles.benefitList}>
								<li>Proof that your interested field is obtainable</li>
								<li>Reach out to potential mentors</li>
							</ul>
							<Link className={styles.btn} to='/alumni'>
								View Alumni
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
