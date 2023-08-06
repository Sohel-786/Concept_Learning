import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'; 
import Todoitems from "./Todoitems";

const Todos = () =>{

    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    function handleChange(e){    
        setText(e.target.value);
    }

    function handleTodo(){  
        let payload = { status : false, todo: text, id : uuidv4()}
        setList([...list, payload]);
        setText('');
    }

    function handleClick(el){

        if(el.status === false){
            el.status = true;
            setList([...list])
            
        }else{
            el.status = false;
            setList([...list])
            
        }
    }

    return <div>
        
        <input value={text} onChange={handleChange} type="text" placeholder="Add Todo" /> <br />
        <button onClick={handleTodo}>Add</button>

        {
            list.map((el) => {
                return <Todoitems key={el.id} Todo={el} handleClick={handleClick}></Todoitems>
            })
        }
    </div>
}

export {
    Todos
}