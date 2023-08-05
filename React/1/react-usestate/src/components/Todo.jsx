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

    function handleClick(el, i){

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

        <ul>
            {list.map((el,i) => {

                return <li key={el.todo} >{el.todo} - {el.status ? 'Done ' : 'Not Done '} 
                    <button onClick={() =>{
                    handleClick(el, i)
                }}>{el.status ? 'Undone' : 'Done'}</button></li>

            })}
        </ul>
    </div>
}

export {
    Todos
}