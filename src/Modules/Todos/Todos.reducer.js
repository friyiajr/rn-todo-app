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
        default:
            return state;
    }
}