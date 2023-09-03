// import { configureStore } from '@reduxjs/toolkit'
import pkg from '@reduxjs/toolkit'
import { reducer } from './redux/reducer.js';
import  { addCount, addTodo, subOne } from './redux/actions.js'

const { configureStore } = pkg;

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

const InitialState = {
    counter : 1,
    todos: []
}

const store = configureStore( {reducer , preloadedState : InitialState});

console.log(store.getState());

store.dispatch(addCount(2));

console.log(store.getState());

store.dispatch(subOne(1));

console.log(store.getState());

store.dispatch(addTodo({ id : 1, title : 'Learn Redux', status : false }));

console.log(store.getState());