let form = document.querySelector('form');

let registration_data = [
    {
        email: 'admin@gmail.com',
        password : 'admin'
    },
    {
        email: 'nrupul@gmail.com',
        password : 'masai'
    },
    {
        email: 'tomcruse@gmail.com',
        password : 'mission'
    }
];
if((localStorage.getItem('demoadmin')) == null){
    localStorage.setItem('demoadmin', JSON.stringify(registration_data))

}

function login(){
    let email = form.email.value;
    let password = form.pass.value;
    let count= 0;

    let admins = JSON.parse(localStorage.getItem('demoadmin'));
    for(let i = 0; i<admins.length; i++){

        let u = admins[i].email;
        let p = admins[i].password;

        if(u == email && p == password){
            window.location.href = 'home.html';
            count = 0;
            break;
        }
        else{
            count = 1;
        }
    }
    if(count == 1){
        alert('unsuccessful login');
    }
}