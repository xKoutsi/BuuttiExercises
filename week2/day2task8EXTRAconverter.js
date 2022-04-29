let fromBase = process.argv[2];                     // get bases and number from console
let toBase = process.argv[3];    
let number = process.argv[4];
fromBase = fromBase.toUpperCase();    
toBase = toBase.toUpperCase();    

if (fromBase === "DEC"){                            // Added function that most commonly known numeral systems can be written
    fromBase = 10;
}else if(fromBase === "BIN"){
    fromBase = 2;
}else if(fromBase === "HEX"){
    fromBase = 16;
}else if(fromBase === "OCT"){
    fromBase = 8;
}

if (toBase === "DEC"){                              // Added function that most commonly known numeral systems can be written
    toBase = 10;
}else if(toBase === "BIN"){
    toBase = 2;
}else if(toBase === "HEX"){
    toBase = 16;
}else if(toBase === "OCT"){
    toBase = 8;
}

fromBase = parseInt(fromBase);
toBase = parseInt(toBase);
number = number.toUpperCase();                      // Switching string to upper case so it will accept upper and lower case characters.


let decNumber = 0;                                  // This has to be decimal number as it can only contain numbers
let baseNumber = "";                                // This has to be string as it can contain characters from A-Z and numbers from 0-9.

            /* Array for letters to numbers */
const letterToNumber = {0 : 0, 1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5 , 6 : 6, 7 : 7, 8 : 8, 9 : 9, A : 10, B : 11, C : 12, D : 13, E : 14, F : 15, G :16, H : 17, I : 18, J : 19, K : 20, L : 21, M : 22, N : 23, O : 24, P : 25, Q : 26, R :27, S : 28, T : 29, U : 30, V : 31, W : 32, X : 33, Y : 34, Z : 35};
const numberToLetter = [0, 1, 2, 3, 4, 5 , 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            /* Converts any base to DEC */
function baseToDec(){                               
    let exponentiation = 1;
    let figureOnIndex = 0;
    for (let index = 0; index < number.length; index++) {
        figureOnIndex = letterToNumber[number[number.length-1-index]];          // gets numeric figure for all chars, if larger base
        decNumber = decNumber + exponentiation*figureOnIndex;                   // updates decimal number
        exponentiation = exponentiation * fromBase;                             // updates exponentiation for next figure
        // console.log(figureOnIndex);   
    }
    
}
            /* Converts DEC to any base */
function decToBase(){
    while (decNumber > 0) {
        let baseModulo = numberToLetter[decNumber%toBase];                      // left over decimal number is divided by desired baseNumber every loop
        baseNumber = baseModulo+baseNumber;                                     // and left over modulo is added in front of the baseNumber string that
        decNumber = (decNumber-decNumber%toBase)/toBase;                        // can be printed later.
    }
    
    
}
for (let index = 0; index < number.length; index++) {                           // Checks if given number is possible with fromBase
    let figureOnIndex = 0;
    figureOnIndex = letterToNumber[number[number.length-1-index]];
    if(figureOnIndex >= fromBase){
        //throw new Error("Number is not valid in "+fromBase+" base.");           // Throw error, if number is not valid.
        console.log("Number is not valid in "+fromBase+" base.");
        process.exit();
    }    
}

        /* Different cases */
if (fromBase > 36 || toBase > 36 || fromBase < 2 || toBase < 2){
    console.log("Either base number is invalid. Choose base number between 1 and 36.")
}else if(fromBase === toBase){
    console.log("Both base numbers are the same. Your number will not convert.")
}else if(fromBase === 10){
    decToBase();
    console.log(baseNumber);
}else if(toBase === 10){
    baseToDec();
    console.log(decNumber);
}else{
    baseToDec();
    decToBase();
    console.log(baseNumber);
}