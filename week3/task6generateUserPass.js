let firstName = process.argv[2];                                    // get Name
let lastName = process.argv[3];    
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  // strings with characters to be randomized later
let specChars = "\.[]{}()<>*+-=!?^$|"
let userName = "";


function getUserName(name, name2){                                      // get username
    let lowerLastName = name2.toLowerCase();
    let lowerFirstName = name.toLowerCase();
    splicedName = lowerLastName.slice(0,2)+lowerFirstName.slice(0,2);
    let year = new Date().getFullYear();
    year = year.toString();
    userName = "B"+year.slice(2,4)+splicedName;
    console.log(userName);
}

function getPassword(name, name2){                                      // get password
    let lowerFirstName = name.toLowerCase();
    let upperLastName = name2.toUpperCase();
    let year = new Date().getFullYear();
    year = year.toString();
    const rng = Math.floor(Math.random() * 51);                         // randomize number to get letter from string
    const rng2 = Math.floor(Math.random() * 19);                        // randomize number to get special character from string
    let password = chars[rng]+lowerFirstName.slice(0,1)+upperLastName.slice(-1)+specChars[rng2]+year.slice(2,4);
    console.log(password);
}

getUserName(firstName, lastName);
getPassword(firstName, lastName);