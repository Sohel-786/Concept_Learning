import { useState } from "react"
import { nanoid } from "nanoid";

export function Todo(){

    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState('');

    function handleChange(e){
        setText(e.target.value);
    }

    function handleTodo(){
        let data = { title : text, status : true, id : nanoid(4)};

        setTodoList([...todoList, data]);

        setText('');
    }

    return (
        <>
            <input onChange={handleChange} type="text" value={text} />
            <button onClick={handleTodo}>Add Todo</button>

            {
                   todoList.map((el) => {
                        return <div key={el.id}>
                            {el.title} 
                            <button>{el.status ? 'Done' : 'Undone'}</button>
                        </div>
                   }) 
            }
        </>
    )
}