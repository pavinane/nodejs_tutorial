const {readFile,writeFile} = require('fs');
const util = require('util');

// second type
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)



// Type of geting out from  read and write file


// const getFile = (path) => {
//     return new Promise((resolve, reject) => {

//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }

//         })
//     })
// }



// first type

// getFile('./ContentFolder/firstFile.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err));


const start = async() => {
    // const first = await getFile('./ContentFolder/firstFile.txt');
    try {
        const first = await readFilePromise('./ContentFolder/firstFile.txt','utf8');
        console.log(first);
        await writeFilePromise('./ContentFolder/Result_promise.txt',`Promise methods of output:${first}`)
    } catch (error) {
        console.log(error);
    }
   
}
start()