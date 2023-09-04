import './App.css'
import Counter from './components/Counter';
import { Link, Route, Routes } from 'react-router-dom';
import Todos from './components/Todos';

function App() {
  return (
    <div>
        <nav>
          <Link to={'/counter'}><button>Counter</button></Link>
          <Link to={'/todos'}><button>Todos</button></Link>
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
