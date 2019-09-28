import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './App.js';
import LoginForm from './login.js';
import RegisterForm from './register.js';
import Admin from './adminPage.js'

export default class AppRouter extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/login" component={LoginForm}></Route>
					<Route path="/register" component={RegisterForm}></Route>
					<Route path="/adminPage" component={Admin}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}
