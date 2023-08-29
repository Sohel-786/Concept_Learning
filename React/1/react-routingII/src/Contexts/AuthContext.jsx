import { createContext, useState } from "react";

export const AuthContext = createContext({
    token : '',
    handleToken : () =>{}
})

export function AuthProvider({children}){
    const [token, setToken] = useState('');

    function handleToken(token){
        setToken(token);
    }

    return <AuthContext.Provider value={{token, handleToken}}>{children}</AuthContext.Provider>
}