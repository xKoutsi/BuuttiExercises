let operator = process.argv[2];             // get operator
let number = process.argv[3];               // get number
let number2 = process.argv[4];              // get number2

number = parseInt(number);
number2 = parseInt(number2);

function calculator(oper, num, num2){       // Separated if statements for different operators and one for invalid operator.
    let returnAnswer = 0;
    if (oper === "+"){
        returnAnswer = num + num2;
    }else if(oper === "-"){
        returnAnswer = num - num2;
    }else if(oper === "/"){
        returnAnswer = num / num2;
    }else if(oper === "*"){
        returnAnswer = num * num2;
    }else if(oper === "^"){
        returnAnswer = num ** num2;
    }else{
        console.log("Invalid operator. Functional operators are: + - * / and ^.")
    }
    console.log("Vastaus: "+returnAnswer)
}

calculator(operator, number, number2);