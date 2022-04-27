let number_1 = process.argv[2];
let number_2 = process.argv[3];                                         // Get 3 numbers from console
let number_3 = process.argv[4];

number_1 = parseInt(number_1);                                          // Parse strings to integer
number_2 = parseInt(number_2);
number_3 = parseInt(number_3);

                            /* Conditions and console log */

if(number_1 === number_2 && number_2 === number_3){
    console.log("All three numbers are equal.");
}else if (number_1 > number_2 && number_2 > number_3){
    console.log(number_1+" is the largest number and "+number_3+" is the smallest number.");
}else if (number_1 > number_2 && number_2 < number_3 && number_1 > number_3){
    console.log(number_1+" is the largest number and "+number_2+" is the smallest number.");
}else if (number_2 > number_1 && number_1 > number_3){
    console.log(number_2+" is the largest number and "+number_3+" is the smallest number.");
}else if (number_2 > number_1 && number_1 < number_3 && number_2 > number_3){
    console.log(number_2+" is the largest number and "+number_1+" is the smallest number.");
}else if (number_3 > number_1 && number_1 > number_2){
    console.log(number_3+" is the largest number and "+number_2+" is the smallest number.");
}else if (number_3 > number_1 && number_1 < number_2 && number_3 > number_2){
    console.log(number_3+" is the largest number and "+number_1+" is the smallest number.");
}