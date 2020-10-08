import { combineReducers } from 'redux';

import userReducer from './User/User.reducer';

export const reducers = combineReducers({
    user: userReducer,
});