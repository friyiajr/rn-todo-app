import { getAllTodos } from '../../Modules/Todos/Todos.selector';
import { createStructuredSelector } from 'reselect';

export const selector = createStructuredSelector({
    allTodos: getAllTodos,
});
