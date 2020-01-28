import React, { Component } from 'react'

export default class Form extends Component {	

	constructor(props) {
		super(props)
	
		this.state = {
			 title:'',
			 body: ''
		}
	}
	
	onChangeHandler = e => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	onSubmitHandler = e => {
		e.preventDefault();	
		console.log(this.state);
					
	}
	render() {
		return (
			<form onSubmit={this.onSubmitHandler}>
				Title: <input name="title" type="text" onChange={this.onChangeHandler} required placeholder="enter title" value={this.state.title} /> <br /><br />
				Body: <textarea name="body" onChange={this.onChangeHandler} placeholder="enter body" value={this.state.body} /> <br /><br />
				<input type="submit" value="submit" />
			</form>
		)
	}
}
