import { TodoActionConstants } from './Todo.actions'


const INITIAL_STATE = {
    allTodos: [
        {
            id: "1",
            content: "Hello",
        },
        {
            id: "2",
            content: "Hello",
        },
    ]
}

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case TodoActionConstants.CREATE_TODO:
            const allTodos = state.allTodos.concat({
                id: "3",
                content: action.payload,
            });
            return { ...state, allTodos };
        default:
            return state;
    }
}