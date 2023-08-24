import './App.css'
import Form from './components/Forms/Form'
import List from './components/List';
import Navbar from './components/Navbar/navbar';

function App() {

  function handleLogin(e){
    e.preventDefault();
    console.log('Login Successful')
  }

  function handleSignUp(e){
    e.preventDefault();
    console.log('Sign Up Successful')
  }

  return (
    <>
      <div className='App'>

          <Navbar>
              <div>Logo</div>
              <div>
                <List list={['About', 'Start', 'Prices', 'Products' ,'Contact Us']} />
              </div>
          </Navbar>
          
          <div className='form'>

            <Form onSubmit={handleLogin} title='Sign In'>
              <input type="text" placeholder='Enter your username or email'/>
              <input type="password" placeholder='Enter your password'/>
              <input type="submit" value='Login'/>
            </Form>

            <Form onSubmit={handleSignUp} title='Sing Up'>
              <input type="email" placeholder='Enter your email'/>
              <input type="text" placeholder='Enter your Name'/>
              <input type="text" placeholder='Choose a username'/>
              <input type="password" placeholder='Choose a strong password'/>
              <input type="submit" value='SignUp'/>
            </Form>

          </div>  
      </div>
    </>
  )
}

export default App
