let userInput = process.argv[2];                                        // get string

function capitalizeFirstLetter(string) {                                // function to uppercase first letter of each word
    const wordArray = string.split(" ");
    let word = "";
    let returnString = "";
    
    for (let index = 0; index < wordArray.length; index++) {            // For loop to look for every word in original string
        word = wordArray[index];
        word = word[0].toUpperCase() + word.slice(1);                   // To capitalize the first letter
        returnString = returnString +" "+word;                          // and write those to returnstring
    }
    
    return  returnString.trim();
    
}

console.log(capitalizeFirstLetter(userInput));