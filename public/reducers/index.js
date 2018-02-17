import { combineReducers } from 'redux';
import Calculator from './reducers_calculator';

const rootReducer = combineReducers({
    results: Calculator
});

export default rootReducer;