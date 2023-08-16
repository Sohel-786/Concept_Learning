import { useEffect, useState } from "react";

function Counter(){
    const [count, setCounter] = useState(10);

    useEffect(() =>{

        let id = setInterval(() => {
            setCounter((value) => {
                if(value !== 0){   
                    return value - 1;
                }
                
                console.log(id);
                clearInterval(id);
                return 0;
            });
        }, 1000);

        return () =>{
            console.log('Unmounting phase');
            clearInterval(id)
        }

    }, []);


    return(
        <>
            Counter is : {count}
        </>
    )
}

export default Counter;