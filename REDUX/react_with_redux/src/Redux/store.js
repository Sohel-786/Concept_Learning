import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer';


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

export const store = configureStore( {reducer , preloadedState : InitialState});

