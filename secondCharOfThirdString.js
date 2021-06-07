const prompt = require("prompt-sync")();

//USER INPUT
let array = prompt("Enter an array");
 array = JSON.parse(array);

 //OUTPUT
 if (typeof(array[2]) !== 'string') {
     console.log("Error")
 }

 else {
    console.log(array[2][1]) 
 }
