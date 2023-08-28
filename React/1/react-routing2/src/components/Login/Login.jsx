import axios from "axios";
import './login.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from 'react-router-dom'

function Login(){
    const [formData, setFormdata] = useState({})
    const { handleToken } = useContext(AuthContext);
    // const [ dummyToken, setdummyToken] = useState();

    const Navigate = useNavigate();
    console.log(Navigate)

    function handleChange(e){
        const { name, value } = e.target;

        setFormdata({
            ...formData,
            [name] : value
        })
    }

    async function handleLogin(e){
        e.preventDefault();
        
        const data = await axios.post('https://reqres.in/api/login', formData);

        handleToken(data.data.token);

        // setdummyToken(data.data.token);
        Navigate('/');

    }

    // if(dummyToken){
    //     return <Navigate  to={'/'} />
    // }

    return (
        <form>
            <input onChange={handleChange} type="text" placeholder="Enter email" name='email' />
            <input onChange={handleChange} type="password" placeholder="Enter password" name='password' />
            <button className="button-21" onClick={handleLogin}>Login</button>
        </form>
    )
}

export default Login;