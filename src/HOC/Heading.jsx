import React, { Component } from 'react'
import withCount from './withCount'

class Heading extends Component {

	render() {
		return (
			<h1 onClick={this.props.incrementCount}>
				clicked {this.props.count } times
			</h1>
		)
	}
}

export default withCount( Heading)
