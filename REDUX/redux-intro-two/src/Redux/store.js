import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './Todos/reducer';

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
    counter : 0,
    todos: {
        IsLoading : false,
        IsError : false,
        data : []
    }
}

export const store = configureStore( {reducer :todosReducer , preloadedState : InitialState});

store.subscribe(() => {
    console.log('changes occured');
})