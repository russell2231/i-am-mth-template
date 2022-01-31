import { Routes, Route } from 'react-router-dom';
import Alumni from '../Alumni/Alumni';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='alumni' element={<Alumni />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
