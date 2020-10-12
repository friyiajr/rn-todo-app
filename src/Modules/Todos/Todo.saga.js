import { takeEvery, put } from 'redux-saga/effects';

import { TodoActionConstants } from './Todo.actions';
import { NavigationActionConstants } from '../Navigation/Navigation.actions';

export function* createTodo(props) {
  yield put({
    type: TodoActionConstants.CREATE_TODO,
    payload: props.payload.content,
  });
  yield put({
    type: NavigationActionConstants.POP_SCREEN,
    payload: { componentId: props.payload.componentId },
  });
}

export function* todoSaga() {
  yield takeEvery(TodoActionConstants.CREATE_TODO_ATTEMPT, createTodo);
}