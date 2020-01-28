import React from 'react'
// import Form from './Form'
// import Router from './Router'
import AuthGuard from './AuthGuard'
// import axios from './utils/axios'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}


	render() {
		console.log('------------------------');
		console.log('App component');

		return (
			<>
				<h1>App component</h1>
				<AuthGuard />
{/* 				
				<button onClick={this.changePost}>Change post</button>

				<div>
					<h1>userid: {this.state.id}</h1>
					<h3>title: {this.state.title}</h3>
					{this.state.post && <h5>post: {this.state.post}</h5>}
				</div> */}

			</>
		)
	}

}
export default App