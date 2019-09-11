import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './App.js';
import LoginForm from './login.js';
//import Register from './register.js';

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
					
				</Switch>
			</BrowserRouter>
		)
	}
}