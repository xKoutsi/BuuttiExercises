let str = process.argv[2];                                  // get string
const strArray = str.split(" ");                            // split string to words in an array
let modStr = "";                                            // Variable for modified string

for (let index = 0; index < strArray.length-1; index++) {   // For loop to go through every word in an array
    modStr = modStr+strArray[index]+" ";                    // and leave the last word out
    
}

console.log(modStr);                                        // Print modified string