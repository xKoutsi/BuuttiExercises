let month = process.argv[2];                                // Get month number from console
const days = [31,28,31,30,31,30,31,31,30,31,30,31];         // Array with how many days in each month
month = parseInt(month);

if(month === 0 || month > 12){
    console.log("Invalid month. Please pick a month between 1 and 12.");
}else {
    month = month-1;
    console.log("This month has "+days[month]+" days.");
}

