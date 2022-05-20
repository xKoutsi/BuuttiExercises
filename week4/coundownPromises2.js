const delay = (time, str) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(str), time);
});

delay(1000, "3")
    .then((val) => {
        console.log(val);
        return delay(1000, "..2");
    })