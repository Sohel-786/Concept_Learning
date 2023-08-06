import { useState } from "react";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";

function Todos() {

    const [todoList, setList] = useState([]);

    function handlePushtodo(data) {
        setList([...todoList, data]);
    }

    function handleTodo(el) {

        if(el.status) {

            el.status = false;
            setList([...todoList])

        }else{

            el.status = true;
            setList([...todoList])
        }
    }

    return <div>

        <TodosInput handlePushtodo={handlePushtodo}/>
        <TodosList list={todoList} handletodo={handleTodo} />

    </div>
}

export default Todos;