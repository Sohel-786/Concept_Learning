function storelocation(){
    let form = document.querySelector("form");
    let name = form.name.value;
    let rating = form.rating.value;
    let img = form.img.value;

    let location = {
        name,
        rating,
        img
    }

    let arr;
    arr = localStorage.getItem("locations");

    if(arr == null){
        arr = [];
    }
    else{
        arr = JSON.parse(arr);
    }

    arr.push(location);

    localStorage.setItem('locations', JSON.stringify(arr));    
    showlocations();
    clear_inputs();
}

function appendlocation(el){

    let data = document.getElementById("data");
    let div = document.createElement("div");

    let place = document.createElement("h1");
    place.innerText = el.name;

    let rating = document.createElement("p");
    rating.innerHTML = "&#11088; 10/" + el.rating;

    let image = document.createElement("img");
    image.src = el.img;

    let btn = document.createElement("button");
    btn.innerText = "Add to Visited";
    btn.addEventListener("click", function(){ addtovisited(el) })

    div.append(image,place,rating,btn);
    data.append(div);
}

function showlocations() {

    let storeddata = JSON.parse(localStorage.getItem('locations'));
    document.getElementById("data").innerHTML = null;
    storeddata.forEach(el => {
        appendlocation(el);
    });
}

function addtovisited(el){
        let arr;
        arr = localStorage.getItem("visited");

        if(arr == null){
            arr = [];
        }
        else{
            arr = JSON.parse(arr);
        }

        arr.push(el);
        localStorage.setItem("visited", JSON.stringify(arr));
}

showlocations();


function showvisited(){
    window.location.href = 'visited.html';
}

function clear_inputs(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(el => el.value = "");
}