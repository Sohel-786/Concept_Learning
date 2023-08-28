import './App.css'
import UserList from './components/UserList/UserList';
import UserDetails from './components/UserDetails/UserDetails';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {

  const navigate = useNavigate();

  return (
    <>
         <div>
          <Navbar list={['Home' ,'About', 'Users', 'Products', 'Contact Us', 'Login', 'About Site']}/>
        </div>
        <br />
        <br />
        <br />

        <Routes>

          <Route path='/' element={<> <h1>Home Page</h1> <button onClick={() =>{
            navigate(-1);
          }}>Go Back</button></>} />
          <Route path='/About' element={<h1>About Page</h1>} />
          <Route path='/Users' element={<UserList />} />
          <Route path='/Products' element={<h1>Products Page</h1>} />
          <Route path='/Contact Us' element={<h1>Contact Page</h1>} />
          <Route path='/About Site' element={<h1>About Site Page</h1>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/users/:id' element={<UserDetails />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        
        </Routes>
    </>
  )
}

export default App
