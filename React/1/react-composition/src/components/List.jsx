import { useState } from 'react';
import { Li } from './styled/Li';



function List({list}) {
    const [theme, setTheme] = useState('light');
    return (
        <ul className="nav_list">
            {
                list.map((el, i) => <Li theme={theme} key={i}>{el}</Li>)
            }
        </ul>
    )
}

export default List;