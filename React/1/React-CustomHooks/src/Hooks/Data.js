import { useEffect, useState } from "react"

function Data(url){

    const [ dataStates,  setDataStates] = useState({
        loading : false,
        data : [],
        error : false
    })

    useEffect(() =>{

        fetch(url).then((d) => d.json()).then((d) =>{
            setDataStates({...dataStates , loading : true, data : d.items});
        }).catch((err) => setDataStates({...dataStates, error : err}));

    }, []);

   

    return dataStates;
}

export default Data;