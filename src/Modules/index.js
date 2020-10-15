import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import userReducer from './User/User.reducer';
import navigationReducer from './Navigation/Navigation.reducer';
import todosReducer from './Todos/Todos.reducer';

import { todoSaga } from './Todos/Todo.saga';
import { userSaga } from './User/User.saga';

export const rootSaga = function* rootSaga() {
    yield all([fork(todoSaga), fork(userSaga)]);
}

export const reducers = combineReducers({
    user: userReducer,
    navigation: navigationReducer,
    todos: todosReducer,
});