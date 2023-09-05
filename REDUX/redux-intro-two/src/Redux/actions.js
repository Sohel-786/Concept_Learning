import { ADD_COUNT, ADD_TODO, SUB_ONE, UPDATE_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS } from './actionTypes.js'

const addCount = (data) => {
    return { type : ADD_COUNT, payload : data };
}

const subOne = (data) => {
    return { type : SUB_ONE, payload : data };
}

const addTodo = (data) => {
    return { type : ADD_TODO, payload : data };
}

const updateTodo = (id) => {
    return { type : UPDATE_TODO, payload : id };
}

const addTodoLoading = () => {
    return { type : ADD_TODO_LOADING }
}

const addTodoError = (err) => {
    return { type : ADD_TODO_ERROR, payload : err};
}

const addTodoSuccess = () => {
    return { type : ADD_TODO_SUCCESS }
}

export {
    addCount,
    subOne,
    addTodo,
    updateTodo,
    addTodoError,
    addTodoLoading,
    addTodoSuccess
}