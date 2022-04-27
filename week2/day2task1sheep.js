let userInput = process.argv[2];                    // Get number from console.
let numberOfSheep = parseInt(userInput);
let str = "";

for (let index = 0; index < numberOfSheep; index++) {
    str = str+(index+1)+" sheep...";
    
}
console.log(str);