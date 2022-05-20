const getValue = function () {
    return new Promise((res, rej) => {
    setTimeout(() => {
    res({ value: Math.random() });
    }, Math.random() * 1500);
    });
    let valueOneHere = await value;
};

let valueTwoHere = await getValue();
console.log(`Value 1 is
${valueOneHere} and value 2 is
${valueTwoHere}`);