
class Store {
    constructor(reducerFn, InitialState){
        this.reducer = reducerFn;
        this.state = InitialState;
    }

    getState(){
        return this.state;
    }
}

const reducer = (store, action) => {
    return store;
}

const InitialState = {
    counter : 0
}

const store = new Store( reducer , InitialState);

console.log(store.getState());