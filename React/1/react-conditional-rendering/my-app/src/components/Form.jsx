import { useState } from "react"

export default function Form() {

    const [formData, setFormdata] = useState({});

    const handleChange = (e) =>{
        console.log(e.target.name);

        const {name, value} = e.target;

        setFormdata({
            ...formData,
            [name] : value
        })
    }

    return <div>
        <form>
            <input onChange={handleChange} name="name" type="text" placeholder="Enter your Name" />
            <input onChange={handleChange} name="age" type="number" placeholder="Enter your Age" />
            <input onChange={handleChange} name="email" type="email" placeholder="Enter your Email" />
        </form>
    </div>
}