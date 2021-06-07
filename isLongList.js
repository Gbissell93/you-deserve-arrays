const prompt = require("prompt-sync")();

//USER INPUT
let array = prompt("Enter an array");
 array = JSON.parse(array);

 //OUTPUT
 if (array.length < 10) {
     array = false;
 }

 else {
     array = true;
 }
 console.log(array)