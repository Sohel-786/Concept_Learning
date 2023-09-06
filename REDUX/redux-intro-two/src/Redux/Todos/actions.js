import { ADD_COUNT, ADD_TODO, SUB_ONE, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_LOADING, GET_TODO_ERROR, GET_TODO_SUCCESS, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS, UPDATE_TODO_ERROR } from './actionTypes.js'

const addCount = (data) => {
    return { type : ADD_COUNT, payload : data };
}

const subOne = (data) => {
    return { type : SUB_ONE, payload : data };
}

const addTodo = (data) => {
    return { type : ADD_TODO, payload : data };
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


const getTodoLoading = () => {
    return { type : GET_TODO_LOADING }
}

const getTodoError = (err) => {
    return { type : GET_TODO_ERROR, payload : err};
}

const getTodoSuccess = (data) => {
    return { type : GET_TODO_SUCCESS, payload : data }
}

const updateTodoLoading = () => {
    return { type : UPDATE_TODO_LOADING }
}

const updateTodoSuccess = () => {
    return { type : UPDATE_TODO_SUCCESS }
}

const updateTodoError = () => {
    return { type : UPDATE_TODO_ERROR }
}

export {
    addCount,
    subOne,
    addTodo,
    addTodoError,
    addTodoLoading,
    addTodoSuccess,
    getTodoLoading,
    getTodoError,
    getTodoSuccess,
    updateTodoError,
    updateTodoLoading,
    updateTodoSuccess
}