const competitors = ['Julia', "Mark", "Spencer", "Ann" , "John", "Joe"];                    // array of names
const ordinals = ['st', 'nd', 'rd', 'th'];                                                  // array of ordinal number endings

for (let index = 0; index < competitors.length; index++) {
    if(index%10 === 0 && index !== 10){                                                     // adds "st" behind every number ending with 1
        console.log((index+1)+ordinals[index]+" competitor was "+competitors[index]);       // except 11 ..as it is supposed to be 11th
    }else if (index%10 === 0 && index !== 11){                                              // adds "nd" behind every number ending with 2
        console.log((index+1)+ordinals[index]+" competitor was "+competitors[index]);       // except 12 ..as it is supposed to be 12th
    }else if (index%10 === 0 && index !== 12){                                              // adds "rd" behind every number ending with 3
        console.log((index+1)+ordinals[index]+" competitor was "+competitors[index]);       // except 13 ..as it is supposed to be 13th
    }else {
        console.log((index+1)+ordinals[3]+" competitor was "+competitors[index]);           // add "th" behind rest of numbers.
    }
} /* NOTICE This application does not work correctly for numbers above 100 */