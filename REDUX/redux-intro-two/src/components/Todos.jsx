import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/actions";
import { nanoid } from "nanoid";
import Button from "./Button";

function Todos(){

    const [text, setText] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return(
        <>
            <form className="w-7/12 flex flex-col justify-center items-center" onSubmit={(e) =>{
                         e.preventDefault();
                         dispatch(addTodo({id:nanoid() , title : text, status : false}));
                    }}>
                <input className="px-4 py-3 w-2/3" onChange={(e) =>{

                    setText(e.target.value);

                }} type="text" placeholder="Enter Your Todo" value={text}/>
                <Button text={'ADD'} />
            </form>

            {
                todos.map((el) => {
                   return <div key={el.id} className="w-52 flex flex-col    justify-center items-center bg-slate-600 text-white font-mono rounded-xl"> 
                                <h3>{el.title}</h3>
                                <p>Status:{ el.status ? 'Completed' : 'Pending'}</p> 
                            </div> 
                })
             }        
        </>


    )
}

export default Todos;