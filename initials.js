let name1 = process.argv[2];                    // Get names from console.
let name2 = process.argv[3];  
let name3 = process.argv[4];  

let initials = name1[0].toLowerCase()+"."+name2[0].toLowerCase()+"."+name3[0].toLowerCase()+".";

console.log(initials);