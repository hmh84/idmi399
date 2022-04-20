import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';
import Week3 from './pages/Week3';
import Week4 from './pages/Week4';

interface RouteObj {
	path: string;
	name: string;
	main: () => JSX.Element;
}

const routes: RouteObj[] = [
	{
		path: '/',
		name: 'Home',
		main: Home,
	},
	{
		path: '/week-1',
		name: 'Week 1',
		main: Week1,
	},
	{
		path: '/week-2',
		name: 'Week 2',
		main: Week2,
	},
	{
		path: '/week-3',
		name: 'Week 3',
		main: Week3,
	},
	{
		path: '/week-4',
		name: 'Week 4',
		main: Week4,
	},
];

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default function Nav() {
	const [path, setPath] = useState(window.location.pathname);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				minHeight: '100vh',
			}}
		>
			<Router basename={isDev ? '' : '/drexel/idmi399'}>
				<nav
					style={{
						width: 200,
						backgroundColor: '#EFEFEF',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{routes.map((route) => (
						<Link
							key={route.path}
							to={route.path}
							style={{
								color: 'black',
								textDecoration: 'underline',
								padding: '1rem 0',
								textAlign: 'center',
								...(path === route.path && {
									textDecoration: 'none',
									backgroundColor: 'black',
									color: 'white',
								}),
							}}
							onClick={() => setPath(route.path)}
						>
							{route.name}
						</Link>
					))}
				</nav>

				<Routes>
					{routes.map((route, index) => (
						<Route
							key={route.path + index}
							path={route.path}
							element={
								<div style={{ flex: 1 }}>
									<header
										style={{ flex: 1, padding: '1rem' }}
									>
										<h1>{route.name}</h1>
									</header>
									<main
										style={{
											flex: 1,
											backgroundColor: 'white',
											padding: '1rem',
										}}
									>
										<route.main />
									</main>
								</div>
							}
						/>
					))}
				</Routes>
			</Router>
		</div>
	);
}
