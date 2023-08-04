import { useState } from "react"

const Todos = () =>{

    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    function handleChange(e){    
        setText(e.target.value);
    }

    function handleTodo(){    
        setList([...list, text]);
    }

    return <div>
        
        <input onChange={handleChange} type="text" placeholder="Add Todo" /> <br />
        <button onClick={handleTodo}>Add</button>

        <ul>
            {list.map((el) => (
                <li key={el} >{el}</li>
            ))}
        </ul>
    </div>
}

export {
    Todos
}