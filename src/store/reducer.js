import { GET_TODO_INPUT, ADD_TODO, DELETE_TODO, CHANGE_TODO } from "./constants"
const initialState = {
    todoInput: '',
    todos: []
}


function reducer(state, action) {
    switch (action.type) {
        case GET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        case CHANGE_TODO:
            const updateTodo = [...state.todos]
            updateTodo[action.index] = action.payload
            return {
                ...state,
                todos: updateTodo
            }
        default:
            throw new Error("error")
    }
}

export { initialState }
export default reducer


