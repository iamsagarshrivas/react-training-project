import * as types from '../types'

export const incrementCount = () => {
	return {
		type: types.INCREMENT_COUNT,
		payload: {
			name: 'Some data'
		}
	}
}

export const decrementCount = () => {
	return {
		type: types.DECREMENT_COUNT,
		payload: {
			name: 'some data'
		}
	}
}