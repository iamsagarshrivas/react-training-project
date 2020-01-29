import React, { Component } from 'react'
export default (WrappedComponent) => {

	class WithCount extends Component {

		constructor(props) {
			super(props)

			this.state = {
				count: 0
			}
		}

		incrementCount = () => {
			this.setState(prev => { return { count: prev.count + 1 } })
		}

		render() {
			return (
				<WrappedComponent
					{...this.props}
					incrementCount={this.incrementCount}
					count={this.state.count}
				/>

			)
		}
	}


	return WithCount;
}