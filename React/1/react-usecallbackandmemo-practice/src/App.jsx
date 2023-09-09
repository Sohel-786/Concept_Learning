
import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {

  const [list, setList ] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:3002/users').then((d) => d.json()).then((d)=> {
      setList(d);
    })

  }, []);

  return (
    <>
      <div>
          <Card  list={list}/>
      </div> 
    </>
  )
}

export default App;
