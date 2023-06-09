let EventEmitter = require('events');
let eventemitter = new EventEmitter();

let {myfunction, myfunction2} = require('./mymodule');


eventemitter.on('Name', function(name){
    console.log('Give Name which is :- ' + name);
})

eventemitter.on('Age', function(age){
    console.log('Give Age which is :- ' + age);
})

eventemitter.on('Add', myfunction);
eventemitter.on('Mult', myfunction2);

eventemitter.emit('Name', 'Sohel');
eventemitter.emit('Age', 22);

eventemitter.emit('Add', 57,83);
let fun  = eventemitter.listeners('Name');
fun[0]('Priya');