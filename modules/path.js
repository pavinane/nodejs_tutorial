const path = require('path');

console.log(path.sep);

const fileDirectory = path.join('ContentFolder','SubContent','textFile.txt');
console.log(fileDirectory);

const basePath = path.basename(fileDirectory);
console.log(basePath);

const exactPath = path.join(__dirname,'ContentFolder','SubContent','textFile.txt');
console.log(exactPath);