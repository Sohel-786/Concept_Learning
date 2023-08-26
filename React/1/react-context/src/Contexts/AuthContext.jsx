import { createContext, useState } from "react"

export const AuthContext = createContext({ token : '' ,login : function(){}})

export function AuthContextProvider({children}){

    const [token, setToken] = useState('')

    return <AuthContext.Provider value={{ token , login : function(){
        
            setToken( token ? '' : 'jsefksnsdfjsdfbn121');

    }}}>{children}</AuthContext.Provider>
}

