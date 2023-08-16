import { useEffect, useState } from "react"
import { nanoid } from "nanoid";

export function Todo(){

    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {

       getTodos();

    }, [page]);


    function getTodos(){
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`)
        .then((data) =>{
            return data.json()
        })
        .then((data) => {
            setTodoList(data);
        })
    };

    function handleChange(e){
        setText(e.target.value);
    }

    function handleTodo(){
        let data = { title : text, status : false, uid : nanoid(4)};

        fetch('http://localhost:3001/todos', {
            method : 'POST',
            body : JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json",
            }
        }).then(() =>{
            getTodos();
        })

        setText('');
    }

    return (
        <>
            <input onChange={handleChange} type="text" value={text} />
            <button onClick={handleTodo}>Add Todo</button>

            {
                   todoList.map((el) => {
                        return <div key={el.uid}>
                            {el.title} 
                            <button>{el.status ? 'Undone' : 'Done'}</button>
                        </div>
                   }) 
            }

            <button onClick={() =>{
                setPage( page - 1);
            }}>Prev Page</button>

            <button onClick={() =>{
                setPage( page + 1);
            }}>Next Page</button>
        </>
    )
}