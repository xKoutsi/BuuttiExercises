let charOrigin = process.argv[2];                               // get char to be replaced
let charReplace = process.argv[3];                              // get char to be replaced with
let str = process.argv[4];                                      // get string

const re = new RegExp(charOrigin, "gi")
let result = str.replace(re, charReplace);                      // replace all chars. Not case sensitive

console.log(result);