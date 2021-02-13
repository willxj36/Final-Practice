import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Books from './components/Books';

const App = () => {

	const [loggedIn, setLoggedIn] = useState<boolean>(false);

	useEffect(() => {
		let token = localStorage.getItem('token');
		token ? setLoggedIn(true) : setLoggedIn(false);
	}, []);

	return (
		<>
		<Router>
			<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/books' component={Books} />
				</Switch>
			</Router>
		</>
	);
};

interface AppProps {}

export default App;
