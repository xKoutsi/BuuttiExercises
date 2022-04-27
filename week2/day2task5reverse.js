let userInput = process.argv[2];                                    // Get string from console.

const wordsInString = userInput.split(" ");                         // Send words to an array
let reversedWords = [];
let reversedString = "";

for (let index = 0; index < wordsInString.length; index++) {        // reverse each word in an array 
    let temp = wordsInString[index];
    let temp2 = "";
    console.log(temp);
    for (let index2 = temp.length -1 ; index2 >= 0; index2--) {     // reverse letters in string
        temp2 += temp[index2];
    }
    reversedWords.push(temp2)                                       // push reversed words to new array
    
    
}
console.log(reversedWords);