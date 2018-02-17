import { combineReducers } from 'redux';
import Calculator from './reducers_calculator';
import Status from './reducers_status';

const rootReducer = combineReducers({
    results: Calculator,
    status: Status
});

export default rootReducer;