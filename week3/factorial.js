let userNumber = process.argv[2];         
userNumber = parseInt(userNumber);

function factorial(number){
    factorialNumber = 1;
    while (number > 0){
        factorialNumber = factorialNumber*number;
        number--;
    }
    return factorialNumber

}

console.log(factorial(userNumber));