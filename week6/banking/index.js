import readline from "readline-sync";
import { createAccount } from "./createAccount.js";
import { help } from "./help.js";
console.clear();
console.log("Welcome to banking!\nType 'help' to get list of commands.");
let answer = readline.question("Command: ");

while (answer !== "exit"){
    if (answer === "help"){
        help();
        answer = readline.question("Command: ");
    } else if (answer === "createAccount"){
        createAccount();
        answer = readline.question("Command: ");
    }
}
