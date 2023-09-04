import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/actions";
import { nanoid } from "nanoid";

function Todos(){

    const [text, setText] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return(
        <>
                  <form onSubmit={(e) =>{
                         e.preventDefault();
                         dispatch(addTodo({id:nanoid() , title : text}));
                    }}>
                <input onChange={(e) =>{

                    setText(e.target.value);

                }} type="text" placeholder="Enter Your Todo" value={text}/>
                <button type="submit">ADD TODO</button>
            </form>

            {
                todos.map((el) => {
                   return <div key={el.id}> 
                                <h3>{el.title}</h3> 
                            </div> 
                })
             }        
        </>


    )
}

export default Todos;