import { combineReducers } from 'redux';
import {demo} from './demoResource'

const rootReducer = combineReducers({
    demo
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return rootReducer(state, action);
};