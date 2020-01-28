import React, { Component } from 'react'
import {
	BrowserRouter, Route, Link, Switch, Redirect
} from 'react-router-dom'

import Home from "./Components/Home";
import About from "./Components/About";
import Other from "./Components/Other";

export default class Router extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<ul>
						<li>
							<Link to="/">Home
						</Link>
						</li>
						<li>
							<Link to="/about">About
						</Link>
						</li>
						<li>
							<Link to="/other">Other
						</Link>
						</li>
					</ul>
				</div>
				<div>
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/other">
							<Other />
						</Route>
						<Route path="/">
							<Home />
						</Route>
						<Route path="*">
							<Redirect to="/" ></Redirect>
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}
