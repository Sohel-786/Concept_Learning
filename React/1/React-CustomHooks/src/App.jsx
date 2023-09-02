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

function useDebounce(cb, delay){

  let debounce;

  return (arg) =>{
      debounce && clearTimeout(debounce);

      debounce = setTimeout(() =>{
          cb(arg);
      }, delay);
  }
}

function App() {

  const [ state, dispatch ] = useReducer( reducer , initialState);

  function handleChange(e){
    e.target.value && console.log(e.target.value);
  }

  const debounce = useDebounce(handleChange, 300);

  return (
    <>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({type : 'ADD_COUNT' , payload : 1 })} >ADD 1</button>

      <input type="text" onChange={(e) => {
          debounce(e);
      }} />
    </>
  )
}

export default App
