import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {

	const [loggedIn, setLoggedIn] = useState<boolean>(false);

	useEffect(() => {
		let token = localStorage.getItem('token');
		token ? setLoggedIn(true) : setLoggedIn(false);
	}, []);

	return (
		<>
		<Router>
			<Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login'>
						<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

interface AppProps {}

export default App;
