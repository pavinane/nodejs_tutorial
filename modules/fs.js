const { readFileSync,writeFileSync } = require('fs')


const firstText = readFileSync('../ContentFolder/firstFile.txt','utf8')
console.log(firstText)

writeFileSync('../ContentFolder/result-page.txt',`Hello Node js World ,${firstText}`)