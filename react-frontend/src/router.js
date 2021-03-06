import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './App.js';
import LoginForm from './login.js';
import RegisterForm from './register.js';
import Admin from './adminPage.js';
import ListPage from './QuestionListPage.js';
import viewTaskApp from './QuestionDetails.js';

export default class AppRouter extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomePage}></Route>
					<Route path="/login" component={LoginForm}></Route>
					<Route path="/register" component={RegisterForm}></Route>
					<Route path="/adminPage" component={Admin}></Route>
					<Route path="/questionList" component={ListPage}></Route>
					<Route path="/questionDetails" component={viewTaskApp}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}
