let style = process.argv[2];                    // get function for lower or upper
let string = process.argv[3];                   // get string

if(style === "upper"){                          // modify and print string accordingly
    string = string.toUpperCase();
    console.log(string);
}else if(style === "lower"){
    string = string.toLowerCase();
    console.log(string);
}else {
    console.log("Syntax: upperlower.js [upper/lower] ['your string']");
}