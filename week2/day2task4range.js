let userInput1 = process.argv[2];                   // Get numbers from console.
let userInput2 = process.argv[3];             
let start = parseInt(userInput1);                   // Making sure numbers are integers
let end = parseInt(userInput2);
let numbArray = [];                                 // making array for numbers

if (start === end){                                 // Array for same start and end
    
    numbArray.push(end);
    console.log(numbArray);
}else if (start > end ) {                           // descending array
    while (start > end){
        numbArray.push(start);
        start = start-1;
    }
    numbArray.push(end);
    console.log(numbArray);
}else if (start < end ) {                           // ascending array
    while (start < end){
        numbArray.push(start);
        start++;
    }
    numbArray.push(end);
    console.log(numbArray);
}