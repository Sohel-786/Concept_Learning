import { useEffect, useState } from "react";

function Counter(){
    const [count, setCounter] = useState(0);

    useEffect(() =>{

        setInterval(() => {
            console.log('Change')
            setCounter(count + 1);
            console.log(count)
        }, 1000);

    }, []);


    return(
        <>
            Counter is : {count}
        </>
    )
}

export default Counter;