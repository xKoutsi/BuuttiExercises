for (let index = 1; index < 101; index++) {                 // for loop goes from 1 to 100
    if(index%3 === 0 && index%5 === 0){                     // modulo 3 and 5 print fizzbuzz
        console.log("FizzBuzz")
    }else if (index%3 === 0){
        console.log("Fizz");                                // modulo 3 prints fizz
    }else if(index%5 === 0){
        console.log("Buzz");                                // modulo 5 prins buzz
    }else {
        console.log(index);                                 // other instances print index
    }
    
}