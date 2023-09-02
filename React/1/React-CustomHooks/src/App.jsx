import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer';

function App() {

  const [ hide, setHidden ] = useState(false);

  return (
    <>
      { hide ? '' : <Timer /> }
      <button onClick={() => setHidden(true)} >Hide</button>
    </>
  )
}

export default App
