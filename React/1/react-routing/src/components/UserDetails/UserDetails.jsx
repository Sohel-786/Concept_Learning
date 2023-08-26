import { useParams } from "react-router-dom";

function UserDetails(){
    const { id } = useParams();

    return(<>
        <h1>Hello User :- {id}</h1>
    </>)
}

export default UserDetails;