import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from "./actionTypes";

export const loginLoading = () => ({
    type : LOGIN_LOADING,   
});

export const loginSuccess  = (data) => ({
    type : LOGIN_SUCCESS, payload : data   
});

export const loginError = () => ({
    type : LOGIN_ERROR,   
}); 