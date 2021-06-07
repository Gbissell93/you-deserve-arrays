const prompt = require("prompt-sync")();

//USER INPUT
let array = prompt("Enter an array");
 array = JSON.parse(array);

//OUTPUT
if (array.length < 3){
    console.log(array[array.length-1])
}
else {
    console.log(array[2])
}
