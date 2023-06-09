async function get_data(url){
    
    try{

       let res = await fetch(url);
        res = await res.json();
        return res;
    }
    catch(err){
        console.log(err);
    }

}


function append_data(product,container){

    product.forEach( ({title,image}) => {
        
    let div = document.createElement('div');

    let p = document.createElement('p');

    let img = document.createElement('img');

    p.innerHTML = title;
    img.src = image;

    div.append(img, p);
    container.append(div);

    });
}

export {get_data, append_data}