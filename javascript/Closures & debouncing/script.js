
var timerid;

async function searchmovie(){
    let name = document.querySelector('#search').value;
    try{
            if(name.length <=2){
                return false;
            }
            let res = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=611293cc`)
            res = await res.json();
            let {Search} = res;
            return Search;
         
    }
    catch(err){
        console.log(err);
    }
}

function throttal_fun(){

    if(timerid){
        return false;
    }

   timerid =  setTimeout(() => {
        main();
        timerid = undefined;
    }, 2000);
}

function append(movies){

    let container = document.querySelector('#movies');
    container.style.display = 'flex';
    container.innerHTML = null;
    movies.forEach(el => {
        let div = document.createElement('div');
        let div2 = document.createElement('div');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let {Title,Poster,Year} = el;
        h3.innerHTML = Title;
        img.src = Poster;
        p.innerHTML = Year;

        div2.append(h3,p);
        div.append(img,div2);
        container.append(div);
    });
}   

async function main(){
    let data = await searchmovie();
    if(data !== undefined){
        append(data);
    }
}