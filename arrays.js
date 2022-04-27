let arr = ["banaani", "omena", "mandariini", "appelsiini", "kurkku", "tomaatti", "peruna"];

console.log(arr[2]);                // Print 3rd and 5th items on array
console.log(arr[4]);
console.log(arr.length);            // Print array length
arr.push("sipuli");                 // Add sipuli to array

arr.shift();                        // remove the first item on array
console.log(arr);

arr.forEach(element => {            // print each element with forEach
    console.log(element);
});

arr.forEach(element => {            // Print each element containing letter r using forEach
    if(element.includes("r")){
        console.log(element);
    }
});