import { useState } from "react"

export default function Form() {

    const [formData, setFormdata] = useState({});

    const handleChange = (e) =>{
        const {name, value} = e.target;

        setFormdata({
            ...formData,
            [name] : value
        })
    }


    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
    }

    return <div>
        <form  onSubmit={handleSubmit}>
            <input onChange={handleChange} name="name" type="text" placeholder="Enter your Name" />
            <input onChange={handleChange} name="age" type="number" placeholder="Enter your Age" />
            <input onChange={handleChange} name="email" type="email" placeholder="Enter your Email" />
            <input type="submit" value="Submit"/>
        </form>
    </div>
}