import { ADD_COUNT, ADD_TODO, SUB_ONE, UPDATE_TODO } from './actionTypes.js'

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

export {
    addCount,
    subOne,
    addTodo,
    updateTodo
}