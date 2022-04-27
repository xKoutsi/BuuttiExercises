const userInput = process.argv[2];                          // Get number from console.
const triangleHeight = parseInt(userInput);
let output = "";
let output2 = "";


for (let index = 0; index < triangleHeight; index++) {      // Level 1
    output = output+"&"
    console.log(output);
}

for (let index = 0; index < triangleHeight; index++) {      // Level 2
    let space = " "
    let andmark = "&"
    output2 = space.repeat(triangleHeight-index)+andmark.repeat((index*2)+1);
    console.log(output2);
}

                            /* LEVEL 3 */
let i = 0;
let i2 = 0;
let output3 = "";
let output4 = "";

while (i < triangleHeight){
    output3 = output3+"&"
    console.log(output3);
    i++;
}

while (i2 < triangleHeight){
    let space = " "
    let andmark = "&"
    output4 = space.repeat(triangleHeight-i2)+andmark.repeat((i2*2)+1);
    console.log(output4);
    i2++;
}