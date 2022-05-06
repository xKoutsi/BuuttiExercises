const rightAnswers = ["a", "c", "d", "c", "a", "b", "b", "a", "c", "d"];        // ACDC ABBA CD ..always correct in multiple choice
const studentAnswers = ["a", "b", "b", "a", "c", "d", "a", "c", "d", "c"];      // All students doesn't know it

function checkExam(arr, arr2){                                                  // function takes 2 arrays (does not matter which is which)
    numberOfCorrect = 0;                                                        // number of correct answers is set for 0 and added 1 for
    for (let index = 0; index < arr.length; index++) {                          // each correct answer
        if (arr[index] === arr2[index]){
            numberOfCorrect++;
        }
        
    }
    console.log("You had "+numberOfCorrect+" correct answers.");
}

checkExam(rightAnswers, studentAnswers);