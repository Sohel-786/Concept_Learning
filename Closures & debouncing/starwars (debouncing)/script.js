//https://swapi.dev/api/people/?search=r2
let container = document.querySelector('.results');
let search_bar = document.querySelector('.search_bar');

let show_char = async ()=>{
    try{
        let name = document.querySelector('#name').value;
        if(name == ""){
            container.style.display = 'none';
            search_bar.setAttribute('id','fake');
            return false;
        }
        search_bar.setAttribute('id', 'border_radius');
        let res = await fetch(`https://swapi.dev/api/people/?search=${name}`)
        res = await res.json();
        console.log(res);
        let {results} = res;
        append(results);
    }
    catch(err){
        console.log(err);
    }

}

function debounc(fn, d){
   
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(
             ()=>{
               fn();
             },d);
    }
}

let fun = debounc(show_char,300)

function append(data){
    
    container.style.display ='flex';
    container.innerHTML = null;
    let hr = document.createElement('hr');
    container.append(hr);
        data.forEach(({name,birth_year,gender}) => {
            
            let box = document.createElement('div');
            box.setAttribute('class', 'box');
            let div_child1 = document.createElement('div');
            let div_child2 = document.createElement('div');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let p2 = document.createElement('p');
           
            h3.innerHTML = name;
            p.innerHTML = birth_year;
            p2.innerHTML = gender;

            div_child1.append(h3,p);
            div_child2.append(p2);
            box.append(div_child1,div_child2);
            container.append(box);
        });
}