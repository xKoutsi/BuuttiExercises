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



let countdownPromise = new Promise(function(myResolve, myReject) {
    const countdownRunning=false;
    if (countdownRunning){
        myResolve(); // when successful
    } else {
        myReject();  // when error
    }
});

countdownPromise.then(
    function(value) { countdown(1000) },
    function(error) { console.log(typeof(countdownPromise)) }
  );




