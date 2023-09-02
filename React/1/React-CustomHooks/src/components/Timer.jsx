import { useEffect, useState } from "react";

// function useTimer(seconds){

//     const [time, setTime] = useState(false);
  
//     setTimeout(() =>{
//       setTime(true);
//       console.log('sohel');
//     }, seconds * 1000)
  
//     return time;
//   }


function useTimerEffect(seconds){

    const [time, setTime] = useState(false);
    
    useEffect(() =>{

       const id = setTimeout(() =>{

            setTime(true);
            console.log(time)
            console.log('sohel');

          }, seconds * 1000);

          return () => {
              clearTimeout(id);
              console.log('unmounting')
          };
        }, [seconds]);
        

    return time;

}   
  
export function Timer(){

    const timer = useTimerEffect(3);

    return (
        <>
            { timer ? 'Welcome': 'Loading....'}
        </>
    )
}