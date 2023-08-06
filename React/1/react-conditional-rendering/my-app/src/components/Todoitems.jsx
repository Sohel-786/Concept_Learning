function Todoitems({Todo, handleClick}) {

    let {todo, status} = Todo;

    return <div>
            <h1>{todo} - {status ? 'Done ' : 'Not Done'}</h1>

            <button onClick={() =>{
                handleClick(Todo);
            }}>{status ? 'Undone' : 'Done'}</button>

    </div>
}

export default Todoitems;