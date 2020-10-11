import { combineReducers } from 'redux';

import userReducer from './User/User.reducer';
import navigationReducer from './Navigation/Navigation.reducer';
import todosReducer from './Todos/Todos.reducer';

export const reducers = combineReducers({
    user: userReducer,
    navigation: navigationReducer,
    todos: todosReducer,
});