import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [list, setList] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    getTodo();
  }, []);

  function getTodo() {
    fetch("http://localhost:3001/users")
      .then((d) => d.json())
      .then((d) => {
        setList(d);
      });
  }

  function handleChange(e){
    const { name, value } = e.target;

    setData({
      ...data,
      [name] : value
    })
  }

  function handleSubmit(){
    console.log(data);
    fetch('http://localhost:3001/users',{
      method : "POST",
      body : JSON.stringify(data),
      headers : {
        "Content-type": "application/json"
      }
    }).then((d) => {
        
        setList([...list, {...data} ])

    }).catch((e) =>{
      console.log(e.message)
    })
  }

  return (
    <>
      <div>
        <div style={{
          backgroundColor : 'green',
          color : 'blue',
          display : "flex",
          flexDirection : 'column',
          gap : '20px',
          padding : '30px',
          margin : '50px'
        }}>
          <input onChange={handleChange} type="text" placeholder="Enter First Name" name="first_name"/>
          <input onChange={handleChange} type="text" placeholder="Enter Last Name" name="last_name"/>
          <input onChange={handleChange} type="text" placeholder="Enter Role" name="role"/>
          <button style={{
            padding : '10px 25px',
            fontSize : '25px',
            backgroundColor : 'skyblue',
            color: 'white'
          }} onClick={handleSubmit}>Submit</button>
        </div>
        <Card list={list} />
      </div>
    </>
  );
}

export default App;
