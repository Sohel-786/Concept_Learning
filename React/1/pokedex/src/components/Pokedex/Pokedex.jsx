//CSS Import
import Search from '../Search/Search';
import './pokedex.css';

function Pokedex() {
    return (
        <div className='wrapper'>
            <h1>Pokedex</h1>
            <Search />
        </div>
    )
}

export default Pokedex;