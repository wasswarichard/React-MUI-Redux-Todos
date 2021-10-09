import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/';
import thunk from 'redux-thunk';
import { initialState } from '../initialState';
const initialStore: any = initialState;

const store = createStore(rootReducer, initialStore, applyMiddleware(thunk));

export default store;
