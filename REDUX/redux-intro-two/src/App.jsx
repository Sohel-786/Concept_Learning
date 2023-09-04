import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addCount } from './Redux/actions';

function App() {

  const counter = useSelector((store) => {
    return store.counter;
  })

  const dispatch = useDispatch();

  return (
    <>
        <h1>Count : {counter}</h1>
        <button onClick={ () => {
          dispatch(addCount(1))
        }}>ADD</button>
    </>
  )
}

export default App
