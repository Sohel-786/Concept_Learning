import './App.css';
import Category from './components/Categories';

function App() {

  const data = [
    { url :"https://rukminim1.flixcart.com/flap/173/173/image/29327f40e9c4d26b.png?q=100", title:"Grocery"},
    { url :"https://rukminim1.flixcart.com/flap/173/173/image/22fddf3c7da4c4f4.png?q=100", title:"Mobile"}
  ]

  return (
    <div>

      {data.map((el) => (
        <Category imageUrl={el.url} title={el.title}/>
      ))}

    </div>
  )

}

export default App;
