import { useDispatch, useSelector } from "react-redux"
import { addCount } from '../Redux/Todos/actions'
import Button from "./Button";

export default function Counter(){

    const counter = useSelector((state) => state.todos.counter);
    const dispatch = useDispatch();

    return (
        <>
            <h1 className="text-3xl text-gray-600 font-bold">Count : {counter}</h1>
            <Button onClick={() => {
                 dispatch(addCount(1))
            }} text={'ADD 1'} />
        </>
    )
}