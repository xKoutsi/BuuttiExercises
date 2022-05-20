function countdown(timer) {
    setTimeout(() => {
        console.log("3");
    }, 1*timer);
    
    setTimeout(() => {
        console.log("..2");
    }, 2*timer);
    
    setTimeout(() => {
        console.log("...1");
    }, 3*timer);
    
    setTimeout(() => {
        console.log("GO!");
    }, 4*timer);
}

let countdownFunction = function (arg, func){
    func(arg);
}

countdownFunction(1000, countdown);

