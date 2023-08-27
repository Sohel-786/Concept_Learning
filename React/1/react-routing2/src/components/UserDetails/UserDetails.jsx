import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import './userdetails.css'
import { AuthContext } from "../../Contexts/AuthContext";

function UserDetails(){

    const [data, setData] = useState({});
    const { id } = useParams();
    const { token } = useContext(AuthContext);

    useEffect(() =>{
        getData();
    }, []);

    async function getData(){
            const  { data } = await axios.get(`https://reqres.in/api/users/${id}`);
            setData(data.data);
    }

    if(!token) {
        return <Navigate to='/Login' />;
    }

    return(
        <>
           <div className="card">
                <img src={data.avatar} alt="avatar" />
                <h1>{data.first_name} {data.last_name}</h1>
                <h3>Contact : {data.email}</h3>
            </div>
        </>
    )
}

export default UserDetails;