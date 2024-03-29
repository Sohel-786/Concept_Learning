import { useEffect, useState } from 'react'

import './App.css'
import Counter from './components/Counter'
import { Todo } from './components/Todo';

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className='App'>
        {/* { (show) ? (
          <>
          <Counter />
          <button onClick={() =>{
            setShow(false)
          }}>Hide Counter</button>
          </>
        ) :
         (
          <button onClick={() =>{
            setShow(true)
          }}>Show Counter</button>
         )
        } */}

        <Todo />
    </div>
  )
}

export default App
