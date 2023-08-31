function appendlocation(el){

    let data = document.getElementById("data");
    let div = document.createElement("div");

    let place = document.createElement("h1");
    place.innerText = el.name;

    let rating = document.createElement("p");
    rating.innerHTML = "&#11088; 10/" + el.rating;

    let image = document.createElement("img");
    image.src = el.img;

    div.append(image,place,rating);
    data.append(div);
}


function showvisited() {

    let storeddata = JSON.parse(localStorage.getItem('visited'));
    storeddata.forEach(el => {
        appendlocation(el);
    });
}

console.log("my name is sohel")
showvisited();