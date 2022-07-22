import { GET_TODO_INPUT, ADD_TODO, DELETE_TODO, CHANGE_TODO } from "./constants";

export const getInput = payload => {
    return {
        type: GET_TODO_INPUT,
        payload
    }
}


export const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteTodo = payload => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const ChangeTodo = (index, payload) => {
    return {
        type: CHANGE_TODO,
        index,
        payload
    }
}