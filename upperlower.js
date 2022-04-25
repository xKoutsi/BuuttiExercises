let style = process.argv[2];                    // Get names from console.
let string = process.argv[3];  

if(style === "upper"){
    string = string.toUpperCase();
    console.log(string);
}else if(style === "lower"){
    string = string.toLowerCase();
    console.log(string);
}else {
    console.log("Choose 'upper' for upper case and 'lower' for lower case.");
}