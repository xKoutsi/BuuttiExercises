let userNumber = process.argv[2];                                       // get number
userNumber = parseInt(userNumber);
let loopCounter = 0;

while (userNumber > 1){                                                 // while loop until userNumber reaches 1      
    if (userNumber % 2 === 0){
        userNumber = userNumber/2;
        console.log(userNumber);
    }else{
        userNumber = (userNumber*3) + 1;
        console.log(userNumber);
    }
    loopCounter++
}

console.log(loopCounter);