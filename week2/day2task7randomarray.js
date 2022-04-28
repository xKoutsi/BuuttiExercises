const array = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32];          // array of numbers

for (let index = 0; index < array.length; index++) {        // goes through every index in array and moves it up or down
    list = array.sort(() => Math.random() - 0.5);
    
}

console.log(array);

// This is not fully random as some orders are more likely than others. However this I understand how it works.