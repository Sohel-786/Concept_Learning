import './App.css'
import Counter from './components/Counter';
import { Link, Route, Routes } from 'react-router-dom';
import Todos from './components/Todos';
import Button from './components/Button';

function App() {
  return (
    <div className='flex justify-center items-center flex-col w-screen'>
        <nav>
          <Link to={'/counter'} ><Button text={'Counter'} /></Link>
          <Link to={'/todos'} ><Button text={'Todos'} /></Link>
        </nav> 
      <Routes>
          <Route path='/' element ={<h1>Welcome</h1>}></Route>
          <Route path='/counter' element={<Counter />} />
          <Route path='/todos' element={ <Todos />}/>
      </Routes>
    </div>
  )
}

export default App
