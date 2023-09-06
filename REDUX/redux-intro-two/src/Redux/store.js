import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { todosReducer } from './Todos/reducer';
import { authReducer } from './Auth/reducer';

// class Store {
//     constructor(reducerFn, InitialState){
//         this.reducer = reducerFn;
//         this.state = InitialState;
//     }

//     getState(){
//         return this.state;
//     }

//     Dispatch(action){
//        this.state = this.reducer(this.state, action);
//     }
// }

const rootReducer = combineReducers({
    auth : authReducer,
    todos : todosReducer
})

const middleware = (store) => (next) => (actions) => {
    console.log('actions middleware one' , actions);
    return next(actions)
}

const middleware2 = (store) => (next) => (actions) => {
    console.log('actions middleware 2' , actions);
    return next(actions)
}

export const store = configureStore( {reducer : {
    auth : authReducer,
    todos : todosReducer
} , middleware : [middleware, middleware2]});

console.log(store.getState());

// store.subscribe(() => {
//     console.log('changes occured');
// })