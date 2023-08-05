import { useState } from "react";

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