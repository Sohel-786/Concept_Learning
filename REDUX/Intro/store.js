const reducer = (state, { type , payload}) => {
    switch(type){
        case 'ADD_COUNT' : return {
            ...state,
            counter : state.counter + payload
        };

        case 'SUB_ONE' : return {
            ...state,
            counter : state.counter - payload
        };

        default : return{
            ...state
        }
    }
}

class Store {
    constructor(reducerFn, InitialState){
        this.reducer = reducerFn;
        this.state = InitialState;
    }

    getState(){
        return this.state;
    }

    Dispatcher(action){
       this.state = this.reducer(this.state, action);
    }
}


const InitialState = {
    counter : 0
}

const store = new Store( reducer , InitialState);

console.log(store.getState());

store.Dispatcher({ type : 'ADD_COUNT', payload : 1});

console.log(store.getState());

store.Dispatcher({ type : 'SUB_ONE', payload : 1});

console.log(store.getState());