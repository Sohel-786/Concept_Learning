import { useEffect, useRef, useState } from "react";

function Timer() {

    const [counter , setCounter] = useState(0);
    const counterRef = useRef(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        
        startTimer();

    }, []);

    function startTimer(){

        if(started) {
            console.log('sohel');
            return;
        }

        setStarted(true);
        counterRef.current = setInterval(() =>{
            setCounter((p) => p + 1);
        }, 1000)
    }

    return (
        <>
            <h1>Count : {counter}</h1>  

            <button onClick={() =>{

                setStarted(false);
                clearInterval(counterRef.current);

            }}>Pause</button> 

            <button onClick={() =>{

                startTimer();

            }}>Start</button> 


            <button onClick={() =>{

                setCounter(0);
                clearInterval(counterRef.current);
                setStarted(false);
                
            }}>Reset</button> 
        </>
    )
}   

export default Timer;