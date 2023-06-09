function register(){
    event.preventDefault();
    let form = document.querySelector('#register_form');

    let formdata = {
        name: form.name.value,
        email: form.email.value,
        mobile: form.mobile.value,
        password: form.pass.value,
        username: form.username.value,
        description: form.des.value
    }

    formdata = JSON.stringify(formdata);
    console.log(formdata)
    
    let option = {

        method: "POST",
        // mode: 'no-cors',
        body: formdata,

        //addtional information
        headers : {
            "Content-Type" : "application/json",
            // "Access-Control-Allow-Origin" : '*',
            // "Access-Control-Allow-Methods" : 'POST',
            // 'Access-Control-Allow-Credentials' : true
        }
    }

    async function register_data(){
        try{

           let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, option)

           res = await res.json();
           console.log(res);

        }catch(err){
            console.log(err);
        }
    }
    register_data();
}

function login(){
    event.preventDefault();
    
    let form = document.querySelector('#register_form');

    let formdata = {
        password: form.pass.value,
        username: form.username.value
    }

    let body = JSON.stringify(formdata);
    
    let option = {

        method: "POST",

        mode: 'no-cors',

        body: body,

        //addtional information
        headers : {
            "Content-Type" : "application/json",
            // "Access-Control-Allow-Origin" : '*  ',
            // "Access-Control-Allow-Methods" : 'POST',
            // 'Access-Control-Allow-Credentials' : true
        }
    }

    async function user_login(){
        try{

           let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, option)

           res = await res.json();
           let u = formdata.username;
           let t = res.token;
            
           get_user(u,t);

        }catch(err){
            console.log(err);
        }
    }
    user_login();

}

async function get_user(username,token){
    try{

        let res = await fetch(`https://masai-api-mocker.herokuapp.com//user/${username}`, {
            headers:{
                'Authorization' :  `Bearer ${token}` ,
                mode: 'no-cors',
            }
        })

        res = await res.json();
        console.log(res);

     }catch(err){
         console.log(err);
     }
}


