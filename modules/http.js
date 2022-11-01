const http = require('http');



const server = http.createServer((req, res) => {
    // res.write("<h1>Connect server code</h1>");
    // res.end()
    if (req.url === '/') {
        res.end("Welcome to Home Page");
        // res.end();
    }
    if (req.url === '/about') {
        res.end("This is about page"); 
        // res.end();
    }
    // res.end(`
    // <h1>OOPS !</h1>
    // <p>404  this is pls go to back </p>
    // <a href="/">
    // <buttton>Go To Back</button>
    // </a>
    // `)

})

server.listen(4000)