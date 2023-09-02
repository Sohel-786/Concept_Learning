import { useReducer } from 'react';
import './App.css'

const reducer = ( state , {type , payload}) => {
    switch(type){
      case 'ADD_COUNT' : return {
        ...state, 
        count : state.count + payload
      };
      default : return {
        ...state
      }
    }
}

const initialState = {
  count : 0
}

function App() {

  const [ state, dispatch ] = useReducer( reducer , initialState)

  return (
    <>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({type : 'ADD_COUNT' , payload : 1 })} >ADD 1</button>
    </>
  )
}

export default App
