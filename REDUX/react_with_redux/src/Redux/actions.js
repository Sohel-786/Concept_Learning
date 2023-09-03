import { ADD_COUNT, ADD_TODO, SUB_ONE } from './actionTypes.js'

const addCount = (data) => {
    return { type : ADD_COUNT, payload : data };
}

const subOne = (data) => {
    return { type : SUB_ONE, payload : data };
}

const addTodo = (data) => {
    return { type : ADD_TODO, payload : data };
}

export {
    addCount,
    subOne,
    addTodo
}