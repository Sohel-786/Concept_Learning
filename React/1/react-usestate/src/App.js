import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const addition = () => {
    setCount(count + 1);
  }
  const substraction = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h2>Count : {count} </h2>

      <div>
        
        <button onClick={addition}> + </button>
        <button onClick={substraction}> - </button>
      </div>
    </>
  );
}

export default App;
