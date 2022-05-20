let userInput = process.argv[2];                                // get string
let reversedInput = "";

for (let index = userInput.length -1 ; index >= 0; index--) {   // reverse string
    reversedInput += userInput[index];
}

if (userInput === reversedInput){                               // if reversed string equals to original
    console.log("Sana "+userInput+" on palindromi.");           // word is palindrome
}else {
    console.log("Sana "+userInput+" ei ole palindromi.");       // else word is not palindrome
}
