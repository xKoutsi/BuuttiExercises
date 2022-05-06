const dummyArray = ["Alex", "Linda", "Mark", "Max", "Payton"];
   
        /* Seperate if statements for all 5 different cases */
function likesThis(array){
    if (array.length === 0){
        console.log("No one likes this.");
    }else if(array.length === 1){
        console.log(array[0]+" likes this.");
    }else if(array.length === 2){
        console.log(array[0]+" and "+array[1]+" likes this.");
    }else if(array.length === 3){
        console.log(array[0]+", "+array[1]+" and "+array[2]+" likes this.");
    }else {
        console.log(array[0]+", "+array[1]+" and "+(array.length-2)+" others like this.");
    }
}


likesThis(dummyArray);