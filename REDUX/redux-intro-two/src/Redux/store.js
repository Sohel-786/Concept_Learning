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



export const store = configureStore( {reducer : rootReducer});

console.log(store.getState());

// store.subscribe(() => {
//     console.log('changes occured');
// })