
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function handleCouter(e){

    if(count >= 0){
      if(e.target.innerHTML === 'ADD'){
        setCount(count + 1);
      }else{
        if(count > 0){

          setCount(count - 1);
        }
        
      }
    }
  }

  return (
    <>
      <div >
        <p>Count - {count}</p>
        <div>
          <button onClick={handleCouter}>ADD</button>
          <button onClick={handleCouter}>SUB</button>
        </div>
      </div>
    </>
  )
}

export default App
