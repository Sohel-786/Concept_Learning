import { createContext } from "react"

export const AuthContext = createContext({login : function(){}})

export function AuthContextProvider({children}){
    return <AuthContext.Provider value={{login : function(){
        console.log('You are currently Logged In')
    }}}>{children}</AuthContext.Provider>
}

