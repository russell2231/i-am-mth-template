import Home from '../Home/Home';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.wrapper}>
			<Routes>
				<Route index path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
