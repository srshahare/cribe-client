import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { user } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  user,
  alert
});

export default rootReducer;