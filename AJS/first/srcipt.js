async function get_data(){
   try {let response = await fetch('https://restcountries.com/v3.1/all')
    response = await response.json();
    console.log(response)
    response.forEach(({name,name:{common:dommon,official,nativeName},languages}) =>{
        let c_name = document.querySelector('#name').value;
        if(c_name == dommon || c_name == official){
                console.log(dommon);
        }
    })
    
}
    catch(err){
        console.log(err);
    }

}
 
