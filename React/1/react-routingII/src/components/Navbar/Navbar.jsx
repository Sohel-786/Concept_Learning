import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar({list}){

    return (
        <nav>
            {
                list.map((el, i) => {
                    return <Link key={i} to={ el ==='Home' ?  '/' : `/${el}`}>
                             <li >{el}</li>
                    </Link>
                })
            }
        </nav>
    )
}

export default Navbar;