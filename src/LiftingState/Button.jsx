import React from 'react'
import { render } from '@testing-library/react'

class Button extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	render() {

		return (
			<div>
				<h3>Count: {this.state.count}</h3>
				<button onClick={()=>this.setState(prev => {return {count: prev.count+1}})}>{this.props.children}</button>
			</div>
		)
	}
}

export default Button
