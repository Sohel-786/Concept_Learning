import './App.css'
import { store } from './redux/store';
import  { addCount, addTodo, subOne } from './redux/actions.js'


function App() {
  

  return (
    <>
      <button
        onClick={() =>{
          store.dispatch(addCount(2));
          console.log(store.getState());
        }}
      >ADD</button>

      <button 
        onClick={() =>{
          store.dispatch(subOne(1));
          console.log(store.getState());
        }}
      >SUB</button>

      <button
         onClick={() =>{
          store.dispatch(addTodo({ id : 1, title : 'Learn Redux', status : false }));
          console.log(store.getState());
        }}
      >TODO</button>
    </>
  )
}

export default App
