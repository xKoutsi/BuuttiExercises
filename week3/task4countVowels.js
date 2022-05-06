let userString = process.argv[2];             // get string

function countVowels(string){
    let vowelCount = 0;
    for (let index = 0; index < string.length; index++) {           // Simple for loop and if statement to count vowels
        if(string[index] === "a" || string[index] === "e" || string[index] === "i" || string[index] === "o" || string[index] === "y"){
            vowelCount++;
        }
        
    }
    console.log("String '"+userString+"' contains "+vowelCount+ " vowels");
}

countVowels(userString);