import { useState } from "react"

const Todos = () =>{

    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    function handleChange(e){    
        setText(e.target.value);
    }

    function handleTodo(){    
        setList([...list, { status : false, todo: text}]);
        setText('');
    }

    return <div>
        
        <input value={text} onChange={handleChange} type="text" placeholder="Add Todo" /> <br />
        <button onClick={handleTodo}>Add</button>

        <ul>
            {list.map((e) => {
                return <li key={e}>{e.todo} :- {e.status ? 'Done' : 'Not Done'}</li>
            })}
        </ul>
    </div>
}

export {
    Todos
}