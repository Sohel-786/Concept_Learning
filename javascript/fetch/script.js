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


async function Show(){

try{
    let city = document.querySelector('#city').value;

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abe99ee895c9a94800cc957300313970`);

    let data = await res.json();
    console.log(Math.round((data.main.temp) - 273.15), data);
}
catch(err){
    console.log(err);
    }
}