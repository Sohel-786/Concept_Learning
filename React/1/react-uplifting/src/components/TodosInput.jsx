import { useState } from "react";
import { nanoid } from 'nanoid';

function TodosInput({handlePushtodo}) {


    const [text, setText] = useState('');

    function handleChange(e){
        setText(e.target.value);
    }


    return <div>
        <input type="text" placeholder="Add your Todo" onChange={handleChange} value={text}/>
        <button onClick={() =>{
            
            const data = {status : false, todo : text, id : nanoid(4)}
            handlePushtodo(data);
            setText('');

        }}>ADD</button>
    </div>
}

export default TodosInput;