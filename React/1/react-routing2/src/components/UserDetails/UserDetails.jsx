import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails(){

    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() =>{
        getData();
    }, []);

    async function getData(){
            const  { data } = await axios.get(`https://reqres.in/api/users/${id}`);
            setData(data.data);
    }

    return(
        <>
        
            { data && <div>
                <img src={data.avatar} alt="avatar" />
                <h1>{data.first_name} {data.last_name}</h1>
                <h3>{data.email}</h3>
            </div>}
        </>
    )
}

export default UserDetails;