import { useState } from 'react';
import './App.css';

import { Todos } from './components/Todo';

function App() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  function handleLoad(){
    setLoading(false);
    setError(true);
  }

  function handleErr(){
    setError(false);
  }

return loading ? (
      <div>
          Loading...
          <button onClick={handleLoad}>End Loading</button>
      </div>
    )
  : error ? (
      <div>
          Something Went Wrong
          <button onClick={handleErr}>Refresh</button>
      </div> )
  : (
    <>
      <Todos />
    </>
  );
}

export default App;
