import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function UserList(){

    const [info , setInfo] = useState();

    useEffect(() =>{
            axios.get('https://reqres.in/api/users?page=2').then((details) =>{
               const { data } = details.data;
               setInfo(data);
            })
    }, [])

    return (
        <>
        
        { info && info.map((el, i) => <li key={i}><Link to={`/users/${el.id}`}>{el.first_name} {el.last_name}</Link></li>)}
        </>
    )
}

export default UserList;