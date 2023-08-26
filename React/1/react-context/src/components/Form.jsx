import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"

function Form(){

    const { token, login } = useContext(AuthContext)
    return token ? ( <>
        <h1>Your token is : {token}</h1>
        <h2>Secret Data : 1,2,3</h2>
        <button onClick={login}>Log Out</button>
    </>) : (
        <>
            {'You are not Logged in please login first'}
            <button onClick={login}>Login</button>
        </>
    )
}

export default Form;