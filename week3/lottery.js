let lotteryNumbers = [];

function getLotteryNumber(){
    return Math.floor(Math.random() * 40);
};


for (let index = 0; index < 7; index++) {
    let tempNumber = getLotteryNumber();
    if (lotteryNumbers.includes(tempNumber)){
        tempNumber = getLotteryNumber();
    }else {
        lotteryNumbers.push(tempNumber);
    }

}

console.log(lotteryNumbers);