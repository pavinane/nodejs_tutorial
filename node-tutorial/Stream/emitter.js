const EventEmitter = require('events');

const customerEmitter =  new EventEmitter();


// 1. many time write  response
// 2. it will be declared order wise  => on => emit it change the result cannot be displayed

 customerEmitter.on('response',(name,age) => {
    console.log(`My name is ${name} and ${age} years old`);
})

customerEmitter.on('response',() => {
    console.log("second response");
})


customerEmitter.emit('response',"pavi",25)