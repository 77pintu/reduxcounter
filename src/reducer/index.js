import {
    combineReducers
} from 'redux'
import {
    changeNumber
} from './reducers';

const rootReducers = combineReducers({
    changeNumber
});
export {
    rootReducers
};