export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_COUNT":
      return {
        ...state,
        counter: state.counter + payload,
      };

    case "SUB_ONE":
      return {
        ...state,
        counter: state.counter - payload,
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { ...payload }],
      };

    case "UPDATE_TODO":
      function UpdateTodo(id) {
        console.log(id);
        state.todos.forEach((el) => {
            if(el.id === id){
               el.status =  el.status ? false : true;
            }
        })
        return {
          ...state,
        };
      }
      UpdateTodo(payload);

    case "ADD_TODO_LOADING" : return {
        ...state,
        todos : {
            ...state.todos,
            IsLoading : true
        }
    };

    case "ADD_TODO_SUCCESS" : return {
        ...state,
        todos : {
            ...state.todos,
            IsLoading : false
        }
    };

    case "ADD_TODO_ERROR" : return {
        ...state,
        todos : {
            ...state.todos,
            IsLoading : false,
            IsError : true
        }
    };

    default:
      return {
        ...state,
      };
  }
};
