let balance = process.argv[2];                                  // Get balance from console
let isActive =true;                           
let checkBalance =false;
balance = parseFloat(balance);

if(!checkBalance){                                              // Check balance?
    console.log("Have a nice day!");
}else if(isActive && balance > 0){                              // Is account active and balance positive?
    console.log("Your account balance is "+balance);
}else if(!isActive){                                            // Is account inactive?
    console.log("Your account is inactive.");
}else if(balance === 0){                                        // Is balance zero?
    console.log("Your account is empty.");
}else{                                                          // Account has to be overdrawn.
    console.log("Your account is overdrawn.");
}