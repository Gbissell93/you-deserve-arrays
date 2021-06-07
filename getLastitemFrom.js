const prompt = require("prompt-sync")();

//USER INPUT
let array = prompt("Enter an array");
 array = JSON.parse(array);

//OUTPUT
console.log(array[array.length -1])