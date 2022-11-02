const {readFile,writeFile} = require("fs");
const { result } = require("lodash");

console.log("start");

readFile('../ContentFolder/firstFile.txt','utf8',(err,result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result
    readFile('../ContentFolder/SubContent/textFile.txt','utf8',(err,result) =>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        writeFile('../ContentFolder/result_async.txt',
        `Here is the result ${first},${second}`,
        (err,result) => {
            if(err) {
                console.log(err);
                return
            }
            console.log("done with the task");
        }
        )
    })
})

console.log("start with next task");