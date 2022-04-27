const students = [
    {name: "markku", score: 99}, {name: "karoliina", score: 58},
    {name: "susanna", score: 69}, {name: "benjamin", score: 77},
    {name: "isak", score: 49}, {name: "liisa", score: 89},
];

let lowestStudent = {name:"" , score:999};
let highestStudent = {name:"" , score:0};
let scoreCombined = 0;
let betterThanAverage = {name:"", score:0};

for (let index = 0; index < students.length; index++) {
    if (students[index].score < lowestStudent.score){
        lowestStudent = students[index];
    }
    if(students[index].score > highestStudent.score){
        highestStudent = students[index];
    }
    scoreCombined = scoreCombined+students[index].score;
       
}
let averageScore = scoreCombined/(students.length+1)
for (let index = 0; index < students.length; index++) {
    if (students[index].score > averageScore){
        betterThanAverage = betterThanAverage + students[index];
    }
}
console.log(lowestStudent);
console.log(highestStudent);
console.table(betterThanAverage);