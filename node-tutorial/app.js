const http = require('http');
const fs = require('fs')


http.createServer(function(req,res) {
    const text = fs.readFileSync('./ContentFolder/firstFile.txt','utf-8');
    res.end(text);

    // const fileStream = fs.createReadStream('./ContentFolder/firstFile.txt','utf-8');
    // fileStream.on('open',() => {
    //     fileStream.pipe(res)
    // })
    // fileStream.on('error',(err) => {
    //     res.end(err)
    // })


}).listen(5000)


















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


