import { useState } from "react"

const initialState = {
    name : "",
    age : ""
}

export default function Form() {

    const [formData, setFormdata] = useState(initialState);

    const handleChange = (e) =>{
        console.log(e.target.name);
    }

    return <div>
        <form>
            <input onChange={handleChange} name="name" type="text" placeholder="Enter your name" />
            <input onChange={handleChange} name="age" type="number" placeholder="Enter your age" />
        </form>
    </div>
}