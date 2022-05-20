// Help commands

import readline from "readline-sync";

export function help(){
    console.clear();
    console.log("I'm happy to help! Here are commands you can use:\n \nAccounts\ncreateAccount --> opens dialog for creating an account\ncloseAccount --> Opens dialog for closing an account.\nmodifyAccount --> Opens dialog for modifying an account.\ndoesAccountExist -- > Opens a dialog for checking if the account exists.");
    console.log("\nlogin --> Opens a dialog for logging in.\nlogout --> Opens a dialog for logging out.\n");
    console.log("Funds\nwithdrawFunds --> Opens a dialog for withdrawing funds\ndepositFunds -- > Opens a dialog for depositing funds.\n")

   
}