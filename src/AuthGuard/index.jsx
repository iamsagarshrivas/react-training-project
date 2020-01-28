import React, { Component } from 'react'
import {
	BrowserRouter,
	Link,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import Public from './Public'
import Private from './Private'

export default class index extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loggedIn: false
		}
	}


	render() {
		return (
			<>
				<button onClick={() => { this.setState(prevState => { return { loggedIn: !prevState.loggedIn } }) }} >{this.state.loggedIn ? 'logout' : 'login'}</button>
				<BrowserRouter>
					<ul>
						<li>
							<Link to="/public">Public Route
						</Link>
						</li>
						<li>
							<Link to="/private">Private Route
						</Link>
						</li>
					</ul>

					<div>
						<Switch>
							<Route path="/public" >
								<Public />
							</Route>
							{
								this.state.loggedIn ?
								<Route path='/private'>
									<Private />
								</Route>
								:
								<Redirect to="/public"></Redirect>
							}

						</Switch>
					</div>
				</BrowserRouter>
			</>
		)
	}
}
