// handle the state changes 
// for a .js file store/actions, there is always a .js file 
// inside store/reducers that will handle the respective actions.
/*

export default function(state={}, action) {
    switch(action.type) {
        default:
            return state;
    }
}

*/
import apiReducer from './api';
import {combineReducers} from 'redux';

export default combineReducers({
  api: apiReducer,
});