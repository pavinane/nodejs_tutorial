console.log("First task");
console.time();

for(let i=0;i >1000000;i++){
    const h3 = document.querySelector('h3')
    h3.textContent = `Hey this is first example of take time to display output`
}
console.timeEnd();
console.log("Time End");