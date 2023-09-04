import { useDispatch, useSelector } from "react-redux"
import { addCount } from '../Redux/actions';

export default function Counter(){

    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Count : {counter}</h1>
            <button onClick={ () => {
            dispatch(addCount(1))
            }}>ADD</button>
        </>
    )
}