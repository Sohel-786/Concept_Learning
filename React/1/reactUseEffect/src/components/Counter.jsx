import { useEffect, useState } from "react";

function Counter(){
    const [count, setCounter] = useState(10);

    useEffect(() =>{

        let clear = setInterval(() => {
            setCounter((value) => {
                if(value !== 0){   
                    console.log(count);
                    return value - 1;
                }
                
                console.log(count);
                clearInterval(clear);
                return 0;
            });
        }, 1000);

    }, []);


    return(
        <>
            Counter is : {count}
        </>
    )
}

export default Counter;