// // function Show(){
// //    fetch('https://reqres.in/ai/users?page=2')

// //     .then((response) =>{
// //         return response.json();
// //     }).then((re) =>{
// //         console.log(re.data);
// //     })

// //     .catch((err) =>{
// //         console.log(err);
// //     })
// // }

// async function Show(){
//    try{
//         let response = await fetch('https://reqres.in/api/users?page=2');
//         let data = await response.json();
//         console.log(data.data);
//    } catch(err){
//     console.log(err);
//    }
// }

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=abe99ee895c9a94800cc957300313970

async function Show() {
  try {
    let city = document.querySelector("#city").value;

    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abe99ee895c9a94800cc957300313970`
    );

    let data = await res.json();
    console.log(Math.round(data.main.temp - 273.15), data);
    handleContainer(data);
  } catch (err) {
    console.log(err);
  }
}

function handleContainer(data) {
  let container = document.getElementById("container");
  container.innerHTML = `<div style="color:blue;text-shadow:2px 2px; font-size:50px;font-weight : bold;">${Math.round(
    data.main.temp - 273.15
  )}<sup>o</sup></div> <div style="display:flex;flex-Direction:column;color: green;"><h1>${
    data.name
  }</h1><p style="font-weight:bold;font-size:20px;text-transform: capitalize;color:pink;">${data.weather[0].description}</p></div>`;

  container.style.padding = '50px';
  container.style.margin = '50px';

}
