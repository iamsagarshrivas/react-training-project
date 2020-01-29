import React from 'react'
import { incrementCount, decrementCount } from "../Redux/Actions";
import store from '../Redux/store'

function Counter() {
	store.subscribe(() => {
		console.log(store.getState());
	});
	return (
		<div>
			<button onClick={() => {
				store.dispatch(incrementCount())

			}}>Increment Count</button>
			<button onClick={() => store.dispatch(decrementCount())}>Decrement Count</button>
		</div>
	)
}

export default Counter