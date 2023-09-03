export const reducer = (state, { type , payload}) => {
    switch(type){
        case 'ADD_COUNT' : return {
            ...state,
            counter : state.counter + payload
        };

        case 'SUB_ONE' : return {
            ...state,
            counter : state.counter - payload
        };

        case 'ADD_TODO' : return {
            ...state,
            todos : [ ...state.todos , { ...payload } ]
        };

        default : return {
            ...state
        }
    }
}