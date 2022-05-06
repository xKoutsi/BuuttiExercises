const dummyArray = [0, 5, 8, 11, 7, 9, 1, 12];                      // Dummy array for calculations
let overAvg = []                                                    // Array for numbers above average

function aboveAvg(array){                                           // Calculates which numbers in an array are above average 
    let sum = 0;
    array.forEach(element => {
        sum = sum+element;
    });
    let avg = sum / array.length;
 
    for (let index = 0; index < array.length; index++) {
        if (array[index] > avg){
            overAvg.push(array[index]);
        }
        
    }
    console.log(overAvg);
}

aboveAvg(dummyArray);                                               // Run function