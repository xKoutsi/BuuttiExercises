// Create account

import readline from "readline-sync";
import fs from 'fs';


console.clear();

let accounts = fs.readFileSync("accounts.json")
let parsedAccounts = JSON.parse(accounts);
console.log(parsedAccounts);


export function createAccount(){
    

    console.log("What is your name?")
    const name = readline.question("Name: ");
    console.log("Hey "+name+" it's wonderful to have you as a customer!");
    let balance = 0;
    while (balance < 10){
        console.log("How much cash do you want to deposit to your account? (min. 10€)");
        balance = readline.question("Sum in EUR: ");
        balance = parseFloat(balance);
        if (balance < 10){
            console.log("Hey "+name+". Minimum deposit amount is 10 EUR.");
        }
    }
    let accountNumber = 1;
    console.log("Great, "+name+" . Your account has been now created. Your ID # is: "+accountNumber+". And your account balance is "+balance+" EUR.");
    console.log("Give us a password for your account!")
    const password = readline.question("Password: ");

    const userAccount = {
        "name":name, 
        "password":password, 
        "id":accountNumber, 
        "balance":balance, 
        "fundRequests": []
    }
    let data = JSON.stringify(userAccount);
    data = data.substring(1);
    data = data.substring(0, data.length - 1);
    parsedAccounts = JSON.stringify(parsedAccounts);
    parsedAccounts = "["+parsedAccounts +"\n,"+ data+"]";
    
 
    try {
        fs.writeFileSync('accounts.json', parsedAccounts);
        console.log("JSON data is saved.");
    } catch (error) {
        console.error(err);
    }

}