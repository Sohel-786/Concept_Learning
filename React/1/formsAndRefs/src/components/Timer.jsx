import { useEffect, useRef, useState } from "react";

function Timer() {

    const [counter , setCounter] = useState(0);
    let counterRef = useRef();

    useEffect(() =>{

        counterRef.current = setInterval(() =>{
            setCounter( (p) => p + 1)
        }, 5000);

    }, [])

    return (
        <>
            <h1>Count : {counter}</h1>  

            <button onClick={() =>{
                clearInterval(counterRef.current);
            }}>Pause</button> 
        </>
    )
}   

export default Timer;