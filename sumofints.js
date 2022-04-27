let userInput = process.argv[2];                    // Get number from console.
let numberTo = parseInt(userInput);
let outputFor = 0;
let outputWhile = 0;
let i = 0;


for (let index = 1; index <= numberTo; index++) {
    if (index%3 === 0 || index%5 === 0){
        outputFor = outputFor+index;
    }
}
console.log("For loop Output: "+outputFor);

while (i <= numberTo) {
    if (i%3 === 0 || i%5 === 0){
        outputWhile = outputWhile+i;
    }
    i++;
}
console.log("While loop Output: "+outputWhile);
