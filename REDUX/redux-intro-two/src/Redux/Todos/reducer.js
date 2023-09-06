import { GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS } from "./actionTypes";

const InitialState = {
  counter : 0,
  todos: {
      IsLoading : false,
      IsError : false,
      data : [],
      IsUpdating : false,
      IsErrorUpdating : false
  }
}

export const todosReducer = (state = InitialState, { type, payload }) => {
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

    case GET_TODO_LOADING : return {
        ...state,
        todos : {
            ...state.todos,
            IsLoading : true
        }
    };

    case GET_TODO_SUCCESS : return {
        ...state,
        todos : {
            ...state.todos,
            IsLoading : false,
            data : [...payload]
        }
    };

    case GET_TODO_ERROR : return {
        ...state,
        todos : {
            ...state.todos,
            IsError : true,
            IsLoading : false
        }
    };

    case UPDATE_TODO_LOADING : return {
      ...state,
      todos :{
        ...state.todos,
        IsUpdating : true
      }
    }

    case UPDATE_TODO_SUCCESS : return {
      ...state,
      todos :{
        ...state.todos,
        IsUpdating : false
      }
    }

    case UPDATE_TODO_ERROR : return  {
      ...state,
      todos :{
        ...state.todos,
        IsUpdating : false,
        IsErrorUpdating : true
      }
    }

    default:
      return {
        ...state,
      };
  }
};
