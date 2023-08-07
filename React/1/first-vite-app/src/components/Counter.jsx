import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    function handleCounter(e){

        if(count >= 0){
        if(e.target.innerHTML === 'ADD'){
            setCount(count + 1);
        }else{
            if(count > 0){

            setCount(count - 1);
            }
            
        }
        }
    }

    return (
        <div >
            <p>Count - {count} Is an { (count%2===0) ? 'Even' : 'Odd'} value</p>
            <div>
            <button onClick={handleCounter}>ADD</button>
            <button onClick={handleCounter}>SUB</button>
            </div>
        </div>
    )
}