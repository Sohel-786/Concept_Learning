let readline = require('readline');

let readline1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

readline1.question('What is your name ', function(name){
    readline1.question('What is your Age ', function(age){
        console.log(`${name} is ${age} years old`);
        readline1.close();
    })
})

readline1.on('close', function(){
    console.log('Bye Bye');
})