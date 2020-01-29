import * as types from "../types";

const initialState = {
	count: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.INCREMENT_COUNT:
			return {
				count: state.count +1
			}
		
			default:
			return state
	}

}