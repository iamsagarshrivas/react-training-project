import { createStore, applyMiddleware, compose } from "redux";
import reducer from './Reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store  = createStore(reducer,  applyMiddleware(thunk, logger));

export default store;