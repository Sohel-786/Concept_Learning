import axios from 'axios';
import { ADD_COUNT, ADD_TODO, SUB_ONE, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_LOADING, GET_TODO_ERROR, GET_TODO_SUCCESS, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS, UPDATE_TODO_ERROR } from './actionTypes.js'
import { nanoid } from 'nanoid';

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

const getTodoAction = () => async (dispatch) => {
    dispatch(getTodoLoading());
    try {
        
        const res = await axios.get('http://localhost:3001/todos');
        dispatch(getTodoSuccess(res.data));

    } catch (err) {
        dispatch(getTodoError())
    }
  }

const handleTodostatusAction = (id,status) => async (dispatch) => {
    dispatch(updateTodoLoading());
    try{

       await axios.patch(`http://localhost:3001/todos/${id}`, { status : !status })
       const res = await axios.get('http://localhost:3001/todos');
       dispatch(updateTodoSuccess());
       dispatch(getTodoSuccess(res.data));

    }catch(err){
        dispatch(updateTodoError());
    }   
}

const addTodoAction = (text) => async (dispatch) => {
    dispatch(addTodoLoading());

    try {
      await axios.post("http://localhost:3001/todos", {
        uid: nanoid(),
        title: text,
        status: false,
      });

      dispatch(addTodoSuccess());
      dispatch(getTodoAction());
    } catch (err) {
      dispatch(addTodoError());
    }
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
    updateTodoSuccess,
    getTodoAction,
    handleTodostatusAction,
    addTodoAction
}