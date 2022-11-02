// const http = require('http');

// const server = http.createServer((req,res) => {
//     if(req.url ==="/") {
//         res.write("Home Page");
//         res.end()
//     }
//     if(req.url ==="/about") {
//         res.write("about Page");
//         res.end();
//     }
//     // res.write("Error Page")
// })

// server.listen(5000,() => {
//     console.log("Server port is 5000");
// })


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