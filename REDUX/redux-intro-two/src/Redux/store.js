import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers, applyMiddleware } from "redux";
import { todosReducer } from "./Todos/reducer";
import { authReducer } from "./Auth/reducer";

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

// const rootReducer = combineReducers({
//   auth: authReducer,
//   todos: todosReducer,
// });

// const middleware2 = (store) => (next) => (action) => {
//     if(typeof action === 'function') {
//         return action(store.dispatch);
//     }
//   return next(action);
// };

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  }
});

// store.subscribe(() => {
//     console.log('changes occured');
// })
