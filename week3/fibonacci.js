let userInput = process.argv[2];
let output = ""
userInput = parseInt(userInput);
let temp = 1;
let temp2 = 1;
for (let index = 0; index < userInput; index++) {
    
    console.log(temp);
    temp = temp+temp;
    
}