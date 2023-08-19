import { useRef, useState } from "react";

function Forms(){

    const [data, setData] = useState({});
    const uplaodRefs = useRef(null);

    function handleSubmit(e){
        e.preventDefault();    
        console.log(data);   
    }

    function handleChange(e){

        const { name , value, type, checked } = e.target;
        console.log(uplaodRefs.current.files);

        setData({
            ...data,
            [name] : type === 'checkbox' ? checked : value,
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name='username' placeholder="Username" required /> <br />
            <input onChange={handleChange} type="text" name='Age' placeholder="Age" required/> <br />
            Are you Married ?<input onChange={handleChange} type="checkbox" name='IsMarried' /><br />
            <select name="country" onChange={handleChange}>
                <option value='India'>India</option>
                <option value='Canada'>Canada</option>
                <option value='Usa'>Usa</option>
            </select>
            <input type="file" onChange={handleChange} ref={uplaodRefs}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Forms;