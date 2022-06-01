import { CSSProperties, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';
import Week3 from './pages/Week3';
import Week4 from './pages/Week4';
import Week5 from './pages/Week5';
import Week6 from './pages/Week6';
import Week7 from './pages/Week7';
import Week8 from './pages/Week8';
import Week9 from './pages/Week9';

interface RouteObj {
	path: string;
	name: string;
	main: () => JSX.Element;
	external?: boolean;
}

const routes: RouteObj[] = [
	{
		path: '/',
		name: 'Case Study',
		main: Home,
	},
	{
		path: 'http://projects.hunterham.digital/drexel/idmi399/website-pre-accessibility',
		name: 'Pre-Accessibility',
		main: () => <></>,
		external: true,
	},
	{
		path: 'http://projects.hunterham.digital/drexel/idmi399/website-post-accessibility',
		name: 'Post-Accessibility',
		main: () => <></>,
		external: true,
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
	{
		path: '/week-5',
		name: 'Week 5',
		main: Week5,
	},
	{
		path: '/week-6',
		name: 'Week 6',
		main: Week6,
	},
	{
		path: '/week-7',
		name: 'Week 7',
		main: Week7,
	},
	{
		path: '/week-8',
		name: 'Week 8',
		main: Week8,
	},
	{
		path: '/week-9',
		name: 'Week 9',
		main: Week9,
	},
];

const linkStyle: CSSProperties = {
	color: 'black',
	textDecoration: 'underline',
	padding: '1rem 0.5rem',
	textAlign: 'center',
};

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
						backgroundColor: '#EFEFEF',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{routes.map((route) => {
						const style: CSSProperties = {
							...linkStyle,
							...(path === route.path && {
								textDecoration: 'none',
								backgroundColor: 'black',
								color: 'white',
							}),
						};
						return !route.external ? (
							<Link
								key={route.path}
								to={{ pathname: route.path }}
								style={style}
								onClick={() => setPath(route.path)}
							>
								{route.name}
							</Link>
						) : (
							<a
								key={route.path}
								href={route.path}
								style={style}
								target='_blank'
								rel='noopener noreferrer'
							>
								{route.name}
							</a>
						);
					})}
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
											padding:
												route.path === '/'
													? undefined
													: '1rem',
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
