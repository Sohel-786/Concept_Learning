import './App.css'
import Form from './components/Forms/Form'

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
          <Form onSubmit={handleLogin}>
            <input type="text" placeholder='Sign In'/>
            <input type="submit" value='Login'/>
          </Form>

          <Form onSubmit={handleSignUp}>
            <input type="text" placeholder='Sign Up'/>
            <input type="submit" value='SignUp'/>
          </Form>
      </div>
    </>
  )
}

export default App
