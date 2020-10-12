import { NavigationActionCreators } from '../../Modules/Navigation/Navigation.actions'
import { TodoActionCreators } from '../../Modules/Todos/Todo.actions';

export const actions = {
  ...NavigationActionCreators,
  ...TodoActionCreators,
}