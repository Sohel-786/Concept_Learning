import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes"

const InitialState = {
    loading : false,
    error : false,
    token : ''
}

export const authReducer = (state = InitialState , { type , payload }) => {
    switch(type){
        case LOGIN_LOADING : return {
            ...state,
            loading : true
        };

        case LOGIN_SUCCESS : return {
            ...state,
            loading : false,
            token : payload
        };

        case LOGIN_ERROR : return {
            ...state,
            loading : false,
            error : true
        };

        default : return {
            ...state
        }
    }
}