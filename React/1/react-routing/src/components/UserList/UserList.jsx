import { Link } from "react-router-dom";

function UserList(){
    return (
        <>
        
        {[1,2,3,4].map((el) => <li key={el}><Link to={`/users/${el}`}>User-{el}</Link></li>)}
        </>
    )
}

export default UserList;