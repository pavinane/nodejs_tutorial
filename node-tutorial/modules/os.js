const os = require('os');

const user = os.userInfo()
console.log(user);


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freMEM:os.freemem()
}

console.log(currentOS);