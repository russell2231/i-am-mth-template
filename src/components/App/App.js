import { Routes, Route } from 'react-router-dom';
import Alumni from '../Alumni/Alumni';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import News from '../News/News';
import Profile from '../Profile/Profile';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='alumni' element={<Alumni />} />
					<Route path='alumni/profile' element={<Profile />} />
					<Route path='news' element={<News />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
