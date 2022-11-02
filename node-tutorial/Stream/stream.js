const { createReadStream} = require('fs');

const stream  = createReadStream('../ContentFolder/Result_promise.txt',
// {encoding:'utf-8'}   //incase u want read text use this encoding

);

stream.on('data',(result) => {
    console.log(result);
})