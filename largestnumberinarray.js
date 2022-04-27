const arr = [1, 4, 6, 32, 25, 16, 31, 15, 10, 2, 7];
let largest = 0;

for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
        largest = arr[index];
    }

}

console.log(largest);