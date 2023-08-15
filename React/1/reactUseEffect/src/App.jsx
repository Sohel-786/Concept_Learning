import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(0);

    useEffect(() =>{
      console.log('watching counter changes ')
    }, [counter])

    useEffect(() =>{
      console.log('watching age changes')
    }, [age])

    useEffect(() =>{
      console.log('watching empty array')
    }, [])

    useEffect(() =>{
      console.log('mounting')
    })

  return (
    <>
        <h1>Count : {counter}</h1>
        <h1>Age : {age}</h1>

        <button onClick={() => {
          setCounter(counter + 1);
        }}>Add</button>


        <button onClick={() => {
          setAge(Math.random());
        }}>Change Age</button>
    </>
  )
}

export default App
