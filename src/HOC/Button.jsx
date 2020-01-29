import React, { Component } from 'react'
import withCount from './withCount'

class Button extends Component {

	render() {
		return (
			<button onClick={this.props.incrementCount} >Clicked {this.props.count} times</button>
		)
	}
}

export default withCount(Button);
