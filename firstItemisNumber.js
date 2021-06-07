const prompt = require("prompt-sync")();

//USER INPUT
let array = prompt("Enter an array");
 array = JSON.parse(array);

 //OUTPUT
 if (typeof(array[0]) !== 'number') {
     array = false;
 }

 else {
     array = true;
 }
 console.log(array)