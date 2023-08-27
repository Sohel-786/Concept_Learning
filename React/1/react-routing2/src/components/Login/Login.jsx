import axios from "axios";
import './login.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Navigate } from 'react-router-dom'

function Login(){
    const [formData, setFormdata] = useState({})
    const { handleToken } = useContext(AuthContext);

    function handleChange(e){
        const { name, value } = e.target;

        setFormdata({
            ...formData,
            [name] : value
        })
    }

    function handleLogin(e){
        e.preventDefault();
        axios.post('https://reqres.in/api/login', formData).then((data) =>{
            handleToken(data.data.token);
            console.log('login Successful')
        }).catch(console.error());
    }

    return (
        <form>
            <input onChange={handleChange} type="text" placeholder="Enter email" name='email' />
            <input onChange={handleChange} type="password" placeholder="Enter password" name='password' />
            <button className="button-21" onClick={handleLogin}>Login</button>
        </form>
    )
}

export default Login;