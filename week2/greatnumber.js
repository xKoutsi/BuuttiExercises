let num1 = process.argv[2];
let num2 = process.argv[3];                                     // Get 2 numbers from console
let num3 = process.argv[4];                                     // EDIT: 1 more variable for password

num1 = parseInt(num1);                                          // Parse strings to integer
num2 = parseInt(num2);

if(num1>num2){                                                  // Conditions and console log different answers    
    console.log("Number "+num1+" is greater than "+num2);
}else if(num1<num2){
    console.log("Number "+num1+" is smaller than "+num2);
}else if(num1===num2 && num3 ==="hello world"){
    console.log("yay. you guessed the password!")
}else {
    console.log("Numbers "+num1+" and "+num2+" are equal");
}