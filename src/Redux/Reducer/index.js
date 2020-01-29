import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import abcReducer from "./abcReducer";

export default combineReducers({
	counter: counterReducer,
	abc: abcReducer 
})