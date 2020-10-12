import createAction from '../../Helpers/actions'

export const TodoActionConstants = {
  CREATE_TODO_ATTEMPT: "@@TODOS/CREATE_TODO_ATTEMPT",
  CREATE_TODO: "@@TODOS/CREATE_TODO",
}

export const TodoActionCreators = {
  createTodo: (props) => createAction(TodoActionConstants.CREATE_TODO_ATTEMPT, props),
}